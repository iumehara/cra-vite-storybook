import logo from '../../logo.svg';
import React from 'react';
import './Spinner.scss';
import {SpinDirection} from '../Main';

interface SpinnerProps {
  direction: SpinDirection
}

export const Spinner = ({direction}: SpinnerProps) => {
  return <img src={logo} className={`Spinner ${SpinDirection[direction]}`} alt="logo"/>;
};
