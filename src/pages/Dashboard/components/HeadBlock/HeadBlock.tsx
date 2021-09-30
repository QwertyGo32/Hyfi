import { StyledDashboardBlock } from '@pages/Dashboard/styled';
import { StyledHeadBlockTitle } from '@pages/Dashboard/components/HeadBlock/styled';
import Tabs, { INavItemList } from '@components/Tabs';

export const HeadBlock = () => {
  const navList: INavItemList[] = [
    { text: 'Overview', key: 1 },
    { text: 'License', key: 2 },
    { text: 'Transactions', key: 3 },
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
