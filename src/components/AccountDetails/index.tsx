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
import FormControl from 'react-bootstrap/FormControl';
import { ReactComponent as Copy } from '@icons/copy.svg';
import { ReactComponent as Link } from '@icons/link.svg';

export default function AccountDetails({ ...props }) {
  const [show, setShow] = useState(false);
  const [walletValue, setWalletValue] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const setTimeoutRef = useRef<typeof setTimeout>(null);
  const [isEditing, setEditing] = useState(false);
  const toggleEditing = () => {
    setEditing(!isEditing);
  };
  const copyData = () => {
    try {
      inputRef?.current?.focus();
      inputRef?.current?.select();
      const successful = document.execCommand('copy');
      const msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
      setIsCopied(true);
      // setTimeoutRef.current = setTimeout(() => {}, 2000);
    } catch (err) {
      console.log('Oops, unable to copy');
    }
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    if (isEditing) {
      inputRef?.current?.focus();
    }
  }, [isEditing]);
  return (
    <>
      <Button
        theme={gradientBtnTypes.gradient}
        variant="primary"
        onClick={handleShow}
      >
        Launch your wallet
      </Button>

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
            Launch your wallet
          </Modal.Title>
        </StyledHeader>
        <StyledBody className="show-grid p-4">
          <Container className="p-0">
            <Row>
              <Col
                xs={12}
                className="d-flex justify-content-between align-items-center mb-4"
              >
                <StyledText className="p-12">
                  Connected with MetaMask
                </StyledText>
                <StyledButton
                  theme={gradientBtnTypes.outline}
                  className="d-grid gap-1 justify-items-center p-1 px-3"
                  size="lg"
                  onClick={handleClose}
                >
                  Change
                </StyledButton>
              </Col>
              <Col xs={12} className="mb-3">
                <StyledInputGroup
                  onClick={toggleEditing}
                  onBlur={() => {
                    setEditing(false);
                  }}
                  className="mb-0 mb-md-3"
                >
                  <FormControl
                    ref={inputRef}
                    onChange={(event) => {
                      setWalletValue(event.target.value);
                    }}
                    placeholder="Your wallet"
                    aria-label="Your wallet"
                    aria-describedby="basic-addon1"
                    value={walletValue}
                  />
                </StyledInputGroup>
              </Col>
              <Col xs={12} className="d-flex mb-3 flex-column flex-md-row">
                <StyledButtonWithIcon
                  onClick={copyData}
                  className="d-flex m-0 mr-md-3 mb-xs-2 p-0 me-md-3"
                  variant="outline-primary"
                >
                  <Copy className="d-flex mx-2 my-n1 my-auto" />

                  {isCopied ? 'Copied!' : 'Copy Address'}
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
