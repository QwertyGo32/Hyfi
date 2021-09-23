import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

export const StyledButton = styled(Button)``;

export const StyledSection = styled.section``;

export const StyledListHeader = styled.h3`
  display: grid;
  grid-template-columns: 1fr max-content;
  gap: 10px;
  border-bottom: 1px solid #7070701c;
  padding: 13.5px 0;
  align-items: flex-end;
`;

export const StyledList = styled.ul`
  padding: 0;
`;

export const StyledListElemet = styled.li`
  padding: 13.5px 0;
  display: grid;
  grid-template-columns: minmax(100px, max-content) minmax(100px, 1fr);
  gap: 50px;
  border-bottom: 1px solid #7070701c;
  p {
    margin: 0;
  }
  .title {
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, max-content);
    gap: 4.5px;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    line-height: 15px;
    font-weight: 500;
    letter-spacing: 0px;
    color: var(--main-text-default);
    opacity: 1;
    &.badge {
      cursor: pointer;
    }
  }
  .value {
    align-self: flex-end;
    text-align: end;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    line-height: 15px;
    font-weight: bold;
    letter-spacing: 0px;
    color: var(--main-text-colored);
    opacity: 1;
  }
`;
