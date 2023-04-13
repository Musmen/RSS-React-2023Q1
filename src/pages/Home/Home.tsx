import React, { useCallback, useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addSearchResultCards } from '../../redux/actions/searchApi.actions';

import SearchBar from '../../components/SearchBar/SearchBar';
import CardsList from '../../containers/CardsList/CardsList';
import Spinner from '../../components/Spinner/Spinner';
import PopupCard from '../../components/PopupCard/PopupCard';
import Popup from '../../components/Popup/Popup';
import Message from '../../components/Message/Message';

import { getCardsFromFlickr, getPhotoCardFromFlickr } from '../../services/flickr/flickr.service';

import { ERROR_MESSAGES } from '../../common/constants';

import { CardType } from '../../models/card';

const DEFAULT_SEARCH_REQUEST = 'animals';

function Home() {
  const dispatch = useAppDispatch();
  const searchRequest = useAppSelector((state) => state.searchApi.request);
  const cards = useAppSelector((state) => state.searchApi.resultCards);

  const [currentPhotoCard, setCurrentPhotoCard] = useState<CardType>({} as CardType);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const setError = useCallback((errorMessage: string) => {
    setIsError(Boolean(errorMessage));
    setErrorMessage(errorMessage);
  }, []);

  const updateSearchResults = useCallback(
    async (searchRequest: string) => {
      setIsLoading(true);

      try {
        const cards: CardType[] = await getCardsFromFlickr(searchRequest || DEFAULT_SEARCH_REQUEST);
        dispatch(addSearchResultCards(cards));
      } catch (error) {
        const errorMessage = (error as Error).message || ERROR_MESSAGES.DEFAULT;
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    },
    [setError, dispatch]
  );

  useEffect(() => {
    updateSearchResults(searchRequest);
  }, [updateSearchResults, searchRequest]);

  const showCurrentPhotoCardPopup = useCallback(
    async (photoId: string) => {
      setIsLoading(true);

      try {
        const currentPhoto: CardType = await getPhotoCardFromFlickr(photoId);
        setCurrentPhotoCard(currentPhoto);
        setIsPopupOpen(true);
      } catch (error) {
        const errorMessage = (error as Error).message || ERROR_MESSAGES.DEFAULT;
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    },
    [setError]
  );

  const closePopup = useCallback(() => {
    setIsPopupOpen(false);
  }, []);

  const closeErrorPopup = useCallback(() => {
    setError('');
    closePopup();
  }, [closePopup, setError]);

  return (
    <>
      {isLoading && <Spinner />}

      <SearchBar placeholder={`Default request - "${DEFAULT_SEARCH_REQUEST}"`} />
      <CardsList cards={cards} onCardClickHandler={showCurrentPhotoCardPopup} />

      {isPopupOpen && (
        <Popup closePopup={closePopup}>
          <PopupCard card={currentPhotoCard} />
        </Popup>
      )}

      {isError && (
        <Popup closePopup={closeErrorPopup}>
          <Message message={errorMessage} classNames={{ wrapper: 'Error-message' }} />
        </Popup>
      )}
    </>
  );
}

export default Home;
