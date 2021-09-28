import styled from 'styled-components';
import { StyledBody as SBody } from '@styles/modal.styled';
import Form from 'react-bootstrap/Form';
import { ReactComponent as Chain } from '@icons/chain.svg';
import Row from 'react-bootstrap/Row';
import Btn from '@components/Btn';
import breakpoints from '@styles/constants.styled';

export const StyledBtn = styled(Btn)`
  width: 100%;
`;
export const StyledLogo = styled(Chain)`
  width: 32px;
  height: 32px;
`;

export const StyledFormLabel = styled(Form.Label)`
  font-style: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0px;
  color: var(--main-text-default);
  opacity: 1;
  margin-bottom: 12.5px;
`;
export const StyledFromControlContainer = styled.div`
  position: relative;
  .text-container {
    position: absolute;
    display: grid;
    align-items: center;
    gap: 13px;
    grid-template-columns: 32px 1fr;
    top: 10px;
    right: 10px;
    /* transform: translateY(-50%); */
  }
`;

export const StyledDataRow = styled(Row)`
  display: grid;
  grid-template-columns: 3fr minmax(min-content, 330px) minmax(
      min-content,
      330px
    );
  align-items: flex-end;
  grid-template-areas: 'checkbox input button';
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      'checkbox checkbox checkbox checkbox'
      'input input button button';
  }
  @media screen and ${breakpoints.Device.mobile} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      'checkbox'
      'input' 'button';
  }
  .button {
    grid-area: button;
  }
  .checkbox {
    grid-area: checkbox;
  }
  .input {
    grid-area: input;
  }
`;

export const StyledFormControl = styled(Form.Control)`
  background: var(--main-default-tab-color) 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 3px 6px var(--main-block-shadow);
  border: 1px solid var(--main-sidebar-transition-bg);
  border-radius: 5px;
  opacity: 0.6;
  font-style: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0px;
  color: var(--main-text-default);
  opacity: 1;
  padding: 12px 90px 12px 20px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  -moz-appearance: textfield !important;
  margin: 0 !important;

  &:focus {
    padding: 12px 20px;
    & ~ .text-container {
      display: none;
    }
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;
export const StyledFormCheck = styled(Form.Check)`
  .form-check-input {
    background: transparent;
    border: 1px solid var(--main-default-btn-grd1);
    &:checked {
      background-color: #0d6efd;
      border-color: #0d6efd;
    }
  }
  .form-check-label {
    font: normal normal medium 12px/24px Montserrat;
    letter-spacing: 0px;
    color: var(--main-text-colored);
    opacity: 1;
  }
`;

export const StyledText = styled.p`
  font-style: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: var(--main-text-default);
`;

export const StyledBody = styled(SBody)`
  font: normal normal medium 14px/24px Montserrat;
  letter-spacing: 0px;
  color: var(--main-text-default);
  background: var(--main-default-tab-color) 0% 0% no-repeat padding-box;
  border-radius: 0px 0px 10px 10px;
  box-shadow: inset 0px 3px 5px var(--main-default-block-shadow);
`;
