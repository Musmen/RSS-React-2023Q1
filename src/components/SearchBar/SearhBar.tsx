import './SearchBar.css';

import React, { ChangeEvent, FormEvent } from 'react';

const DEFAULT_SEARCH_VALUE = '';

class SearchBar extends React.Component<Record<string, never>, { searchValue: string }> {
  state = { searchValue: DEFAULT_SEARCH_VALUE };

  onClearBtnClickHandler = () => {
    this.setState({ searchValue: DEFAULT_SEARCH_VALUE });
  };

  onSearchValueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: event.target.value });
  };

  onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
  };

  render() {
    const { searchValue } = this.state;

    return (
      <form className="SearchBar" onSubmit={this.onSubmitHandler}>
        <label className="SearchBar__label">
          <input
            className="SearchBar__input"
            name="SearchBar"
            placeholder="Input your search request, please"
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
