import React from 'react';
import Store from '../store';

const SearchBar = (): JSX.Element => {
  const { callGetGistUserApi } = Store();
  const onQueryChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    callGetGistUserApi(e.target.value);
  };
  return (
    <div className="input-container">
      <input
        onChange={onQueryChange}
        className="search-input"
        placeholder="Enter git username"
      />
    </div>
  );
};

export default SearchBar;
