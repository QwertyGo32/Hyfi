import styled from 'styled-components';
import breakpoints from '@styles/constants.styled';

export const HomeWrapper = styled.div`
  width: 100%;
  max-width: 780px;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(4, 1fr);
  align-items: center;
`;

export const Title = styled.h1`
  font-family: Montserrat, serif;
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;
  color: var(--main-text-default);
  grid-area: 1/1 / auto/span 4;
`;

export const Text = styled.p`
  font-family: Montserrat, serif;
  font-size: 24px;
  line-height: 34px;
  font-weight: 500;
  color: var(--main-text-default);
  grid-area: 2/1 / auto/span 4;
`;
