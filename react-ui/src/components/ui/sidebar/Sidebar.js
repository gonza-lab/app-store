import React from 'react';
import { useSelector } from 'react-redux';
import { UiContainer } from '../container/Container';
import { UiSidebarNavlink } from './navlink/Navlink';
import { UiSidebarHeading } from './heading/Heading';
import './Sidebar.scss';
import { NavLink } from 'react-router-dom';
import { UiSidebarFooter } from './footer/Footer';

export const UiSidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.ui);
  const { categories } = useSelector((state) => state.app);

  return (
    <aside
      className={`ui-sidebar ${!isSidebarOpen ? 'ui-sidebar__close' : ''}`}
    >
      <UiContainer column>
        <UiSidebarHeading heading="APPS" />
        <UiSidebarNavlink
          options={{ text: 'Aplicaciones', i: 'fas fa-heart', to: '/apps' }}
        />
        <UiSidebarNavlink
          dropdown
          options={{ text: 'Categorias', i: 'fas fa-tags' }}
        >
          {categories.map((category) => (
            <NavLink
              exact
              activeClassName="ui-sidebar-navlink__active"
              to={'/apps/' + category.name.toLowerCase()}
            >
              {category.name}
            </NavLink>
          ))}
        </UiSidebarNavlink>
        <UiSidebarHeading heading="USER" />
        <UiSidebarNavlink
          options={{ text: 'Usuario', i: 'far fa-user', to: '/me/apps' }}
        />
      </UiContainer>
      <UiSidebarFooter />
    </aside>
  );
};
