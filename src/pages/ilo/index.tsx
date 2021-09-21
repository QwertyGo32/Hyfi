import React from 'react';
import CompanyLogo from '@components/CompanyLogo';
import DataContainer from '@components/DataContainer';
import { CompanyLogoData } from '@components/CompanyLogo/mocked';

export default function Ilo() {
  return (
    <div>
      <p>TEST</p>
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
      />
    </div>
  );
}
