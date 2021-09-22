import React from 'react';
import CompanyLogo from '@components/CompanyLogo';
import DataContainer from '@components/DataContainer';
import { CompanyLogoData } from '@components/CompanyLogo/mocked';
import { DataContainerData } from '@components/DataContainer/mocked';

import AccountDetails from '@/components/AccountDetails';
import ConnectWallet from '@/components/ConnectWallet';

export default function Ilo() {
  return (
    <div>
      <p>TEST</p>
      <AccountDetails />
      <ConnectWallet />
      {CompanyLogoData.map(({ title, img, status }) => {
        return <CompanyLogo title={title} img={img} status={status} />;
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
