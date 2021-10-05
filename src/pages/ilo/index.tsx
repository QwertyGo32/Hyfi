import React from 'react';
import CompanyLogo from '@components/CompanyLogo';
import { CompanyLogoData } from '@components/CompanyLogo/mocked';
import { DataContainerData } from '@components/DataContainer/mocked';
import { TitleContainerData } from '@components/DataContainer/mocked';
import bgrImg from '@img/background.jpg';

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
import { StyledTitleContainer } from '@pages/Dashboard/components/TitleContainer/styled';

export default function Ilo() {
  const dispatch = useAppDispatch();
  const priceState = useAppSelector(selectIloBuyPriceState);
  const contribution = useAppSelector(selectIloContributionState);
  const changeValue = function (event: React.ChangeEvent<HTMLInputElement>) {
    const value: number = +event.target.value;

    if (value >= 0) {
      dispatch(changeIloBuyPrice(value));
    }
  };
  return (
    <StyledIloWrapper>
      <PageHead
        title="ILO"
        children="Owners that seek to raise money for their development of New
          technologies; IP, Patents Licenses, Brands and Projects (“Assets”) can
          sell up to a 49% interest in their Assets on the HYFI Platform with a
          right to buy back interests sold. We will introduce your Assets to our
          Global network of Brokers who will introduce Investors (Institutional,
          Corporations, Family Offices, Private Wealth and Individuals) who may
          buy fractional interests in your Assets."
      />
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
            <StyledTitleContainer
              inTitle={<StyledIloBlockTitle>One Page Info</StyledIloBlockTitle>}
              listTitles={[
                TitleContainerData[0],
                TitleContainerData[1],
                TitleContainerData[2],
              ]}
            />
          </StyledIloContainerBlocks>
          <StyledIloContainerInptBtn>
            <StyledIloContainerInfo>
              <InputBlock
                className={'ilo-page_btn'}
                placeholder={String(priceState) ?? ''}
                value={priceState || 0}
                badge="BUSD"
                type="text"
                onChange={changeValue}
              />
              <p className="info">
                Your Contribution <span>{contribution} BUSD</span>
              </p>
            </StyledIloContainerInfo>
            <AuthedUserBtn />
            <AuthedConnectWallet />
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
