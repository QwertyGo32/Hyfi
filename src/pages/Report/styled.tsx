import styled from 'styled-components';
import ReportBgr from '@img/report_bgr.jpg';
import breakpoints from '@styles/constants.styled';
import Form from 'react-bootstrap/Form';

export const StyledForm = styled(Form)`
  width: 100%;
  max-width: 709px;
  max-height: 839px;
  padding: 65px 179px 65px 75px;
  background: var(--main-default-bg) 0 0 no-repeat padding-box;
  box-shadow: 0 3px 5px var(--main-default-block-shadow);
  border-radius: 10px;

  @media screen and ${breakpoints.Device.desktop} {
    padding: 65px 75px;
  }
`;

export const StyledTitle = styled.h1`
  font: normal normal bold 40px/50px Montserrat;
  color: var(--main-text-default);
  margin-bottom: 30px;
`;

export const StyledInputText = styled.p`
  font: normal normal medium 15px/70px Montserrat;
  color: var(--main-default-btn-grd2);
  margin: 0;
`;

export const StyledInputLabel = styled.label`
  height: 50px;
  width: 184px;
  padding: 16px 27px;
  border: 2px solid var(--main-default-btn-grd2);
  border-radius: 5px;
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 30px;
`;

export const StyledFormLabel = styled(Form.Label)`
  font: normal normal medium 15px/19px Montserrat;
  position: relative;

  &:after {
    content: '*';
    position: absolute;
    top: -2px;
    right: -7px;
    color: #f5044e;
  }
`;

export const StyledReport = styled.div`
  width: 100%;
  height: 100%;
  background: url(${ReportBgr}) no-repeat center/cover;
  padding: 75px 0 calc(6% + 50px) calc(var(--sidebar-initial-width) + 10%);

  @media screen and ${breakpoints.Device.desktop} {
    padding: 75px 20px calc(6% + 50px) calc(var(--sidebar-initial-width) + 20px);
    display: flex;
    justify-content: center;
  }
`;
