import styled from 'styled-components';
import { ReactComponent as Sun } from '@icons/sun_blue.svg';
import { ReactComponent as Moon } from '@icons/moon_black.svg';

export const StyledSidebarContainer = styled.div`
  width: var(--sidebar-initial-width);
  padding: 0 33px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 500ms;
`;
export const StyledMoon = styled(Moon)`
  &.night path {
    fill: var(--main-text-colored);
  }
`;

export const StyledSun = styled(Sun)`
  justify-self: flex-end;
  &.night path {
    fill: var(--main-text-default);
  }
`;

export const StyledNetworksContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledNetworkLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  background: var(--main-default-bg) 0 0 no-repeat padding-box;
  box-shadow: 0 3px 5px var(--main-default-block-shadow);
  display: flex;
  justify-content: center;
  align-items: center;
  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export const StyledToggleContainer = styled.div`
  display: grid;
  grid-template-rows: 23px 23px;
  cursor: pointer;
`;

export const StyledThemeToggle = styled.div`
  width: 60px;
  height: 23px;
  background: var(--main-text-colored-opacity) 0 0 no-repeat padding-box;
  border-radius: 50px;
  padding: 5px 7px;
  display: flex;
  justify-content: flex-end;
  grid-area: 2/1/3/3;
  &.night {
    justify-content: flex-start;
  }
`;

export const StyledThemeToggleCircle = styled.div`
  width: 13px;
  height: 13px;
  background: var(--main-text-colored) 0 0 no-repeat padding-box;
  border-radius: 20px;
`;
