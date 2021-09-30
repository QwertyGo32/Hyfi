import styled from 'styled-components';
import breakpoints from '@styles/constants.styled';

export const StyledDashboardBlock = styled.div`
  background: var(--main-default-bg);
  box-shadow: 0 3px 5px #acb7c270;
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and ${breakpoints.Device.mobile} {
    padding: 15px;
  }

  &.head-block {
    grid-area: head;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: fit-content;
    flex-wrap: wrap;
  }

  &.license-block {
    grid-area: license;
  }

  &.transactions-block {
    grid-area: transactions;
  }

  &.account-block {
    padding: 0;
    grid-area: account;
  }

  &.details-block {
    grid-area: details;
  }

  &.graph-block {
    grid-area: graph;
  }
`;

export const StyledDashboardBlockTitle = styled.div`
  font-size: 14px;
  line-height: 18px;
  font-weight: bold;
  color: var(--main-text-default);
`;

export const StyledDashboardWrapper = styled.div`
  width: 100%;
  max-width: 1266px;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    'head head head'
    'license transactions account'
    'details graph graph';
  grid-gap: 30px;
  padding: 30px 0;

  @media screen and ${breakpoints.Device.desktop} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'head head'
      'license transactions'
      'account details'
      'graph graph';
  }

  @media screen and ${breakpoints.Device.desktop_sm} {
    grid-template-columns: 1fr;
    grid-template-areas:
      'head'
      'license'
      'transactions'
      'account'
      'details'
      'graph';
  }

  @media screen and ${breakpoints.Device.mobile} {
    padding: 30px 0 120px 0;
  }
`;
