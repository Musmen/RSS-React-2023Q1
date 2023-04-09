import './SearchBar.css';

import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';

interface SearchBarProps {
  searchRequest?: string;
  updateSearchRequest?: (newSearchRequest: string) => void;
  placeholder?: string;
}

function SearchBar({ searchRequest, updateSearchRequest, placeholder }: SearchBarProps) {
  const [searchValue, setSearchValue] = useState(searchRequest || '');

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
      updateSearchRequest && updateSearchRequest(searchValue);
    },
    [updateSearchRequest, searchValue]
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
