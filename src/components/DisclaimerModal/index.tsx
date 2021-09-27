import React, { useState, useRef, useEffect } from 'react';
// import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { StyledBody, StyledText } from './styled';
import { StyledTitle, StyledHeader, StyledModal } from '@styles/modal.styled';
import { selectIloDisclaimerModalState, openIloDisclaimer } from '@redux/modal';
import { useAppDispatch, useAppSelector } from '@utils/hooks';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

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
        size="xl"
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
              <Col xs={12} className="mb-3">
                <StyledText>FORWARD-LOOKING LOOKING STATEMENTS</StyledText>
                <StyledText>
                  Statements made on this Website that are not historical or
                  current facts are “forward-looking statements”. In some cases,
                  you can identify forward-looking statements by terminology
                  such as "may", "should", "intends", "expects", "plans",
                  "anticipates", "believes", "estimates", "predicts",
                  "potential", or "continue" or the negative of these terms or
                  other comparable terminology. We intend that such
                  forward-looking statements be subject to the safe harbors for
                  such statements. We wish to caution readers not to place undue
                  reliance on any such forward-looking statements, which speak
                  only as of the date made. Any forward-looking statements
                  represent management’s best judgment as to what may occur in
                  the future. However, forward-looking statements are subject to
                  risks, uncertainties and important factors beyond our control
                  that could cause actual results and events to differ
                  materially from historical results of operations and events
                  and those presently anticipated or projected. We disclaim any
                  obligation subsequently to revise any forward-looking
                  statements to reflect events or circumstances after the date
                  of such statement or to reflect the occurrence of anticipated
                  or unanticipated events.
                </StyledText>
              </Col>
              <Col>
                <InputGroup className="mb-3">
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                  <FormControl aria-label="Text input with checkbox" />
                </InputGroup>
                <InputGroup>
                  <InputGroup.Radio aria-label="Radio button for following text input" />
                  <FormControl aria-label="Text input with radio button" />
                </InputGroup>
              </Col>
            </Row>
          </Container>
        </StyledBody>
      </StyledModal>
    </>
  );
}
