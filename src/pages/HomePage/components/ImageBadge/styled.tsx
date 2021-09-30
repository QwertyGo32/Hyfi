import styled from 'styled-components';
import breakpoints from '@styles/constants.styled';

interface IStyledBadgeProps {
  image: string;
}

export const StyledBadge = styled.div<IStyledBadgeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  /* max-width: 352px; */
  min-height: 164px;
  padding: 34px;
  background-image: url(${(p) => p.image});
  background-size: cover;
  border-radius: 25px;
`;

export const StyledSpan = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 24px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  @media screen and ${breakpoints.Device.tablet} {
    font-size: 20px;
  }
`;
