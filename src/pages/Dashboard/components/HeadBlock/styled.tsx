import styled from 'styled-components';
import breakpoints from '@styles/constants.styled';

export const StyledHeadBlockTitle = styled.h2`
  font-family: Montserrat, serif;
  font-weight: 900;
  font-size: 20px;
  line-height: 27px;
  color: var(--main-text-default);
  margin-bottom: 0 !important;

  @media screen and ${breakpoints.Device.tablet} {
    margin-bottom: 10px !important;
  }
`;
