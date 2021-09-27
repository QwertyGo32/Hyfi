import styled, { keyframes } from 'styled-components';
import breakpoints from '@styles/constants.styled';
import { ReactComponent as Logo } from '@icons/logo.svg';
import { ReactComponent as Sidebar } from '@icons/sidebar.svg';
import { LinksEnum } from '@interfaces/LinksEnum';

// Create the keyframes
const sidebarAnim = keyframes`
  0% {
    width: 0;
    min-width: 0;
    opacity: 0;
    transform: translateX(--var( --sidebar-initial-width));
    visibility: hidden;
    overflow: hidden;
  }
  50% {
    min-width: var(--sidebar-initial-width);
    width: var(--sidebar-initial-width);
    
  }
  100% {
    min-width: var(--sidebar-initial-width);
    width: var(--sidebar-initial-width);
    opacity: 1;
    transform: translateX(0);
    visibility: visible;
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
  z-index: 10;
  background: var(--main-default-bg) 0 0 no-repeat padding-box;
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

export const StyledLogo = styled(Logo)`
  @media screen and ${breakpoints.Device.tablet} {
    transform: translateX(-200px);
    visibility: hidden;
  }
`;
export const StyledSidebarBtn = styled(Sidebar)`
  transition: all 500ms ease-out;
`;

export const StyledCheckbox = styled.input`
  display: none;
  &:checked ~ #sidebar {
    //width: 0;
    //min-width: 0;
    //animation: ${sidebarAnim} 3s;
    transform: translateX(calc(var( --sidebar-initial-width) * -1));
    //& .sidebar__container {
    //  transform: translateX(-300px);
    //  padding: 0 33px;
    //}
  }
  
  &:checked ~ #main-content:not([data-page="${LinksEnum.ILO}"]) {
    padding-left: 8.5%;
    transition-delay: .2s;
  }
  
  &:checked ~ #main-content[data-page="${LinksEnum.ILO}"] {
    padding-left: 0;
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

  @media screen and ${breakpoints.Device.desktop} {
    &:checked ~ #main-content .ilo-block__img {
      display: block;
    }

    &:checked ~ #main-content .ilo-container {
      width: 75%;
    }

    &:checked ~ #main-content {
      padding-left: 40px;
      transition-delay: .2s;
    }
  }
  
  @media screen and ${breakpoints.Device.tablet} {
    &:checked ~ #sidebar .nav-item {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }

    &:checked ~ #sidebar {
      transform: translateX(0);
    }
    
    &:checked ~ #header #sidebar-logo {
      transform: scale(0);
    }

    &:checked ~ #sidebar .brand-logo {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      visibility: visible;
    }
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
