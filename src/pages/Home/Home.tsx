import React from 'react';

import SearchBar from '../../components/SearchBar/SearchBar';
import CardsList from '../../containers/CardsList/CardsList';

import { cardsData } from '../../data/cardsData';

function Home() {
  return (
    <>
      <SearchBar />
      <CardsList cards={cardsData} />
    </>
  );
}

export default Home;
