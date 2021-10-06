import React from 'react';
import CompanyLogo from '@components/CompanyLogo';
import { CompanyLogoData } from '@components/CompanyLogo/mocked';
import { DataContainerData } from '@components/DataContainer/mocked';
import { TitleContainerData } from '@components/DataContainer/mocked';

import InputBlock from '@/components/Input';
import {
  IloHead,
  StyledIloBlock,
  StyledIloBlockImg,
  StyledIloBlockTitle,
  StyledIloContainer,
  StyledIloContainerBlocks,
  StyledIloContainerInptBtn,
  StyledIloWrapper,
  StyledDataContainer,
  StyledIloContainerInfo,
  StyledIloBlockBlueText,
} from '@pages/ilo/styled';
import PageHead from '@/components/PageHead';
import DisclaimerModal from '@components/DisclaimerModal';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import {
  selectIloBuyPriceState,
  changeIloBuyPrice,
  selectIloContributionState,
} from '@redux/ilo';
import AuthedUserBtn from './protection/buyBtn';
import AuthedConnectWallet from './protection/connectWallet';

export default function Ilo() {
  const dispatch = useAppDispatch();
  const priceState = useAppSelector(selectIloBuyPriceState) || 0;
  const contribution = useAppSelector(selectIloContributionState);
  const changeValue = function (event: React.ChangeEvent<HTMLInputElement>) {
    const value: number = +event.target.value;

    if (value >= 0) {
      dispatch(changeIloBuyPrice(value));
    }
  };
  return (
    <StyledIloWrapper>
      <PageHead title="ILO" />
      <StyledIloBlock className={'ilo-block'}>
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
              listData={[
                DataContainerData[0],
                DataContainerData[1],
                DataContainerData[2],
              ]}
            />
            <StyledDataContainer
              inTitle={
                <CompanyLogo
                  title={CompanyLogoData[0].title}
                  img={CompanyLogoData[0].img}
                  status={CompanyLogoData[0].status}
                />
              }
              listData={[
                DataContainerData[0],
                DataContainerData[1],
                DataContainerData[2],
              ]}
            />
            <StyledDataContainer
              inTitle={<StyledIloBlockTitle>View Contract</StyledIloBlockTitle>}
              listData={[DataContainerData[3], DataContainerData[4]]}
            />
            <StyledDataContainer
              inTitle={
                <StyledIloBlockTitle>
                  {TitleContainerData[0].title}
                </StyledIloBlockTitle>
              }
              listData={[TitleContainerData[1], TitleContainerData[2]]}
            />
          </StyledIloContainerBlocks>
          <StyledIloBlockTitle>
            Number of Licenses Fragments:
          </StyledIloBlockTitle>
          <StyledIloContainerInptBtn>
            <StyledIloContainerInfo>
              <InputBlock
                className={'ilo-page_btn'}
                placeholder={String(priceState) ?? ''}
                value={priceState}
                type="text"
                onChange={changeValue}
              />
              <StyledIloBlockBlueText>
                {priceState} licenses fragments for {priceState} USDT
              </StyledIloBlockBlueText>
              <p className="info">
                Your Contribution <span>{contribution} USDT</span>
              </p>
            </StyledIloContainerInfo>
            <AuthedUserBtn />
            <AuthedConnectWallet />
          </StyledIloContainerInptBtn>
        </StyledIloContainer>
        <StyledIloBlockImg className={'ilo-block__img'} />
      </StyledIloBlock>
      <DisclaimerModal />
    </StyledIloWrapper>
  );
}
