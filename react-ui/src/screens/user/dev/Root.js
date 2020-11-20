import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeAllModal,
  openModalEditApp,
  openModalNewApp,
} from '../../../actions/ui';
import { AppCard } from '../../../components/app/Card/Card';
import { AppCardNew } from '../../../components/app/Card/new/New';
import { AppFormEdit } from '../../../components/app/Form/edit/Form';
import { AppFormNew } from '../../../components/app/Form/new/Form';
import { AppList } from '../../../components/app/List/List';
import { UiModal } from '../../../components/ui/modal/Modal';

export const ScreensUserDevRoot = () => {
  const { _id } = useSelector((state) => state.auth);
  const { apps } = useSelector((state) => state.app);
  const { modalEditApp, modalNewApp } = useSelector((state) => state.ui);

  const [activeCard, setActiveCard] = useState(undefined);

  const dispatch = useDispatch();

  const appsFiltered = useMemo(
    () => apps.filter((app) => app.user._id === _id),
    [apps, _id]
  );

  return (
    <>
      <AppList title={`Mis aplicaciones desarrolladas`}>
        <AppCardNew
          onClick={() => {
            setActiveCard(undefined);
            dispatch(openModalNewApp());
          }}
        />
        {appsFiltered.map((app) => (
          <AppCard
            key={app._id}
            name={app.name}
            img={app.logo}
            developer={app.user.name}
            price={app.price ? app.price : undefined}
            i="fas fa-pen"
            onClick={() => {
              dispatch(openModalEditApp());
              setActiveCard(app);
            }}
          />
        ))}
      </AppList>
      <UiModal
        isOpen={modalEditApp.open || modalNewApp.open}
        onRequestClose={() => dispatch(closeAllModal())}
      >
        {activeCard ? <AppFormEdit app={activeCard} /> : <AppFormNew />}
      </UiModal>
    </>
  );
};
