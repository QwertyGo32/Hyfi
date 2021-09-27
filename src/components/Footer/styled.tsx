import styled from 'styled-components';

export const StyledFooter = () => {
  return (
    <StyledFooterWrapper>
      <StyledReportLink>
        Report an issue
      </StyledReportLink>
    </StyledFooterWrapper>
  )
}

const StyledReportLink = styled.p`
  font: normal normal medium 15px/70px Montserrat;
  color: #001218;
  margin: 0;
  cursor: pointer;
`;

const StyledFooterWrapper = styled.footer`
  position: absolute;
  z-index: 18;
  bottom: 0;
  width: 100%;
  padding: 0 36px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 96px;
  background: #FFFFFF 0 0 no-repeat padding-box;
  border: 1px solid #C9C9C9;
`;