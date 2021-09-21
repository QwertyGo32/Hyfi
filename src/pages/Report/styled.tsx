import styled from 'styled-components';
import { StyledFormContainer } from '@components/ReportForm/styled';
import ReportBgr from '../../img/report_bgr.jpg';
import breakpoints from '@styles/constants.styled';

export const Report = () => {
  return (
    <StyledReport>
      <StyledFormContainer />
    </StyledReport>
  );
};

const StyledReport = styled.div`
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
