import styled from 'styled-components';
import InputGroup from 'react-bootstrap/InputGroup';

export const StyledInputGroupText = styled(InputGroup.Text)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  line-height: 15px;
  font-weight: bold;
  letter-spacing: 0px;
  color: var(--main-text-default);
  opacity: 1;

  border-left: none;
  background: rgb(241 243 245 / 60%) 0% 0% no-repeat padding-box;

  /* &[data-close='true'] {
    display: none;
  } */
`;

export const StyledInputGroup = styled(InputGroup)`
  position: relative;
  &[data-gradient='true'] {
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: transparent linear-gradient(90deg, #ffffff00 0%, #f1f3f5 100%)
        0% 0% no-repeat padding-box;
      border-radius: 5px;
      z-index: 1;
    }
  }
  &[data-gradient='true'] {
    input {
      box-shadow: inset 0px 3px 6px var(--main-block-shadow);
    }
  }
  &[data-badge='true'] {
    &:before {
      content: '';
      top: 0;
      left: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      box-shadow: inset 0px 3px 6px var(--main-block-shadow);
      z-index: 1;
      border-radius: 5px;
    }
    input {
      background: rgb(241 243 245 / 60%) 0% 0% no-repeat padding-box;
      box-shadow: inset 0px 3px 6px #00000029;
      font-family: 'Montserrat', sans-serif;
      font-size: 12px;
      line-height: 15px;
      font-weight: bold;
      letter-spacing: 0px;
      color: var(--main-text-default);
      &::placeholder {
        font-family: 'Montserrat', sans-serif;
        font-size: 12px;
        line-height: 15px;
        font-weight: bold;
        letter-spacing: 0px;
        color: var(--main-text-default);
      }
      opacity: 1;
      border-right: none;
      box-shadow: none;
    }
  }

  input {
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: inset 4px 5px 6px #d1d9e1;
    border-radius: 5px;
  }
`;
