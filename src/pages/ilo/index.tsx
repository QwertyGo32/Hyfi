import React from 'react';
import CompanyLogo from '@components/CompanyLogo';
import { CompanyLogoData } from '@components/CompanyLogo/mocked';
import { DataContainerData } from '@components/DataContainer/mocked';
import bgrImg from '@img/background.jpg';

import InputBlock from '@/components/Input';
import {
  IloHead,
  // IloWrapperHead,
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
import PageHead from '@/components/PageHead';
import DisclaimerModal from '@components/DisclaimerModal';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { openIloDisclaimer } from '@redux/modal';
import { selectIloBuyPriceState, changeIloBuyPrice } from '@redux/ilo';

export default function Ilo() {
  const dispatch = useAppDispatch();
  const priceState = useAppSelector(selectIloBuyPriceState);
  const changeValue = function (event: React.ChangeEvent<HTMLInputElement>) {
    const value: number = +event.target.value as number;
    dispatch(changeIloBuyPrice(+value ?? 0));
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
                value={priceState ?? 0}
                badge="BUSD"
                type="number"
                onChange={changeValue}
              />
              <p className="info">
                Your Contribution <span>0 BUSD</span>
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
