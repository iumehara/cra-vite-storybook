import React, {useState} from 'react';
import {Spinner} from './Spinner/Spinner';
import './Main.scss';

export enum SpinDirection {
  Stop,
  Right,
  Left
}

export const Main = () => {
  const [spinDirection, setSpinDirection] = useState(SpinDirection.Right);

  return (
    <div className="Main">
      <div className='Spinner-row'>
        <button onClick={() => setSpinDirection(SpinDirection.Left)}
                disabled={spinDirection === SpinDirection.Left}>
          Spin Left
        </button>
        <div className='Spinner-col'>
          <button onClick={() => setSpinDirection(SpinDirection.Stop)}
                  disabled={spinDirection === SpinDirection.Stop}>
            Stop
          </button>
          <Spinner direction={spinDirection}/>
        </div>
        <button onClick={() => setSpinDirection(SpinDirection.Right)}
                disabled={spinDirection === SpinDirection.Right}>
          Spin Right
        </button>
      </div>
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
