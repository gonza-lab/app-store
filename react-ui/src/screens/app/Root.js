import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppCard } from '../../components/app/Card/Card';
import { AppList } from '../../components/app/List/List';

import './Root.scss';
import { CardContentLoader } from '../../components/app/Card/ContentLoader/Loader';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

export const ScreensAppRoot = () => {
  const { category } = useParams();
  const { apps } = useSelector((state) => state.app);
  const { isLoading } = useSelector((state) => state.ui);
  const { isDev, isLogged } = useSelector((state) => state.auth);

  const appsFiltered = useMemo(() => {
    if (category) {
      return apps.filter((app) => app.category.name.toLowerCase() === category);
    }

    return apps;
  }, [category, apps]);

  const buyApp = (app) => {
    if (!isLogged) {
      Toast.fire({
        icon: 'error',
        title: 'Debes estar logeado para poder adquirir una app',
      });
    } else if (isDev) {
      Toast.fire({
        icon: 'error',
        title: 'Eres un desarrollador, no puedes adquirir apps',
      });
    } else {
      Toast.fire({
        icon: 'success',
        title: `Felicitaciones! Has adquirido ${app.name}`,
      });
    }
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
              i="fas fa-shopping-cart"
              onClick={() => buyApp(app)}
            />
          ))
        )}
      </AppList>
    </div>
  );
};
