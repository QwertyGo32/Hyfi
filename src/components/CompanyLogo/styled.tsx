import styled from 'styled-components';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

export const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 8px;
`;

export const StyledImage = styled(Image)``;

export const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7.5px;
  grid-area: 1 / 1 / 2 / 2;
  background: var(--main-default-bg) 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px var(--main-block-shadow);
  border: 2px solid var(--main-text-colored);
  border-radius: 50%;
`;

export const StyledDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: 1 / 2 / 2 / 3;
`;

export const StyledTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0px;
  color: var(--main-text-default);
  opacity: 1;
  margin: 0;
`;
export const StyledStatus = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  line-height: 13px;
  font-weight: 500;
  letter-spacing: 0px;
  color: var(--main-default-underline);
  opacity: 1;
`;
export const StyledButton = styled(Button)`
  padding: 4px 3px;
  width: max-content;
  font-family: 'Montserrat', sans-serif;
  font-size: 8px;
  line-height: 10px;
  font-weight: 500;
  color: #3a8e61;
  &[data-hasstatus='false'] {
    display: none;
  }
  &[data-style='Participating'] {
    background: #f2faf5 0% 0% no-repeat padding-box;
    border: 1.5px solid #3a8e61;
    border-radius: 3px;
    opacity: 1;
    color: #3a8e61;
    &:hover {
      color: #3a8e61;
      background-color: #3a8e611c;
      border-color: #3a8e61;
    }
    &:focus {
      background-color: #3a8e611c;
      border-color: #3a8e61;
      box-shadow: 0 0 0 0.1rem rgb(58 142 97 / 50%);
      &:not(::focus-visible) {
        outline: 0;
      }
    }
  }
  &[data-style='Owned'] {
    background: #f2f3fa 0% 0% no-repeat padding-box;
    border: 1.5px solid var(--main-text-colored);
    border-radius: 3px;
    opacity: 1;
    color: var(--main-text-colored);
    &:hover {
      color: var(--main-text-colored);
      background-color: #e7e9f3;
      border-color: var(--main-default-btn-grd1);
    }
    &:focus {
      background-color: #e7e9f3;
      border-color: var(--main-default-btn-grd2);
      box-shadow: 0 0 0 0.1rem var(--main-default-btn-grd1);
      &:not(::focus-visible) {
        outline: 0;
      }
    }
  }
`;
