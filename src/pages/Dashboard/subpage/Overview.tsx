import { CompanyLogoData } from '@/components/CompanyLogo/mocked';
import { DataContainerData } from '@/components/DataContainer/mocked';
import React from 'react';
// import { useParams } from 'react-router-dom';
import AccountName from '../components/AccountName';
import { accountNameData } from '../components/AccountName/mockedData';
import { DetailsBlock } from '../components/DetailsBlock/DetailsBlock';
import { GraphBlock } from '../components/GraphBlock/GraphBlock';
import { DashboardLicenseBlock } from '../components/LicenseBlock/LicenseBlock';
import { TransactionsBlock } from '../components/TransactionsBlock/TransactionsBlock';

export default function Overview() {
  // let { overview } = useParams<{ overview?: string }>();
  return (
    <>
      <DashboardLicenseBlock />
      <TransactionsBlock />
      <AccountName avaliableAsset={accountNameData} />
      <DetailsBlock
        img={CompanyLogoData[0].img}
        title={'HyFi'}
        listData={[...DataContainerData]}
      />
      <GraphBlock />
    </>
  );
}
