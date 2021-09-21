import React from 'react';
import CompanyLogo from '@components/CompanyLogo';
import { CompanyLogoData } from '@components/CompanyLogo/mocked';

export default function Ilo() {
  return (
    <div>
      <p>TEST</p>
      {CompanyLogoData.map(({ title, img, status }) => {
        return <CompanyLogo title={title} img={img} status={status} />;
      })}
    </div>
  );
}
