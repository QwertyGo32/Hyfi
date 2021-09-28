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
  letter-spacing: 0;
  color: var(--main-text-default);
  opacity: 1;

  border-left: none;
  background: rgb(241 243 245 / 60%) 0 0 no-repeat padding-box;

  /* &[data-close='true'] {
    display: none;
  } */
`;

export const StyledInputGroup = styled(InputGroup)`
  position: relative;
  /* max-width: 259px; */

  /* &.ilo-page_btn {
    margin-bottom: 0 !important;
    margin-right: 30px;
  } */
  &[data-gradient='true'] {
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
    }
  }
  &[data-gradient='true'] {
    input {
      box-shadow: inset 0 3px 6px var(--main-block-shadow);
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
      box-shadow: inset 0 3px 6px var(--main-block-shadow);
      border-radius: 5px;
      z-index: 1;
    }
    input {
      box-shadow: none;
      background: rgb(241 243 245 / 60%) 0 0 no-repeat padding-box;
      font-family: 'Montserrat', sans-serif;
      font-size: 12px;
      line-height: 15px;
      font-weight: bold;
      letter-spacing: 0;
      color: var(--main-text-default);
      &::placeholder {
        font-family: 'Montserrat', sans-serif;
        font-size: 12px;
        line-height: 15px;
        font-weight: bold;
        letter-spacing: 0;
        color: var(--main-text-default);
      }
      opacity: 1;
      border-right: none;
    }
  }

  input {
    background: var(--main-default-bg) 0% 0% no-repeat padding-box;
    box-shadow: inset 4px 5px 6px var(--main-block-shadow);
    border-radius: 5px;
    padding: 9.5px 14px;
    &[type='number'] {
      -moz-appearance: textfield;
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
    }
  }
`;
