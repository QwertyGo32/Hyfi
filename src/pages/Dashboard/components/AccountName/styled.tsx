import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import { ReactComponent as Copy } from '@icons/copy.svg';
import { IAssetData } from '.';

export const StyledImage = styled(Image)`
  height: 62px;
  width: 62px;
  border-radius: 50% !important;
  box-shadow: 0px 3px 6px var(--main-text-colored-opacity);
  border: 2px solid var(--main-text-colored);
  &.small {
    height: 32px;
    width: 32px;
    border: 2px solid var(--main-text-colored);
  }
`;

export const StyledCopyLink = styled(Copy)``;

export const StyledCopyTextBtn = styled.button`
  display: grid;
  grid-template-columns: auto auto;
  gap: 7px;
  background: transparent;
  outline: none;
  border: none;
  grid-area: btn;
  width: fit-content;
  align-self: baseline;
  font-style: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0px;
  color: var(--main-text-colored);
`;

export const StyledForm = styled(Form)`
  display: grid;
  grid-template-columns: 62px 1fr;
  gap: 24px 20px;
  grid-template-areas:
    'icon input'
    '. btn';
`;

export const StyledGradientContainer = styled.div`
  position: relative;
  &[data-clicked='true'] {
    &::before {
      display: none;
    }
  }
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    border-radius: 5px;
    background: transparent
      linear-gradient(
        90deg,
        var(--main-default-bg-opacity) 0%,
        var(--main-default-tab-color) 100%
      )
      0% 0% no-repeat padding-box;
  }
`;

export const StyledFormControl = styled(Form.Control)`
  position: relative;
  background: var(--main-default-bg) 0% 0% no-repeat padding-box;
  box-shadow: inset 4px 5px 6px var(--main-defaukt-bg1);
  border-radius: 5px;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0px;
  color: var(--main-text-default) !important;
  opacity: 1;
  padding: 6px 18px;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    background: red;
    height: 100%;
    /* background: transparent
      linear-gradient(
        90deg,
        var(--main-bg-wallet-grd1) 0%,
        var(--main-text-colored) 100%
      )
      0% 0% no-repeat padding-box;
    z-index: 1;
    width: calc(100% - var(--logo-width));
    height: 100%;
    right: 0; */
  }
`;

export const StyledFormGroup = styled(Form.Group)`
  .invalid-feedback {
    display: flex;
    flex-direction: column;
  }
`;
export const StyledFormLabel = styled(Form.Label)`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0px;
  color: var(--main-text-default);
  opacity: 1;
`;

export const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--main-default-bg) 0% 0% no-repeat padding-box;
  box-shadow: 0 3px 5px var(--main-default-block-shadow);
  border-radius: 10px;
`;

export const AccountNameContainer = styled.div`
  padding: 30px;
`;
export const AssetsContainer = styled.div`
  padding: 30px 25px 30px 30px;
  max-height: 243px;
  overflow: auto;
  background: var(--main-default-tab-color) 0% 0% no-repeat padding-box;
  box-shadow: inset 0 3px 5px var(--main-default-block-shadow);
  &::-webkit-scrollbar {
    width: 5px; /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: var(--main-default-tab-color); /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(
      --main-default-block-shadow
    ); /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 1px solid var(--main-default-block-shadow); /* creates padding around scroll thumb */
  }
`;

const StyledAccoutElemContainer = styled.div`
  display: grid;
  grid-template-columns: 32px 1fr max-content;
  grid-template-rows: 1fr;
  align-items: center;
  gap: 7px;
  grid-template-areas: '. . .';
  border-bottom: 1px solid var(--main-default-wrapper-border);
  padding: 5px 0;
  margin-top: 10px;
  &.header {
    gap: 0px;
    margin: 0;
    justify-content: space-between;
    grid-template-columns: 1fr 1fr;
  }
`;

const StyledNameText = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0;
  color: var(--main-text-default);
  opacity: 1;
`;

const StyledPriceContainer = styled.div`
  display: grid;
  justify-items: flex-end;
`;
const StyledAmmount = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0px;
  color: var(--main-text-colored);
  opacity: 1;
`;
const StyledPrice = styled.span`
  display: flex;
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0px;
  color: var(--main-text-default);
`;

export const AccountAssetElemet = (data: IAssetData) => {
  return (
    <StyledAccoutElemContainer>
      <StyledImage src={data?.logo ?? ''} className="small" />
      <StyledNameText>{data?.name ?? ''}</StyledNameText>
      <StyledPriceContainer>
        <StyledAmmount>
          {Number(data?.ammount ?? 0).toLocaleString('en-GB')}
        </StyledAmmount>
        <StyledPrice>{`$${Number(data?.price ?? 0).toLocaleString('en-GB')} ${
          data?.currency
        }`}</StyledPrice>
      </StyledPriceContainer>
    </StyledAccoutElemContainer>
  );
};

interface IAccountAssetElemet {
  ammount: number;
}
export const AccountAssetHeader = (data: IAccountAssetElemet) => {
  return (
    <StyledAccoutElemContainer className="header">
      <StyledNameText>Assets</StyledNameText>
      <StyledPriceContainer>
        <StyledAmmount>
          Balance: ${Number(data?.ammount ?? 0).toLocaleString('en-GB')}
        </StyledAmmount>
      </StyledPriceContainer>
    </StyledAccoutElemContainer>
  );
};
