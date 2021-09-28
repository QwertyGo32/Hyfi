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
  StyledIloContainerInfo,
} from '@pages/ilo/styled';
import Btn from '@components/Btn';
import DisclaimerModal from '@components/DisclaimerModal';
import { useAppDispatch } from '@/utils/hooks';
import { openIloDisclaimer } from '@redux/modal';

export default function Ilo() {
  const dispatch = useAppDispatch();

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
            <StyledIloContainerInfo>
              <InputBlock
                className={'ilo-page_btn'}
                placeholder="Test 1"
                badge="USDT"
                type="number"
              />
              <p className="info">
                Your Contribution <span>0 USDT</span>
              </p>
            </StyledIloContainerInfo>
            <Btn
              theme={'gradient'}
              title={'Buy'}
              className={'ilo-page_btn ilo-page_btn-gradient'}
              onClick={() => {
                console.log('CLICk');
                window.scrollTo({ left: 0, top: 0 });
                dispatch(openIloDisclaimer(true));
              }}
            />
          </StyledIloContainerInptBtn>
        </StyledIloContainer>
        <StyledIloBlockImg
          className={'ilo-block__img'}
          alt={'initial_offers_banner'}
          src={`${bgrImg}`}
        />
      </StyledIloBlock>
      <DisclaimerModal />
    </StyledIloWrapper>
  );
}
