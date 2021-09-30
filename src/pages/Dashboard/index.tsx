import React from 'react';
import { DashboardLicenseBlock } from '@pages/Dashboard/components/LicenseBlock/LicenseBlock';
import { TransactionsBlock } from '@pages/Dashboard/components/TransactionsBlock/TransactionsBlock';
import { DetailsBlock } from '@pages/Dashboard/components/DetailsBlock/DetailsBlock';
import { CompanyLogoData } from '@components/CompanyLogo/mocked';
import AccountName from './components/AccountName';
import { accountNameData } from './components/AccountName/mockedData';
import { DataContainerData } from '@components/DataContainer/mocked';
import { StyledDashboardWrapper } from '@pages/Dashboard/styled';
import { HeadBlock } from '@pages/Dashboard/components/HeadBlock/HeadBlock';
import { GraphBlock } from '@pages/Dashboard/components/GraphBlock/GraphBlock';

const Dashboard = () => {
  return (
    <StyledDashboardWrapper className={'dashboard-wrapper'}>
      <HeadBlock />
      <DashboardLicenseBlock />
      <TransactionsBlock />
      <AccountName avaliableAsset={accountNameData} />
      <DetailsBlock
        img={CompanyLogoData[0].img}
        title={'HyFi'}
        listData={[
          ...DataContainerData,
          DataContainerData[0],
          DataContainerData[0],
        ]}
      />
      <GraphBlock />
    </StyledDashboardWrapper>
  );
};

export default Dashboard;
