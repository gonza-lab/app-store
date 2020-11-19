import React from 'react';
import { useSelector } from 'react-redux';
import { ScreensUserNormalRoot } from './normal/Root';
import './Root.scss';

export const ScreensUserRoot = () => {
  const { isDev } = useSelector((state) => state.auth);

  return !isDev ? <ScreensUserNormalRoot /> : <div>'hola'</div>;
};
