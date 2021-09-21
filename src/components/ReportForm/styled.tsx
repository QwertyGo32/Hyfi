import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import Btn from '@components/Btn';
import { ReactComponent as Clip } from '@icons/clip.svg';
import breakpoints from '@styles/constants.styled';

export const StyledFormContainer = () => {
  return (
    <StyledForm id={'styled_form'}>
      <StyledTitle>Report an issue</StyledTitle>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <StyledFormLabel>Summary</StyledFormLabel>
        <Form.Control aria-required={'true'} size='lg' type='text' />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <StyledFormLabel>Description</StyledFormLabel>
        <Form.Control aria-required={'true'} as='textarea' style={{ height: '140px', resize: 'none' }} />
      </Form.Group>

      <StyledInputLabel>
        <Form.Control type='file' style={{ display: 'none' }} />
        <Clip />
        <StyledInputText>Choose a file</StyledInputText>
      </StyledInputLabel>

      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <StyledFormLabel>Wallet Address</StyledFormLabel>
        <Form.Control size='lg' type='text' />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <StyledFormLabel>Email</StyledFormLabel>
        <Form.Control aria-required={'true'} size='lg' type='email' />
      </Form.Group>

      <Btn type={'submit'} form={'styled_form'} theme={'gradient'} title={'Send'} />
    </StyledForm>
  );
};

const StyledForm = styled(Form)`
  width: 100%;
  max-width: 709px;
  max-height: 839px;
  padding: 65px 179px 65px 75px;
  background: #FFFFFF 0 0 no-repeat padding-box;
  box-shadow: 0 3px 5px #ACB7C270;
  border-radius: 10px;
  
  @media screen and ${breakpoints.Device.desktop} {
    padding: 65px 75px;
  }
`;

const StyledTitle = styled.h1`
  font: normal normal bold 40px/50px Montserrat;
  color: #001218;
  margin-bottom: 30px;
`;

const StyledInputText = styled.p`
  font: normal normal medium 15px/70px Montserrat;
  color: #224AFF;
  margin: 0;
`;

const StyledInputLabel = styled.label`
  height: 50px;
  width: 184px;
  padding: 16px 27px;
  border: 2px solid #224AFF;
  border-radius: 5px;
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 30px;
`;

const StyledFormLabel = styled(Form.Label)`
  font: normal normal medium 15px/19px Montserrat;
  position: relative;

  &:after {
    content: "*";
    position: absolute;
    top: -2px;
    right: -7px;
    color: #F5044E;
  }
`;