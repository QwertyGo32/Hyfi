import styled from 'styled-components';
import breakpoints from '@styles/constants.styled';

export const StyledGraphWrapper = styled.div`
  border: 1px solid var(--main-default-underline-opacity-20);
  height: 100%;
  border-radius: 10px;
  padding: 30px;
  display: grid;
  align-items: center;
  margin-top: 26px;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 20px;
  grid-template-areas:
    'title . tabs tabs tabs'
    'graph graph graph graph graph'
    'graph graph graph graph graph';

  @media screen and ${breakpoints.Device.desktop_sm} {
    grid-template-areas:
      'tabs tabs tabs tabs tabs'
      'title . . . .'
      'graph graph graph graph graph'
      'graph graph graph graph graph';
  }

  @media screen and ${breakpoints.Device.mobile} {
    padding: 15px;
  }
`;

export const StyledGraphWrapperTitle = styled.p`
  font-family: Montserrat, serif;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  color: var(--main-text-default);
  grid-area: title;
  margin-bottom: 0;
`;

export const StyledGraphContainer = styled.div`
  width: 100%;
  height: 100%;
  grid-area: graph;
`;
