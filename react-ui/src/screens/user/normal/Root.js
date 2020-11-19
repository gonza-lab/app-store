import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { AppCard } from '../../../components/app/Card/Card';
import { CardContentLoader } from '../../../components/app/Card/ContentLoader/Loader';
import { AppList } from '../../../components/app/List/List';

export const ScreensUserNormalRoot = () => {
  const { isDev, apps: myApps } = useSelector((state) => state.auth);
  const { apps } = useSelector((state) => state.app);
  const { isLoading } = useSelector((state) => state.ui);

  const appsFiltered = useMemo(
    () => apps.filter((app) => myApps.includes(app._id)),
    [apps, myApps]
  );

  return (
    <>
      <AppList title={`Mis aplicaciones${isDev ? ' desarrolladas' : ''}`}>
        {Boolean(isLoading) ? (
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
              i="fas fa-times"
            />
          ))
        )}
      </AppList>
    </>
  );
};
