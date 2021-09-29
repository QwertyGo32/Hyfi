import styled from 'styled-components';
import CompanyLogo from '@components/CompanyLogo';
import { ReactComponent as DropdownArrow } from '@icons/dropdown-arrow.svg';

export const StyledDashboardBlock = styled.div`
  background: var(--main-default-bg);
  box-shadow: 0 3px 5px #acb7c270;
  border-radius: 10px;
  padding: 30px;
`;

export const StyledDashboardBlockTitle = styled.div`
  font-size: 14px;
  line-height: 18px;
  font-weight: bold;
  color: var(--main-text-default);
`;
