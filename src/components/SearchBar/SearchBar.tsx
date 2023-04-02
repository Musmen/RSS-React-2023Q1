import './SearchBar.css';

import React, { ChangeEvent, FormEvent, useState, useEffect, useCallback, useRef } from 'react';

import localStorageService from '../../services/local-storage.service';
import { LOCAL_STORAGE_KEYS } from '../../common/constants';

const DEFAULT_SEARCH_VALUE = '';

function SearchBar() {
  const searchValueFromLS = localStorageService.getFromLS(LOCAL_STORAGE_KEYS.SEARCH_VALUE);

  const [searchValue, setSearchValue] = useState<string>(searchValueFromLS || DEFAULT_SEARCH_VALUE);

  const searchValueRef = useRef<string>();

  useEffect(() => {
    searchValueRef.current = searchValue;
  }, [searchValue]);

  useEffect(() => {
    return () =>
      localStorageService.setToLS(
        searchValueRef.current || DEFAULT_SEARCH_VALUE,
        LOCAL_STORAGE_KEYS.SEARCH_VALUE
      );
  }, []);

  const onClearBtnClickHandler = useCallback(() => {
    setSearchValue(DEFAULT_SEARCH_VALUE);
  }, []);

  const onSearchValueChangeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const newSearchValue: string = event.target.value;
    setSearchValue(newSearchValue);
  }, []);

  const onSubmitHandler = useCallback((event: FormEvent) => {
    event.preventDefault();
  }, []);

  return (
    <form className="SearchBar" onSubmit={onSubmitHandler}>
      <label className="SearchBar__label">
        <input
          className="SearchBar__input"
          name="SearchBar"
          placeholder="Your search request"
          title="Input your search request, please"
          value={searchValue}
          onChange={onSearchValueChangeHandler}
        />
        <button
          className="SearchBar__clear-btn"
          type="reset"
          title="Clear search input"
          onClick={onClearBtnClickHandler}
        />
      </label>
    </form>
  );
}

export default SearchBar;
