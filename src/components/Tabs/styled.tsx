import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

export enum TabsTypes {
  white = 'white',
}

export const StyledNav = styled(Nav)`
  background: var(--main-default-tab-color) 0% 0% no-repeat padding-box;
  border-radius: 5px;
  padding: 2px;
  grid-area: tabs;
`;
export const StyledNavItem = styled(Nav.Item)``;
export const StyledLink = styled(NavLink)`
  text-align: left;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  letter-spacing: 15px;
  font-weight: normal;
  letter-spacing: 0px;
  color: var(--main-text-default);
  text-align: center;
  &.active {
    pointer-events: none;
    border: 0px;
    background: transparent
      linear-gradient(
        180deg,
        var(--main-default-btn-grd1) 0%,
        var(--main-default-btn-grd2) 100%
      )
      0% 0% no-repeat padding-box !important;
    box-shadow: 0px 5px 6px var(--main-block-shadow);
    border-radius: 5px;
    color: var(--main-default-bg) !important;
  }
`;
export const StyledNavLink = styled(Nav.Link)`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: normal;
  letter-spacing: 0;
  color: var(--main-text-default);
  text-align: center;

  &.active {
    border: 0;
    background: transparent
      linear-gradient(
        180deg,
        var(--main-default-btn-grd1) 0%,
        var(--main-default-btn-grd2) 100%
      )
      0 0 no-repeat padding-box !important;
    box-shadow: 0 5px 6px var(--main-block-shadow);
    border-radius: 5px;
    color: var(--main-default-bg) !important;
  }

  &.${TabsTypes.white}.active {
    border-radius: 5px;
    border: 0;
    background: transparent
      linear-gradient(
        180deg,
        var(--main-default-bg) 0%,
        var(--main-default-tab-color) 100%
      )
      0 0 no-repeat padding-box !important;
    box-shadow: 0 5px 6px var(--main-default-link-color);
    color: var(--main-text-colored) !important;
  }
`;
