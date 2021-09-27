import styled from 'styled-components';
import { ReactComponent as WalletIcon } from '@icons/wallet.svg';
import { ReactComponent as DropdownArrow } from '@icons/dropdown_arrow.svg';
import breakpoints from '@styles/constants.styled';

export const StyledWalletContainer = styled.div`
  --logo-width: 46px;
  cursor: pointer;
  overflow: hidden;
  padding: 2px;
  max-width: var(--main-wallet-width);
  position: relative;
  display: grid;
  grid-template-columns: var(--logo-width) 1fr;
  gap: 13px;
  align-items: center;

  background: transparent
    linear-gradient(
      180deg,
      var(--main-default-btn-grd1) 0%,
      var(--main-default-btn-grd2) 100%
    )
    0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 6px var(--main-block-shadow);
  border-radius: 5px;
  @media screen and ${breakpoints.Device.tablet} {
    gap: 0;
    width: max-content;
  }
  &[aria-expanded='true'] {
    .dropdown-arrow {
      transform: rotate(-180deg);
    }
  }
  &:after {
    display: none;
  }
  &:before {
    content: '';
    position: absolute;
    background: transparent
      linear-gradient(
        90deg,
        var(-main-defaukt-bg1) 0%,
        var(--main-text-colored) 100%
      )
      0% 0% no-repeat padding-box;
    z-index: 1;
    width: calc(100% - var(--logo-width));
    height: 100%;
    right: 0;
  }
`;

export const StyledWalletIcon = styled(WalletIcon)``;
export const StyledWalletIconContainer = styled.div`
  padding: 12px 11px;
  background: var(--main-default-bg) 0% 0% no-repeat padding-box;
  border-radius: 3px;
`;
export const StyledWalletData = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0px;
  color: var(--main-default-bg);
  user-select: none;
  @media screen and ${breakpoints.Device.tablet} {
    display: none;
  }
`;
export const StyledArrow = styled(DropdownArrow)`
  right: 17px;
  position: absolute;
  z-index: 2;
  transition: 400ms all ease-out;
`;

export const StyledMenuBtn = styled.a`
  display: grid;
  grid-template-columns: min-content 16px;
  gap: 115px;
  align-items: center;
  justify-content: space-between;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0px;
  color: var(--main-text-default) !important;
  opacity: 1;
  cursor: pointer;
  padding: 26px 44px;
  user-select: none;
  @media screen and ${breakpoints.Device.tablet} {
    padding: 13px 22px;
  }
  svg {
    width: 16px;
    height: 16px;
  }
  &.active,
  &:active {
    background: transparent
      linear-gradient(
        65deg,
        var(--main-default-bg) 0%,
        var(--main-sidebar-transition-bg) 100%
      )
      0% 0% no-repeat padding-box !important;
  }
`;
export const StyledMenu = styled.ul`
  margin-top: 13px;
  padding: 0;
  background: var(--main-default-bg) 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 5px var(--main-default-block-shadow);
  border-radius: 10px;
`;
