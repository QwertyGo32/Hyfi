import styled from 'styled-components';
import { NavLink as RouterLink } from 'react-router-dom';
import { LinksEnum } from '@/interfaces/LinksEnum';

export const StyledFooter = () => {
  return (
    <StyledFooterWrapper>
      <StyledReportLink to={LinksEnum.REPORT}>Report an issue</StyledReportLink>
    </StyledFooterWrapper>
  );
};

const StyledReportLink = styled(RouterLink)`
  font: normal normal medium 15px/70px Montserrat;
  color: #001218;
  margin: 0;
  text-decoration: none;
  cursor: pointer;
`;

const StyledFooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100vw;
  padding: 0 36px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 8.1%;
  background: #ffffff 0 0 no-repeat padding-box;
  border: 1px solid #c9c9c9;
`;
