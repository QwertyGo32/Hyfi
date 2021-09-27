import styled from "styled-components";
import Button from 'react-bootstrap/Button';
export enum gradientBtnTypes {
  gradient = "gradient",
  outline = "outline",
}
export const BtnStyled = styled(Button)`
  padding: 14px 22px;
  font: normal normal medium 15px/70px Montserrat;
  
  &.home-page_btn {
    margin-right: 30px;
  }
  
  &.ilo-page_btn {
    padding: 9px 50px;
    font-size: 12px;
    line-height: 15px;
  }
  
  &.${gradientBtnTypes.gradient} {
    background: transparent linear-gradient(180deg, #6984FF 0%, #224AFF 100%) 0 0 no-repeat padding-box;
    box-shadow: 0 5px 6px #00000029;
    border-radius: 5px;
    border: none;
    color: #FFFFFF;
  }
  &.${gradientBtnTypes.gradient}:focus,
  &.${gradientBtnTypes.outline}:active {
    box-shadow: 0 5px 6px #00000029;
  }
  &.${gradientBtnTypes.outline} {
    border: 2px solid #224AFF;
    background: transparent;
    border-radius: 5px;
    opacity: 0.8;
    color: #224AFF;
  }
  &.${gradientBtnTypes.outline}:focus,
  &.${gradientBtnTypes.outline}:active {
    box-shadow: none;
  }
`;

export default BtnStyled;