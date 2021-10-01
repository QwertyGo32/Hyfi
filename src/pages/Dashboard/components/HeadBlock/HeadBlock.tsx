import { StyledDashboardBlock } from '@pages/Dashboard/styled';
import { StyledHeadBlockTitle } from '@pages/Dashboard/components/HeadBlock/styled';
import Tabs, { INavItemList } from '@components/Tabs';
import { useLocation } from 'react-router';

export const HeadBlock = () => {
  const location = useLocation();
  const navList: INavItemList[] = [
    { text: 'Overview', href: '/#overview' },
    { text: 'License', href: '/#license' },
    { text: 'Transactions', href: '/#transactions' },
  ];
  return (
    <StyledDashboardBlock className={'head-block'}>
      <StyledHeadBlockTitle>Dashboard</StyledHeadBlockTitle>
      <Tabs
        activeKey={`/${location.hash}`}
        navList={navList}
        onSelect={(eventKey) => {
          console.log('Test: ', eventKey);
        }}
      />
    </StyledDashboardBlock>
  );
};
