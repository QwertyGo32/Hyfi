import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import { Link, NavLink } from 'react-router-dom';

export const StyledNav = styled(Nav)`
  background: var(--main-default-tab-color) 0% 0% no-repeat padding-box;
  border-radius: 5px;
  padding: 2px;
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
  text-align: left;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  letter-spacing: 15px;
  font-weight: normal;
  letter-spacing: 0px;
  color: var(--main-text-default);
  text-align: center;
  &.active {
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
