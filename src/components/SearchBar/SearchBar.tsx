import './SearchBar.css';

import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { updateSearchRequest } from '../../redux/actions/searchApi.actions';

interface SearchBarProps {
  placeholder?: string;
}

function SearchBar({ placeholder }: SearchBarProps) {
  const searchQuery = useAppSelector((state) => state.searchApi.request);
  const dispatch = useAppDispatch();

  const [searchValue, setSearchValue] = useState(searchQuery || '');

  const onClearBtnClickHandler = useCallback(() => {
    setSearchValue('');
  }, [setSearchValue]);

  const onSearchValueChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newSearchValue: string = event.target.value;
      setSearchValue(newSearchValue);
    },
    [setSearchValue]
  );

  const onSubmitHandler = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      dispatch(updateSearchRequest(searchValue));
    },
    [dispatch, searchValue]
  );

  return (
    <form className="SearchBar" onSubmit={onSubmitHandler}>
      <label className="SearchBar__label">
        <input
          className="SearchBar__input"
          name="SearchBar"
          placeholder={placeholder || 'Your search request'}
          title="Input your search request, please"
          value={searchValue}
          onChange={onSearchValueChangeHandler}
        />
        <button
          className="SearchBar__clear-btn button_clear"
          type="reset"
          title="Clear search input"
          onClick={onClearBtnClickHandler}
        />
      </label>
    </form>
  );
}

export default SearchBar;
