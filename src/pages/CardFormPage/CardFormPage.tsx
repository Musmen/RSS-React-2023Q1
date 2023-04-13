import './css/message.css';

import React, { useCallback, useEffect, useRef, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addFormCard } from '../../redux/actions/cardForm.actions';

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

  const cards = useAppSelector((state) => state.cardForm.cards);
  const dispatch = useAppDispatch();

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
      dispatch(addFormCard(newCard));
    },
    [cards.length, dispatch]
  );

  const renderMessage = useCallback(() => {
    showMessage();
    messageVisibilityTimer.current = setTimeout(hideMessage, MESSAGE_VISIBILITY_DELAY_IN_MS);
  }, [showMessage, hideMessage]);

  return (
    <>
      <CardForm addCard={addCard} renderMessage={renderMessage} />
      <CardsList cards={cards} isBigCards={true} />
      {isMessageVisible && (
        <Message
          classNames={{ wrapper: 'success-message__layout', message: 'success-message__content' }}
          message={SUCCESS_CARD_CREATION_MESSAGE}
        />
      )}
    </>
  );
}

export default CardFormPage;
