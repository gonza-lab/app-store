import React from 'react';
import { useParams } from 'react-router-dom';

export const ScreensAppRoot = () => {
  const { category } = useParams();

  return <div>Pantalla de aplicaciones. Categoria: {category}</div>;
};
