import React from 'react';
import CompanyLogo from '@components/CompanyLogo';
import { CompanyLogoData } from '@components/CompanyLogo/mocked';
import { DataContainerData } from '@components/DataContainer/mocked';
import bgrImg from '@img/background.jpg';

import InputBlock from '@/components/Input';
import {
  IloHead,
  IloWrapperHead,
  StyledIloBlock,
  StyledIloBlockImg,
  StyledIloBlockTitle,
  StyledIloContainer,
  StyledIloContainerBlocks,
  StyledIloContainerInptBtn,
  StyledIloWrapper,
  StyledDataContainer,
} from '@pages/ilo/styled';
import Btn from '@components/Btn';

export default function Ilo() {
  return (
    <StyledIloWrapper>
      <IloWrapperHead />
      <StyledIloBlock>
        <StyledIloContainer className={'ilo-container'}>
          <IloHead />
          <StyledIloContainerBlocks>
            <StyledDataContainer
              inTitle={
                <CompanyLogo
                  title={CompanyLogoData[0].title}
                  img={CompanyLogoData[0].img}
                  status={CompanyLogoData[0].status}
                />
              }
              listData={DataContainerData}
            />
            <StyledDataContainer
              inTitle={<StyledIloBlockTitle>View Contract</StyledIloBlockTitle>}
              listData={[
                ...DataContainerData,
                DataContainerData[0],
                DataContainerData[0],
              ]}
            />
            <StyledDataContainer
              inTitle={<StyledIloBlockTitle>One Page Info</StyledIloBlockTitle>}
              listData={[...DataContainerData, DataContainerData[0]]}
            />
          </StyledIloContainerBlocks>
          <StyledIloContainerInptBtn>
            <InputBlock
              className={'ilo-page_btn'}
              placeholder='Test 1'
              badge='TEXT'
            />
            <Btn theme={'gradient'} title={'Buy'} className={'ilo-page_btn'} />
          </StyledIloContainerInptBtn>
        </StyledIloContainer>
        <StyledIloBlockImg
          className={'ilo-block__img'}
          alt={'initial_offers_banner'}
          src={`${bgrImg}`}
        />
      </StyledIloBlock>
      {/*<InputBlock placeholder="Test 1" badge="TEXT" />*/}
      {/*<InputBlock placeholder="Test 2" gradient />*/}
      {/*<AccountDetails />*/}
      {/*<ConnectWallet />*/}
      {/*{CompanyLogoData.map(({ title, img, status }) => {*/}
      {/*  return <CompanyLogo title={title} img={img} status={status} />;*/}
      {/*})}*/}
      {/*<DataContainer*/}
      {/*  inTitle={*/}
      {/*    <CompanyLogo*/}
      {/*      title={CompanyLogoData[0].title}*/}
      {/*      img={CompanyLogoData[0].img}*/}
      {/*      status={CompanyLogoData[0].status}*/}
      {/*    />*/}
      {/*  }*/}
      {/*  listData={DataContainerData}*/}
      {/*/>*/}
    </StyledIloWrapper>
  );
}
