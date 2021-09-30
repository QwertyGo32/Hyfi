import styled from 'styled-components';
import breakpoints from '@styles/constants.styled';

export const HomeWrapper = styled.section`
  width: 100%;
  max-width: 780px;
  display: grid;
  grid-template: repeat(4, 1fr);
  row-gap: 20px;
  align-items: center;
  @media screen and ${breakpoints.Device.desktop} {
    grid-template-columns: auto;
  }
`;

export const HomeWrappperContainer = styled.section`
  display: grid;
  gap: 20px;
  width: 100%;
`;

export const Title = styled.h1`
  font-family: Montserrat, serif;
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;
  color: var(--main-text-default);
  grid-area: 1/1 / auto/span 4;
  @media screen and ${breakpoints.Device.tablet} {
    font-size: 30px;
  }
`;

export const Text = styled.p`
  font-family: Montserrat, serif;
  font-size: 24px;
  line-height: 34px;
  font-weight: 500;
  color: var(--main-text-default);
  grid-area: 2/1 / auto/span 4;
  @media screen and ${breakpoints.Device.tablet} {
    font-size: 20px;
  }
`;

export const InfoContainer = styled.section`
  /* display: flex; */
  /* flex-wrap: wrap; */
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(352px, 1fr));
  grid-area: 4/1 / auto/span 4;
  @media screen and ${breakpoints.Device.mobile} {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }
`;
