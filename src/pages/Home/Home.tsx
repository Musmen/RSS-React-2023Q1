import React, { useCallback, useEffect, useRef, useState } from 'react';

import SearchBar from '../../components/SearchBar/SearchBar';
import CardsList from '../../containers/CardsList/CardsList';
import Spinner from '../../components/Spinner/Spinner';
import PopupCard from '../../components/PopupCard/PopupCard';
import Popup from '../../components/Popup/Popup';
import Message from '../../components/Message/Message';

import localStorageService from '../../services/local-storage.service';
import { getCardsFromFlickr, getPhotoCardFromFlickr } from '../../services/flickr/flickr.service';

import { ERROR_MESSAGES, LOCAL_STORAGE_KEYS } from '../../common/constants';

import { CardType } from '../../models/card';

const DEFAULT_SEARCH_REQUEST = 'animals';

function Home() {
  const [currentPhotoCard, setCurrentPhotoCard] = useState<CardType>({} as CardType);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const searchRequestFromLS = localStorageService.getFromLS(LOCAL_STORAGE_KEYS.SEARCH_VALUE);
  const searchRequestRef = useRef<string>();

  const [cards, setCards] = useState<CardType[]>([]);
  const [searchRequest, updateSearchRequest] = useState(searchRequestFromLS || '');

  useEffect(() => {
    searchRequestRef.current = searchRequest;
  }, [searchRequest]);

  useEffect(() => {
    return () =>
      localStorageService.setToLS(searchRequestRef.current || '', LOCAL_STORAGE_KEYS.SEARCH_VALUE);
  }, []);

  const setError = useCallback((errorMessage: string) => {
    setIsError(Boolean(errorMessage));
    setErrorMessage(errorMessage);
  }, []);

  const updateSearchResults = useCallback(
    async (searchRequest: string) => {
      setIsLoading(true);

      try {
        const cards: CardType[] = await getCardsFromFlickr(searchRequest || DEFAULT_SEARCH_REQUEST);
        setCards(cards);
      } catch (error) {
        const errorMessage = (error as Error).message || ERROR_MESSAGES.DEFAULT;
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    },
    [setError]
  );

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

  useEffect(() => {
    updateSearchResults(searchRequest);
  }, [updateSearchResults, searchRequest]);

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

      <SearchBar
        searchRequest={searchRequest}
        updateSearchRequest={updateSearchRequest}
        placeholder={`Default request - "${DEFAULT_SEARCH_REQUEST}"`}
      />
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
