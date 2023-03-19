import React from 'react';

import SearchBar from '../../components/SearchBar/SearchBar';
import CardsList from '../../containers/CardsList/CardsList';

import { cardsData } from '../../data/cardsData';

class Home extends React.Component {
  render() {
    return (
      <>
        <SearchBar />
        <CardsList cards={cardsData} />
      </>
    );
  }
}

export default Home;
