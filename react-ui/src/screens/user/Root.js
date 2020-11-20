import React from 'react';
import { useSelector } from 'react-redux';
import { ScreensUserDevRoot } from './dev/Root';
import { ScreensUserNormalRoot } from './normal/Root';
import './Root.scss';

export const ScreensUserRoot = () => {
  const { isDev } = useSelector((state) => state.auth);

  return !isDev ? <ScreensUserNormalRoot /> : <ScreensUserDevRoot />;
};
