import styled from 'styled-components';
import { NavLink as RouterLink, NavLinkProps } from 'react-router-dom';

export const StyledLink = styled(RouterLink)`
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0px;
  color: var(--main-text-default);
`;
