import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@redux/index';

export const selectModal = (state: RootState) => state.modal;

export const selectConnectWalletModalState = createSelector(
  selectModal,
  (state) => state.connectWallet
);
export const selectChangeWalletModalState = createSelector(
  selectModal,
  (state) => state.changeWallet
);
