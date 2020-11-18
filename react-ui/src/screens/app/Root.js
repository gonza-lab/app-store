import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppCard } from '../../components/app/Card/Card';
import { AppList } from '../../components/app/List/List';

import './Root.scss';

export const ScreensAppRoot = () => {
  const { category } = useParams();
  const { apps } = useSelector((state) => state.app);

  const appsFiltered = useMemo(() => {
    if (category) {
      return apps.filter((app) => app.category.name.toLowerCase() === category);
    }

    return apps;
  }, [category, apps]);

  return (
    <div className="screens-app-root">
      <AppList
        title={
          category
            ? category[0].toUpperCase() + category.substr(1)
            : 'Todas las apps'
        }
      >
        {appsFiltered.map((app) => (
          <AppCard
            name={app.name}
            img={app.logo}
            developer={app.user.name}
            id={app._id}
            price={app.price ? app.price : undefined}
          />
        ))}
      </AppList>
    </div>
  );
};
