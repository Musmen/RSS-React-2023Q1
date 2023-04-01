import React, { useCallback, useEffect, useRef, useState } from 'react';

import CardForm from '../../containers/CardForm/CardForm';
import CardsList from '../../containers/CardsList/CardsList';
import Message from '../../components/Message/Message';

import {
  MESSAGE_VISIBILITY_DELAY_IN_MS,
  SUCCESS_CARD_CREATION_MESSAGE,
  CARD_FORM_PAGE_DEFAULT_STATE,
} from './CardFormPage.constants';

import { BigCardType, CardType } from '../../models/card';

function CardFormPage() {
  const messageVisibilityTimer = useRef<NodeJS.Timeout | null>(null);

  const [cards, setCards] = useState<(CardType | BigCardType)[]>(
    CARD_FORM_PAGE_DEFAULT_STATE.cards
  );

  const [isMessageVisible, setIsMessageVisible] = useState<boolean>(
    CARD_FORM_PAGE_DEFAULT_STATE.isMessageVisible
  );

  const showMessage = useCallback(() => setIsMessageVisible(true), []);
  const hideMessage = useCallback(() => setIsMessageVisible(false), []);

  useEffect(() => {
    const timerId = messageVisibilityTimer.current;

    return () => {
      timerId && clearTimeout(timerId);
    };
  }, [messageVisibilityTimer]);

  const addCard = useCallback(
    (card: CardType | BigCardType) => {
      const newCardId = String(cards.length);
      const newCard: CardType | BigCardType = { ...card, id: newCardId };
      setCards([...cards, newCard]);
    },
    [cards]
  );

  const renderMessage = useCallback(() => {
    showMessage();
    messageVisibilityTimer.current = setTimeout(hideMessage, MESSAGE_VISIBILITY_DELAY_IN_MS);
  }, [showMessage, hideMessage]);

  return (
    <>
      <CardForm addCard={addCard} renderMessage={renderMessage} />
      <CardsList cards={cards} isBigCards={true} />
      {isMessageVisible && <Message message={SUCCESS_CARD_CREATION_MESSAGE} />}
    </>
  );
}

export default CardFormPage;
