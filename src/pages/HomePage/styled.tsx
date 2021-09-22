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
  font: normal normal bold 40px/50px Montserrat;
  color: #001218;
  grid-area: 1/1 / auto/span 4;
`;

export const Text = styled.p`
  font: normal normal medium 24px/34px Montserrat;
  color: #001218;
  grid-area: 2/1 / auto/span 4;
`;
