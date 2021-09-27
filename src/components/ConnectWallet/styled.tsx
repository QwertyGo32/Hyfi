import styled from "styled-components";
import Modal from "react-bootstrap/Modal";

export const StyledModal = styled(Modal)`
  background: #f1f3f5cc 0% 0% no-repeat padding-box;
  .modal-content {
    border-radius: 10px;
    box-shadow: 0px 3px 5px var(--main-default-block-shadow);
    border: none;
  }
`;

export const StyledHeader = styled(Modal.Header)`
  .btn-close {
    position: relative;
    margin-top: -70px;
    margin-right: -45px;
    border-radius: 50%;
    width: 47px;
    height: 47px;
    opacity: 1;
    background: transparent
      linear-gradient(
        180deg,
        var(--main-default-btn-grd1) 0%,
        var(--main-default-btn-grd2) 100%
      )
      0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 5px #4364f747;
    &::before,
    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      content: "";
      width: 14px;
      height: 1px;
      background: white;
      transform: scale(2);
      border-radius: 15%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(45deg) scale(1.8);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(-45deg) scale(1.8);
    }
  }
`;

export const StyledBody = styled(Modal.Body)`
  .btn {
    &-custom {
      border-radius: 10px;
      color: black;
      background-color: #f1f3f5;
      border-color: #f1f3f5;
      &:hover {
        color: black;
        background-color: #e1e6eb;
        border-color: #e1e6eb;
      }
      &:focus {
        color: black;
        background-color: #e1e6eb;
        border-color: #e1e6eb;
        box-shadow: 0 0 0 0.25rem rgb(130 138 145 / 50%);
        &:not(::focus-visible) {
          outline: 0;
        }
      }
    }
  }
`;

export const StyledTitle = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 0px;
  color: #001218;
  opacity: 1;
  user-select: none;
`;
