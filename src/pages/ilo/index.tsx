import React from 'react';
import CompanyLogo from '@components/CompanyLogo';
import DataContainer from '@components/DataContainer';
import { CompanyLogoData } from '@components/CompanyLogo/mocked';
import { DataContainerData } from '@components/DataContainer/mocked';

import AccountDetails from '@/components/AccountDetails';
import ConnectWallet from '@/components/ConnectWallet';
import InputBlock from '@/components/Input';
export default function Ilo() {
  return (
    <div>
      <p>TEST</p>
      <InputBlock placeholder="Test 1" badge="TEXT" />
      <InputBlock placeholder="Test 2" gradient />
      <AccountDetails />
      <ConnectWallet />
      {CompanyLogoData.map(({ title, img, status }, index) => {
        return (
          <CompanyLogo key={index} title={title} img={img} status={status} />
        );
      })}
      <DataContainer
        inTitle={
          <CompanyLogo
            title={CompanyLogoData[0].title}
            img={CompanyLogoData[0].img}
            status={CompanyLogoData[0].status}
          />
        }
        listData={DataContainerData}
      />
    </div>
  );
}
