import React, { useState, useRef, useEffect } from 'react';
// import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  StyledBody,
  StyledButton,
  StyledText,
  StyledButtonWithIcon,
  StyledInputGroup,
} from './styled';
import { StyledTitle, StyledHeader, StyledModal } from '@styles/modal.styled';
import Button, { gradientBtnTypes } from '@components/Btn';
import Form from 'react-bootstrap/Form';
import { ReactComponent as Copy } from '@icons/copy.svg';
import { ReactComponent as Link } from '@icons/link.svg';
import Spinner from 'react-bootstrap/Spinner';
import { selectIloDisclaimerModalState, openIloDisclaimer } from '@redux/modal';
import {
  authWalletAddress,
  authWalletType,
  changeStateData,
  changeStateField,
} from '@redux/auth';
import { WalletType } from '@/interfaces/IUser';
import { useAppDispatch, useAppSelector } from '@utils/hooks';
import { useValidation } from 'react-class-validator';
import { InputGroup } from 'react-bootstrap';

export default function DisclaimerModal({ ...props }) {
  //   const [validate, errors] = useValidation(HashValidationDto);

  const show = useAppSelector(selectIloDisclaimerModalState);

  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const intervalRef: { current: NodeJS.Timeout | null } = useRef(null);

  const handleSubmit = async function (
    evt: React.SyntheticEvent<HTMLFormElement>
  ) {
    evt.preventDefault();
  };

  const handleClose = () => {
    window.scrollTo({
      left: 0,
      top: 0,
    });
    dispatch(openIloDisclaimer(false));
  };

  return (
    <>
      <StyledModal
        {...props}
        size="md"
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <StyledHeader className="p-4" closeButton>
          <Modal.Title id="contained-modal-title-vcenter" as={StyledTitle}>
            Disclaimer
          </Modal.Title>
        </StyledHeader>
        <StyledBody className="show-grid p-4">
          <Container className="p-0">
            <Row>
              <Col
                xs={12}
                className="d-flex justify-content-between align-items-center mb-4"
              >
                <StyledText className="p-12">Connected with </StyledText>
                <StyledButton
                  theme={gradientBtnTypes.outline}
                  className="d-grid gap-1 justify-items-center p-1 px-3"
                  size="lg"
                  onClick={() => {}}
                >
                  Change
                </StyledButton>
              </Col>
              <Col xs={12} className="mb-3">
                <Form noValidate onSubmit={handleSubmit}>
                  <StyledInputGroup onClick={() => {}} className="mb-0 mb-md-3">
                    <InputGroup>
                      {/* {fieldLoader.accountName && (
                        <InputGroup.Text>
                          <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />
                        </InputGroup.Text>
                      )} */}
                      <Form.Control
                        ref={inputRef}
                        onChange={(event) => {}}
                        placeholder="Your wallet"
                        aria-label="Your wallet"
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>
                  </StyledInputGroup>
                </Form>
              </Col>
              <Col xs={12} className="d-flex mb-3 flex-column flex-md-row">
                <StyledButtonWithIcon
                  onClick={() => {}}
                  className="d-flex m-0 mr-md-3 mb-xs-2 p-0 me-md-3"
                  variant="outline-primary"
                >
                  <Copy className="d-flex mx-2 my-n1 my-auto" />
                </StyledButtonWithIcon>
                <StyledButtonWithIcon
                  href="#test"
                  className="d-flex m-0 p-0"
                  variant="outline-primary"
                >
                  <Link className="d-flex mx-2 my-auto" />
                  View on Browser
                </StyledButtonWithIcon>
              </Col>
            </Row>
          </Container>
        </StyledBody>
      </StyledModal>
    </>
  );
}
