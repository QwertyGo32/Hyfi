import { StyledDashboardBlock } from '@pages/Dashboard/styled';
import { StyledHeadBlockTitle } from '@pages/Dashboard/components/HeadBlock/styled';
import Tabs, { INavItemList } from '@components/Tabs';

export const HeadBlock = () => {
  const navList: INavItemList[] = [
    { text: 'Overview', href: '#Overview' },
    { text: 'License', href: '#License' },
    { text: 'Transactions', href: '#Transactions' },
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
