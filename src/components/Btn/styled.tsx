import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
export enum gradientBtnTypes {
  gradient = 'gradient',
  outline = 'outline',
}
export const BtnStyled = styled(Button)`
  padding: 14px 22px;
  font-family: Montserrat, serif;
  font-weight: 500;
  font-size: 15px;

  &.ilo-page_btn {
    padding: 9px 50px;
    font-size: 12px;
    line-height: 15px;
  }

  &.${gradientBtnTypes.gradient} {
    background: transparent
      linear-gradient(
        180deg,
        var(--main-default-btn-grd1) 0%,
        var(--main-default-btn-grd2) 100%
      )
      0% 0% no-repeat padding-box;
    box-shadow: 0px 5px 6px var(--main-block-shadow);
    border-radius: 5px;
    border: none;
    color: var(--main-default-bg);
  }
  &.${gradientBtnTypes.gradient}:focus, &.${gradientBtnTypes.outline}:active {
    box-shadow: 0px 5px 6px var(--main-block-shadow);
  }
  &.${gradientBtnTypes.outline} {
    border: 2px solid var(--main-default-btn-grd2);
    background: transparent;
    border-radius: 5px;
    opacity: 0.8;
    color: var(--main-default-btn-grd2);
  }
  &.${gradientBtnTypes.outline}:focus, &.${gradientBtnTypes.outline}:active {
    box-shadow: none;
  }
`;

export default BtnStyled;
