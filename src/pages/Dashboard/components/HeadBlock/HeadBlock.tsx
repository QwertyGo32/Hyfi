import { StyledDashboardBlock } from '@pages/Dashboard/styled';
import { StyledHeadBlockTitle } from '@pages/Dashboard/components/HeadBlock/styled';
import Tabs, { INavItemList } from '@components/Tabs';
import { useQuery } from '@/utils/hooks';
export const HeadBlock = () => {
  const query = useQuery();
  const navList: INavItemList[] = [
    {
      text: 'Overview',
      href: '/?tab=overview',
      isLinkActive: () => 'overview' === query.get('tab'),
    },
    {
      text: 'License',
      href: '/?tab=license',
      isLinkActive: () => 'license' === query.get('tab'),
    },
    {
      text: 'Transactions',
      href: '/?tab=transactions',
      isLinkActive: () => 'transactions' === query.get('tab'),
    },
  ];
  return (
    <StyledDashboardBlock className={'head-block'}>
      <StyledHeadBlockTitle>Dashboard</StyledHeadBlockTitle>
      <Tabs
        navList={navList}
        onSelect={(eventKey) => {
          console.log('Test: ', eventKey);
        }}
      />
    </StyledDashboardBlock>
  );
};
