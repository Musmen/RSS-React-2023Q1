import './SearchBar.css';

import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';

import localStorageService from '../../services/local-storage.service';
import { LOCAL_STORAGE_KEYS } from '../../common/constants';

const DEFAULT_SEARCH_VALUE = '';

function SearchBar() {
  const searchValueFromLS = localStorageService.getFromLS(LOCAL_STORAGE_KEYS.SEARCH_VALUE);
  const [searchValue, setSearchValue] = useState(searchValueFromLS || DEFAULT_SEARCH_VALUE);

  useEffect(() => {
    localStorageService.setToLS(searchValue, LOCAL_STORAGE_KEYS.SEARCH_VALUE);
  }, [searchValue]);

  const onClearBtnClickHandler = () => {
    setSearchValue(DEFAULT_SEARCH_VALUE);
    localStorageService.deleteFromLS(LOCAL_STORAGE_KEYS.SEARCH_VALUE);
  };

  const onSearchValueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const newSearchValue: string = event.target.value;
    setSearchValue(newSearchValue);
    localStorageService.setToLS(newSearchValue, LOCAL_STORAGE_KEYS.SEARCH_VALUE);
  };

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
  };

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
