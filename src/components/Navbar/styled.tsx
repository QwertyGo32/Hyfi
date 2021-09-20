import styled, { keyframes } from 'styled-components';
import breakpoints from '@styles/constants.styled';
import { ReactComponent as Logo } from '@icons/logo.svg';
import { ReactComponent as Sidebar } from '@icons/sidebar.svg';

// Create the keyframes
const sidebarAnim = keyframes`
  0% {    
    min-width: var(--sidebar-initial-width);
    width: var(--sidebar-initial-width);
    opacity: 1;
    transform: translateX(0);
    visibility: visible;
  }
  50% {
    min-width: var(--sidebar-initial-width);
    width: var(--sidebar-initial-width);
    
  }
  100% {
    width: 0;
    min-width: 0;
    opacity: 0;
    transform: translateX(--var( --sidebar-initial-width));
    visibility: hidden;
    
  }
`;
export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 245px 24px 1fr;
  grid-template-areas: 'logo side dropdown';
  align-items: center;
  padding: 33px 36px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
  background: var(--main-default-bg) 0% 0% no-repeat padding-box;
  border: 1px solid var(--main-default-wrapper-border);
  max-height: var(--main-top-padding);
  @media screen and ${breakpoints.Device.tablet} {
    margin-bottom: 5px;
    grid-template-columns: 50px 50px 24px;
    justify-content: space-between;
    grid-template-areas: 'dropdown logo side';
  }

  .dropdown {
    justify-self: flex-end;
    grid-area: dropdown;
  }
  & > {
    @media screen and ${breakpoints.Device.tablet} {
      margin-bottom: 5px;
    }
  }

  @media screen and ${breakpoints.Device.tablet} {
    padding: 15px 20px;
  }
  .check-box {
    cursor: pointer;
    display: inline-block;
  }
`;

export const StyledLogo = styled(Logo)``;
export const StyledSidebarBtn = styled(Sidebar)`
  transition: all 500ms ease-out;
`;

export const StyledCheckbox = styled.input`
  display: none;
  &:checked ~ #sidebar {
    width: 0;
    min-width: 0;
    animation: ${sidebarAnim} 500ms;
  }

  &:checked ~ #sidebar .nav-item {
    -webkit-transform: translateX(-200px);
    transform: translateX(-200px);
  }
  &:checked ~ #header #sidebar-logo {
    transform: scale(-1);
  }

  &:checked ~ #sidebar .brand-logo {
    -webkit-transform: translateX(-200px);
    transform: translateX(-200px);
    visibility: hidden;
  }

  &:checked ~ #sidebar .navbar-header {
    visibility: hidden;
  }
`;
export const StyledOrverlay = styled.div`
  display: none;
  &.active {
    background: #21252954;
  }
  @media screen and ${breakpoints.Device.tablet} {
    display: block;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
  }
`;