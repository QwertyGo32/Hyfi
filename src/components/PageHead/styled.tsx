import styled from 'styled-components';
import bgrImg from '@img/infographic9.jpg';
import breakpoints from '@styles/constants.styled';

export const StyledWrapperHead = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  background: url(${bgrImg}) no-repeat bottom/cover;
  position: relative;
  z-index: 1;

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }
`;

export const StyledWrapperHeadContainer = styled.div`
  width: 90%;
  max-width: 1266px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 3;
`;

export const StyledWrapperHeadTitle = styled.h1`
  font-family: Montserrat, serif;
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;
  color: #001218;
`;

export const StyledWrapperHeadText = styled.p`
  font-family: Montserrat, serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  color: #001218;
  &.reduced {
    max-width: 50%;
    @media screen and ${breakpoints.Device.desktop} {
      max-width: 100%;
    }
  }
`;
