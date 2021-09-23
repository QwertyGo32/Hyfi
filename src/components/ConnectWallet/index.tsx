import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  StyledTitle,
  StyledBody,
  StyledHeader,
  StyledModal,
} from '@styles/modal.styled';
import { ReactComponent as Metamask } from '@icons/fox.svg';
import { ReactComponent as WalletConnect } from '@icons/wallet_connect.svg';

export default function ConnectWallet({ ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <StyledModal
        {...props}
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <StyledHeader className="p-4" closeButton>
          <Modal.Title id="contained-modal-title-vcenter" as={StyledTitle}>
            Connect Wallet
          </Modal.Title>
        </StyledHeader>
        <StyledBody className="show-grid p-4">
          <Container>
            <Row className="d-flex justify-content-around">
              <Col xs={12} md={6} className="ps-xs-0 pe-md-3 mb-3 mb-sm-0">
                <Button
                  className="d-grid gap-1 justify-items-center w-100 m-0 py-4 h-100"
                  variant="custom"
                  size="lg"
                  onClick={handleClose}
                >
                  <Metamask className="mx-auto" />
                  Metamask
                </Button>
              </Col>
              <Col xs={12} md={6} className="ps-md-3 pe-xs-0 ">
                <Button
                  className="d-grid gap-1 justify-items-center w-100 m-0 py-4 h-100"
                  variant="custom"
                  size="lg"
                  onClick={handleClose}
                >
                  <WalletConnect className="mx-auto" />
                  WalletConnect
                </Button>
              </Col>
            </Row>
          </Container>
        </StyledBody>
      </StyledModal>
    </>
  );
}
