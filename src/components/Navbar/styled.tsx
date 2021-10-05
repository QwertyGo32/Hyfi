import styled from 'styled-components';
import breakpoints from '@styles/constants.styled';
import { ReactComponent as Logo } from '@icons/logo.svg';
import { ReactComponent as Sidebar } from '@icons/sidebar.svg';
import { LinksEnum } from '@interfaces/LinksEnum';
import { UserStatusType } from '@/interfaces/IUser';
import { ReactComponent as WalletIcon } from '@icons/wallet.svg';

export const StyledWalletIcon = styled(WalletIcon)``;

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 245px 24px 1fr;
  grid-template-areas: 'logo side dropdown';
  align-items: center;
  padding: 33px 36px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 20;
  background: var(--main-default-bg) 0 0 no-repeat padding-box;
  border: 1px solid var(--main-default-wrapper-border);
  max-height: var(--main-top-padding);
  @media screen and ${breakpoints.Device.tablet} {
    margin-bottom: 5px;
    grid-template-columns: 50px 50px 24px;
    justify-content: space-between;
    grid-template-areas: 'dropdown logo side';
  }

  &[data-status='${UserStatusType.AUTHED}'] {
  }

  &[data-status='${UserStatusType.VISITOR}'] {
    grid-template-columns: 245px 24px 1fr;
    @media screen and ${breakpoints.Device.tablet} {
      grid-template-columns: max-content 50px 24px;
    }
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
    transform: translateX(calc(var(--sidebar-initial-width) * -1));
  }

  &:checked ~ #main-content:not([data-page='${LinksEnum.ILO}']) {
    padding-left: 8.5%;
    transition-delay: 0.2s;
  }

  &:checked ~ #main-content[data-page='${LinksEnum.ILO}'] {
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

  &:checked ~ #main-content .graph-block .graph-block__container {
    grid-template-areas:
      'title . tabs tabs tabs'
      'graph graph graph graph graph'
      'graph graph graph graph graph';
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
      transition-delay: 0.2s;
    }
  }

  @media screen and ${breakpoints.Device.desktop_sm} {
    &:checked ~ #main-content .dashboard-wrapper {
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas:
        'head head'
        'license transactions'
        'account details'
        'graph graph';
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

    &:checked ~ #sidebar .brand-logo {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      visibility: visible;
    }

    &:checked ~ #main-content .dashboard-wrapper {
      grid-template-columns: 1fr;
      grid-template-areas:
        'head'
        'license'
        'transactions'
        'account'
        'details'
        'graph';
    }
  }
`;
export const StyledOrverlay = styled.div`
  display: none;

  &.active {
    display: block;
    background: var(--main-default-link-color);
  }

  @media screen and ${breakpoints.Device.tablet} {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
  }
`;

export const StyledBtnContainer = styled.div`
  position: relative;
  justify-self: flex-end;
  grid-area: dropdown;
  overflow: hidden;

  .wallet-container {
    display: none;
    @media screen and ${breakpoints.Device.tablet} {
      display: flex;
      background: var(--main-default-bg);
      padding: 14px;
    }
  }

  .home-page_btn {
    @media screen and ${breakpoints.Device.tablet} {
      padding: 2px;
    }
  }

  span {
    @media screen and ${breakpoints.Device.tablet} {
      display: none;
    }
  }
`;
