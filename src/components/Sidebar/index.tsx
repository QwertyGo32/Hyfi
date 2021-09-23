import React, { useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AsideComponent, StyledContainer } from './styled';
import Navbar from '@components/Navbar';
import { IRoute } from '@interfaces/IRoutes';
import { StyledFooter } from '@components/Footer/styled';
import { useLocation } from 'react-router-dom';

type SidebarProps = {
  routes: IRoute[],
  children?: JSX.Element,
};

export default function Sidebar({ routes, children }: SidebarProps) {
  const location = useLocation();
  const currentRoute = useMemo(() => {
    return routes.find(({ path }) => {
      return path === location.pathname;
    });
  }, [location.pathname]);

  return (
    <>
      <Navbar route={routes[0]} />
      <AsideComponent routes={routes} />
      <StyledContainer
        data-path={location?.pathname ?? ''}
        bgrImg={currentRoute?.bgrImg ?? ''}
      >
        {children}
      </StyledContainer>
      <StyledFooter />
    </>
  );
}
