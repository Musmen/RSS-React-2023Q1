import React, { Component } from 'react';

import CardForm from '../../containers/CardForm/CardForm';
import CardsList from '../../containers/CardsList/CardsList';
import Message from '../../components/Message/Message';

import {
  MESSAGE_VISIBILITY_DELAY_IN_MS,
  SUCCESS_CARD_CREATION_MESSAGE,
} from './CardFormPage.constants';

import { BigCardType, CardType } from '../../models/card';
import { DEFAULT_STATE, State } from './CardFormPage.models';

class CardFormPage extends Component<Record<string, never>, State> {
  messageVisibilityTimer: NodeJS.Timeout | null = null;

  state: State = DEFAULT_STATE;

  addCard = (card: CardType | BigCardType) => {
    const newCardId = String(this.state.cards.length);
    const newCard: CardType | BigCardType = { ...card, id: newCardId };
    this.setState((prevState: State) => ({ cards: [...prevState.cards, newCard] }));
  };

  showMessage = () => {
    this.setState({ isMessageVisible: true });

    this.messageVisibilityTimer = setTimeout(
      () => this.setState({ isMessageVisible: false }),
      MESSAGE_VISIBILITY_DELAY_IN_MS
    );
  };

  componentWillUnmount() {
    this.messageVisibilityTimer && clearTimeout(this.messageVisibilityTimer);
  }

  render() {
    const { addCard, showMessage } = this;
    const { cards, isMessageVisible } = this.state;

    return (
      <>
        <CardForm addCard={addCard} showMessage={showMessage} />
        <CardsList cards={cards} isBigCards={true} />
        {isMessageVisible && <Message message={SUCCESS_CARD_CREATION_MESSAGE} />}
      </>
    );
  }
}

export default CardFormPage;
