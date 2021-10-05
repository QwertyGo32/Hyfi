import styled from 'styled-components';
import { NavLink as RouterLink } from 'react-router-dom';

export const StyledLink = styled(RouterLink)`
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0;
  color: var(--main-text-default);
  text-decoration: none;

  &.dashboard-blocks__head_link {
    color: var(--main-text-colored);
    font-size: 12px;
    line-height: 15px;
  }
`;
