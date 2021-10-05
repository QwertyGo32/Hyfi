import styled from 'styled-components';
import Button from '@components/Btn';
import BootstrapButton from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { StyledBody as SBody } from '@styles/modal.styled';

export const StyledInputGroup = styled(InputGroup)`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent
      linear-gradient(
        90deg,
        var(--main-default-bg-opacity) 0%,
        var(--main-default-tab-color) 100%
      )
      0% 0% no-repeat padding-box;
    border-radius: 5px;
    z-index: 1;
  }
  input {
    background: var(--main-default-bg) 0% 0% no-repeat padding-box;
    box-shadow: inset 4px 5px 6px var(--main-block-shadow);
    border-radius: 5px;
  }
`;

export const StyledButton = styled(Button)`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: medium;
`;

export const StyledButtonWithIcon = styled(BootstrapButton)`
  border: 2px solid transparent;
  &:hover,
  &:focus {
    border: 2px solid var(--main-text-colored);
    background: transparent;
    color: var(--main-text-colored);
  }
`;

export const StyledText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  color: var(--main-text-colored);
`;

export const StyledBody = styled(SBody)`
  background: var(--main-default-tab-color) 0% 0% no-repeat padding-box;
  border-radius: 0px 0px 10px 10px;
  box-shadow: inset 0px 3px 5px var(--main-default-block-shadow);
`;
