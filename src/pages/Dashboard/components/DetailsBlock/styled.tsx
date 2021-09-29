import styled from 'styled-components';
import { StyledListHeader } from '@components/DataContainer/styled';

export const StyledDetailsHead = styled(StyledListHeader)`
  border-bottom: none;
  font-family: Montserrat, serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: var(--main-text-default);

  & img {
    max-width: 50px;
    border-radius: 50% !important;
  }
`;
