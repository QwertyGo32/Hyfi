import styled from 'styled-components';

export const StyledPartContainer = styled.section`
  padding: 25px 30px;
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 13px 24px;
  grid-template-areas:
    'icon title'
    '. text';
  background: var(--main-light-background) 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 5px var(--main-default-block-shadow);
  border: 1px solid var(--main-text-colored);
  border-radius: 10px;
  opacity: 1;
`;

export const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  grid-area: icon;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0px;
  color: var(--main-text-colored);
  opacity: 1;
  background: var(--main-default-bg) 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 5px var(--main-default-block-shadow);
  border-radius: 50%;
`;

export const StyledTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0px;
  color: var(--main-text-colored);
  opacity: 1;
  grid-area: title;
  margin: 0;
`;

export const StyledText = styled.p`
  grid-area: text;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0px;
  color: var(--main-text-default);
  opacity: 1;
  margin: 0;
`;
