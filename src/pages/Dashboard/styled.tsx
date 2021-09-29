import styled from 'styled-components';
import CompanyLogo from '@components/CompanyLogo';
import { ReactComponent as DropdownArrow } from '@icons/dropdown-arrow.svg';

export const StyledDashboardBlock = styled.div`
  background: var(--main-default-bg);
  box-shadow: 0 3px 5px #ACB7C270;
  border-radius: 10px;
  padding: 30px;
`;

export const StyledDashboardBlockTitle = styled.div`
  font-size: 14px;
  line-height: 18px;
  font-weight: bold;
  color: var(--main-text-default);
`;

export const StyledCompanyLogo = styled(CompanyLogo)`
  margin-right: 100px;
`;

export const StyledDropdownArrow = styled(DropdownArrow)`
  width: 10px;
  height: 10px;
`;




