import { StyledDashboardBlock } from '@pages/Dashboard/styled';
import { StyledHeadBlockTitle } from '@pages/Dashboard/components/HeadBlock/styled';
import Tabs, { INavItemList } from '@components/Tabs';
import { useRouteMatch } from 'react-router-dom';
export const HeadBlock = () => {
  const { url } = useRouteMatch();

  const navList: INavItemList[] = [
    {
      text: 'Overview',
      href: `${url}/overview`,
    },
    {
      text: 'License',
      href: `${url}/license`,
    },
    {
      text: 'Transactions',
      href: `${url}/transactions`,
    },
  ];
  return (
    <StyledDashboardBlock className={'head-block'}>
      <StyledHeadBlockTitle>Dashboard</StyledHeadBlockTitle>
      <Tabs navList={navList} />
    </StyledDashboardBlock>
  );
};
