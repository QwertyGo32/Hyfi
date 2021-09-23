import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  connectWallet: boolean;
}

const initialState: ModalState = {
  connectWallet: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openConnectWallet: (state, action: PayloadAction<boolean>) => {
      state.connectWallet = action.payload;
    },
  },
});
export const { openConnectWallet } = modalSlice.actions;

export default modalSlice.reducer;
