import { CurrencyEnum } from '@/interfaces/CurrencyEnums';
import React, { useRef, useState } from 'react';
import { useCopyText } from '@utils/hooks';

import {
  AccountNameContainer,
  AssetsContainer,
  StyledContainer,
  StyledImage,
  StyledForm,
  StyledFormLabel,
  StyledFormControl,
  StyledGradientContainer,
  StyledCopyTextBtn,
  StyledCopyLink,
  StyledFormGroup,
  AccountAssetElemet,
  AccountAssetHeader,
} from './styled';

export interface IAssetData {
  logo: string;
  name: string;
  ammount: number;
  price: number;
  currency: `${CurrencyEnum}`;
}

interface IAccountNameProps {
  avaliableAsset?: IAssetData[];
}

export default function AccountName({ avaliableAsset }: IAccountNameProps) {
  const [clicked, setClicked] = useState(false);
  const [accountName, setAccountName] = useState('');
  const [isCopy, invokeCopyText] = useCopyText();
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <StyledContainer>
      <AccountNameContainer>
        <StyledForm>
          <StyledImage
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
            rounded
            fluid
          />
          <StyledFormGroup controlId="exampleForm.ControlInput1">
            <StyledFormLabel>Account Name</StyledFormLabel>
            <StyledGradientContainer
              data-clicked={clicked}
              onClick={() => {
                inputRef.current?.focus();

                setClicked((prevState) => !prevState);
              }}
            >
              <StyledFormControl
                ref={inputRef}
                type="text"
                placeholder="Account name"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setAccountName(event.target.value);
                }}
                value={accountName}
                onBlur={() => {
                  setClicked((prevState) => !prevState);
                }}
              />
            </StyledGradientContainer>
          </StyledFormGroup>
          <StyledCopyTextBtn
            type="button"
            onClick={() => {
              invokeCopyText(accountName);
            }}
          >
            <StyledCopyLink />
            {!isCopy ? 'Copy text' : 'Copied!'}
          </StyledCopyTextBtn>
        </StyledForm>
      </AccountNameContainer>
      <AssetsContainer>
        <AccountAssetHeader ammount={8000} />
        {avaliableAsset?.map((elm, index) => (
          <AccountAssetElemet key={index} {...elm} />
        ))}
      </AssetsContainer>
    </StyledContainer>
  );
}
