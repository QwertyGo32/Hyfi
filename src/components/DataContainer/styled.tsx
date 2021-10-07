import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

export const StyledButton = styled(Button)``;

export const StyledSection = styled.section`
  &:not(:first-child) {
    padding-top: 26px;
  }
`;

export const StyledListHeader = styled.h3`
  display: grid;
  grid-template-columns: 1fr max-content;
  gap: 10px;
  border-bottom: 0.2px solid var(--main-default-underline-opacity-20);
  padding: 13.5px 0;
  align-items: flex-end;
  font-size: 12px;
  font-family: 'Montserrat', sans-serif;
  line-height: 15px;
  font-weight: 500;
  letter-spacing: 0;
  margin-bottom: 0;
`;

export const StyledList = styled.ul`
  padding: 0;

  & .list-header__first-item {
    min-height: 78px;
  }
`;

export const StyledListElement = styled.li`
  min-height: 52px;
  padding: 13.5px 0;
  display: grid;
  align-items: flex-end;
  grid-template-areas: '. .';
  border-bottom: 1px solid var(--main-default-link-color);
  p {
    margin: 0;
  }

  .title {
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    line-height: 15px;
    font-weight: 500;
    letter-spacing: 0;
    color: var(--main-text-default);
    opacity: 1;
    text-align: left;
    width: fit-content;
    margin-right: 10px;
  }

  .value {
    align-self: flex-end;
    text-align: end;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    line-height: 15px;
    font-weight: bold;
    letter-spacing: 0;
    color: var(--main-text-colored);
    opacity: 1;
  }
`;
