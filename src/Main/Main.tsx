import React from 'react';
import {Spinner} from './Spinner/Spinner';
import './Main.scss';

export const Main = () => {
  return (
    <div className="Main">
      <Spinner/>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
};
