import React from 'react';
import { DashboardLicenseBlock } from '@pages/Dashboard/components/LicenseBlock/LicenseBlock';
import { TransactionsBlock } from '@pages/Dashboard/components/TransactionsBlock/TransactionsBlock';
import { DetailsBlock } from '@pages/Dashboard/components/DetailsBlock/DetailsBlock';
import { CompanyLogoData } from '@components/CompanyLogo/mocked';
import AccountName from './components/AccountName';
import { accountNameData } from './components/AccountName/mockedData';
const Dashboard = () => {
  return (
    <>
      <DashboardLicenseBlock />
      <TransactionsBlock />
      <DetailsBlock img={CompanyLogoData[0].img} title={'HyFi'} />
      <AccountName avaliableAsset={accountNameData} />
    </>
  );
};

export default Dashboard;
