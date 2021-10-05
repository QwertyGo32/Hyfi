import styled from 'styled-components';
import { ReactComponent as Sun } from './icons/sun_blue.svg';
import { ReactComponent as Moon } from './icons/moon_black.svg';

export const StyledToggleContainer = styled.div`
  display: grid;
  grid-template-rows: 23px 23px;
  cursor: pointer;
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
export const StyledThemeToggleCircle = styled.div`
  width: 13px;
  height: 13px;
  background: var(--main-text-colored) 0 0 no-repeat padding-box;
  border-radius: 20px;
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
  transition: 0.5s;
  &.night {
    justify-content: flex-start;
  }
`;
