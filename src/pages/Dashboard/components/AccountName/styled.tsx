import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';

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

export const StyledForm = styled(Form)``;

export const StyledFormGroup = styled(Form.Group)``;

export const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const AccountNameContainer = styled.div``;
export const AssetsContainer = styled.div``;
