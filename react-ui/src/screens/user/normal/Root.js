import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startRemoveApp } from '../../../actions/auth';
import { AppCard } from '../../../components/app/Card/Card';
import { AppList } from '../../../components/app/List/List';

export const ScreensUserNormalRoot = () => {
  const { apps: myApps } = useSelector((state) => state.auth);
  const { apps } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const appsFiltered = useMemo(
    () => apps.filter((app) => myApps.includes(app._id)),
    [apps, myApps]
  );

  return (
    <>
      <AppList title={`Mis aplicaciones`}>
        {appsFiltered.map((app) => (
          <AppCard
            key={app._id}
            name={app.name}
            img={app.logo}
            developer={app.user.name}
            id={app._id}
            price={app.price ? app.price : undefined}
            i="fas fa-times"
            onClick={() => dispatch(startRemoveApp(app))}
          />
        ))}
      </AppList>
    </>
  );
};
