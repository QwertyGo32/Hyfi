import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { StyledBody, StyledHeader, StyledModal, StyledTitle } from "./styled";
import { ReactComponent as Metamask } from "@icons/fox.svg";
import { ReactComponent as WalletConnect } from "@icons/wallet_connect.svg";

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
            <Row>
              <Col xs={6} className="ps-0 pe-3">
                <Button
                  className="d-grid gap-1 justify-items-center w-100 m-0 py-4"
                  variant="custom"
                  size="lg"
                  onClick={handleClose}
                >
                  <Metamask className="mx-auto" />
                  Metamask
                </Button>
              </Col>
              <Col xs={6} className="ps-3 pe-0">
                <Button
                  className="d-grid gap-1 justify-items-center w-100 m-0 py-4"
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
