import styled from 'styled-components';
import { StyledBody as SBody } from '@styles/modal.styled';

export const StyledText = styled.p`
  font-style: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: var(--main-text-default);
`;

export const StyledBody = styled(SBody)`
  font: normal normal medium 14px/24px Montserrat;
  letter-spacing: 0px;
  color: var(--main-text-default);
`;
