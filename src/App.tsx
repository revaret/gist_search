import React from 'react';
import { ReusableProvider } from 'reusable';
import './App.scss';
import SearchBar from './components/SearchBar';
import SearchList from './components/SearchList';

const App = (): JSX.Element => {
  return (
    <ReusableProvider>
      <div className="App">
        <SearchBar />
        <SearchList />
      </div>
    </ReusableProvider>
  );
};

export default App;
