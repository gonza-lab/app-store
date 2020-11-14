import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { UiContainer } from '../container/Container';
import { UiSidebarNavlink } from './navlink/Navlink';
import { UiSidebarHeading } from './heading/Heading';
import './Sidebar.scss';
import { NavLink } from 'react-router-dom';
import { UiSidebarFooter } from './footer/Footer';

export const UiSidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.ui);
  const [name] = useState('Gonzalo');

  return (
    <aside
      className={`ui-sidebar ${!isSidebarOpen ? 'ui-sidebar__close' : ''}`}
    >
      <UiContainer column>
        <UiSidebarHeading heading="APPS" />
        <UiSidebarNavlink
          dropdown
          options={{ text: 'Categorias', i: 'fas fa-tags' }}
        >
          <NavLink
            activeClassName="ui-sidebar-navlink__active"
            to="/apps/juegos"
          >
            Juegos
          </NavLink>
          <NavLink
            activeClassName="ui-sidebar-navlink__active"
            to="/apps/comunicacion"
          >
            Comunicacion
          </NavLink>
        </UiSidebarNavlink>
        <UiSidebarHeading heading="USER" />
        <UiSidebarNavlink
          options={{ text: 'Usuario', i: 'far fa-user', to: '/me/apps' }}
        />
      </UiContainer>
      <UiSidebarFooter name={name} />
    </aside>
  );
};