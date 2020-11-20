import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppCard } from '../../components/app/Card/Card';
import { AppList } from '../../components/app/List/List';

import './Root.scss';
import { CardContentLoader } from '../../components/app/Card/ContentLoader/Loader';
import { startBuyApp } from '../../actions/auth';

export const ScreensAppRoot = () => {
  const { category } = useParams();
  const { apps } = useSelector((state) => state.app);
  const { thingsIsLoading } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  const appsFiltered = useMemo(() => {
    if (category) {
      return apps.filter((app) => app.category.name.toLowerCase() === category);
    }

    return apps;
  }, [category, apps]);

  const buyApp = (app) => {
    dispatch(startBuyApp(app));
  };

  return (
    <div className="screens-app-root">
      <AppList
        title={
          category
            ? category[0].toUpperCase() + category.substr(1)
            : 'Todas las apps'
        }
      >
        {thingsIsLoading.indexOf('APPS') > -1 ? (
          <CardContentLoader />
        ) : (
          appsFiltered.map((app) => (
            <AppCard
              key={app._id}
              name={app.name}
              img={app.logo}
              developer={app.user.name}
              id={app._id}
              price={app.price ? app.price : undefined}
              i="fas fa-shopping-cart"
              onClick={() => buyApp(app)}
            />
          ))
        )}
      </AppList>
    </div>
  );
};
