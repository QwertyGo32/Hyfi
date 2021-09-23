import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginUserToWebSite, logoutUserFromWebSite } from './action';
import { PURGE } from 'redux-persist';
import { IUser, WalletType } from '@interfaces/IUser';

export interface AuthStateData extends IUser {}

export interface AuthState {
  data: AuthStateData;
  pending: boolean;
  error: boolean;
}

const initialState: AuthState = {
  data: { accountName: '', status: 'visitor', walletType: '' },
  pending: false,
  error: false,
};

export const counterSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setWalletType: (state, action: PayloadAction<`${WalletType}`>) => {
      state.data.walletType=action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserToWebSite.pending, (state) => {
        state.pending = true;
      })
      .addCase(loginUserToWebSite.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.data.accountName = payload.accountName;
        state.data.status = payload.status;
      })
      .addCase(loginUserToWebSite.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });

    builder
      .addCase(logoutUserFromWebSite.pending, (state) => {
        state.pending = true;
      })
      .addCase(logoutUserFromWebSite.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.data = initialState.data;
      })
      .addCase(logoutUserFromWebSite.rejected, (state) => {
        return initialState;
      });

    builder.addCase(PURGE, (state) => {
      return initialState;
    });
  },
});
export const { setWalletType } = counterSlice.actions;

export default counterSlice.reducer;
