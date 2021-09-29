import { CurrencyEnum } from '@/interfaces/CurrencyEnums';
import React from 'react';
import Form from 'react-bootstrap/Form';

import {
  AccountNameContainer,
  AssetsContainer,
  StyledContainer,
  StyledImage,
  StyledForm,
} from './styled';

interface IAssetData {
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
  return (
    <StyledContainer>
      <AccountNameContainer>
        <StyledForm>
          <StyledImage
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
            rounded
            fluid
          />
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Account Name</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
        </StyledForm>
      </AccountNameContainer>
      <AssetsContainer>
        {[1, 2, 3, 4, 5, 6, 7, 1, 1, 1, 1, 1, 1].map(() => (
          <p>TEST</p>
        ))}
      </AssetsContainer>
    </StyledContainer>
  );
}
