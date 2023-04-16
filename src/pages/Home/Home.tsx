import React, { useCallback, useEffect, useState } from 'react';

import { skipToken } from '@reduxjs/toolkit/dist/query/react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addSearchResultCards } from '../../redux/slices/search.slice';
import {
  useFetchPhotoInfoByIdQuery,
  useFetchPhotosBySearchRequestQuery,
} from '../../redux/slices/flickrApi.slice';

import SearchBar from '../../components/SearchBar/SearchBar';
import CardsList from '../../containers/CardsList/CardsList';
import Spinner from '../../components/Spinner/Spinner';
import PopupCard from '../../components/PopupCard/PopupCard';
import Popup from '../../components/Popup/Popup';
import Message from '../../components/Message/Message';

import { getErrorMessage } from '../../common/helpers';
import { DEFAULT_ERROR_MESSAGE } from '../../common/constants';

const DEFAULT_SEARCH_REQUEST = 'animals';

function Home() {
  const dispatch = useAppDispatch();
  const searchRequest = useAppSelector((state) => state.search.request);
  const cards = useAppSelector((state) => state.search.resultCards);

  const [currentPhotoCardId, setCurrentPhotoCardId] = useState<string>('');

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const {
    isFetching: isLoadingPhotos,
    isError: isErrorPhotos,
    data: fetchedPhotosCards,
    error: errorPhotosFetching,
  } = useFetchPhotosBySearchRequestQuery(searchRequest || DEFAULT_SEARCH_REQUEST);

  const {
    isFetching: isLoadingPhotoInfo,
    isError: isErrorPhotoInfo,
    data: fetchedCurrentPhotoCard,
    error: errorPhotoInfoFetching,
  } = useFetchPhotoInfoByIdQuery(currentPhotoCardId || skipToken);

  useEffect(() => {
    setIsLoading(isLoadingPhotos || isLoadingPhotoInfo);
  }, [isLoadingPhotos, isLoadingPhotoInfo]);

  useEffect(() => {
    setIsError(isErrorPhotos || isErrorPhotoInfo);
  }, [isErrorPhotos, isErrorPhotoInfo]);

  useEffect(() => {
    let errorMessage: string | undefined;

    if (errorPhotosFetching) {
      errorMessage = getErrorMessage(errorPhotosFetching);
    } else if (errorPhotoInfoFetching) {
      errorMessage = getErrorMessage(errorPhotoInfoFetching);
    }

    setErrorMessage(errorMessage || DEFAULT_ERROR_MESSAGE);
  }, [errorPhotosFetching, errorPhotoInfoFetching]);

  useEffect(() => {
    dispatch(addSearchResultCards(fetchedPhotosCards));
  }, [dispatch, fetchedPhotosCards]);

  const showCurrentPhotoCardPopup = useCallback((photoId: string) => {
    setCurrentPhotoCardId(photoId);
    setIsPopupOpen(true);
  }, []);

  const closePopup = useCallback(() => {
    setIsPopupOpen(false);
  }, []);

  const closeErrorPopup = useCallback(() => {
    setIsError(false);
    closePopup();
  }, [closePopup, setIsError]);

  return (
    <>
      {isLoading && <Spinner />}

      <SearchBar placeholder={`Default request - "${DEFAULT_SEARCH_REQUEST}"`} />
      <CardsList cards={cards} onCardClickHandler={showCurrentPhotoCardPopup} />

      {isPopupOpen && (
        <Popup closePopup={closePopup}>
          <PopupCard card={fetchedCurrentPhotoCard} />
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
