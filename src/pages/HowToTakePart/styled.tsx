import styled from 'styled-components';
import PageHead from '@/components/PageHead';

export const StyledContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledPageHeader = styled(PageHead)`
  background: var(--main-default-tab-color);
  justify-content: flex-end;
  padding-bottom: 0;
`;

export const StyledPageContainer = styled.div`
  width: 90%;
  max-width: 1266px;
  display: grid;
  gap: 30px;
  margin: 30px auto;
`;
