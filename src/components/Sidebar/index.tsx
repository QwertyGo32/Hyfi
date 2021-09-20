import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AsideComponent, StyledContainer } from './styled';
import Navbar from '@components/Navbar';
import { IRoute } from '@interfaces/IRoutes';

type SidebarProps = {
  routes: IRoute[],
  children?: JSX.Element,
};

export default function Sidebar({ routes, children }: SidebarProps) {
  return (
    <>
      <Navbar route={routes[0]} />
      <AsideComponent routes={routes} />
      <StyledContainer>{children}</StyledContainer>
    </>
  );
}
