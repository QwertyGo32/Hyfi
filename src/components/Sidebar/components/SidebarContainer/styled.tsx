import styled from 'styled-components';

export const StyledNetworksContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledNetworkLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  background: var(--main-default-bg) 0 0 no-repeat padding-box;
  box-shadow: 0 3px 5px var(--main-default-block-shadow);
  display: flex;
  justify-content: center;
  align-items: center;
  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export const StyledToggleContainer = styled.div`
  display: grid;
  grid-template-rows: 23px 23px;
  cursor: pointer;
`;
export const StyledSidebarContainer = styled.div`
  width: var(--sidebar-initial-width);
  padding: 0 33px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 500ms;
`;
