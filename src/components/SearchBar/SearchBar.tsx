import './SearchBar.css';

import React, { Component, ChangeEvent, FormEvent } from 'react';

import localStorageService from '../../services/local-storage.service';
import { LOCAL_STORAGE_KEYS } from '../../common/constants';

const DEFAULT_SEARCH_VALUE = '';

class SearchBar extends Component<Record<string, never>, { searchValue: string }> {
  state = {
    searchValue:
      localStorageService.getFromLS(LOCAL_STORAGE_KEYS.SEARCH_VALUE) || DEFAULT_SEARCH_VALUE,
  };

  onClearBtnClickHandler = () => {
    this.setState({ searchValue: DEFAULT_SEARCH_VALUE });
    localStorageService.deleteFromLS(LOCAL_STORAGE_KEYS.SEARCH_VALUE);
  };

  onSearchValueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const newSearchValue: string = event.target.value;
    this.setState({ searchValue: newSearchValue });
    localStorageService.setToLS(newSearchValue, LOCAL_STORAGE_KEYS.SEARCH_VALUE);
  };

  onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
  };

  componentWillUnmount() {
    const { searchValue } = this.state;
    localStorageService.setToLS(searchValue, LOCAL_STORAGE_KEYS.SEARCH_VALUE);
  }

  render() {
    const { searchValue } = this.state;

    return (
      <form className="SearchBar" onSubmit={this.onSubmitHandler}>
        <label className="SearchBar__label">
          <input
            className="SearchBar__input"
            name="SearchBar"
            placeholder="Your search request"
            title="Input your search request, please"
            value={searchValue}
            onChange={this.onSearchValueChangeHandler}
          />
          <button
            className="SearchBar__clear-btn"
            type="reset"
            title="Clear search input"
            onClick={this.onClearBtnClickHandler}
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;
