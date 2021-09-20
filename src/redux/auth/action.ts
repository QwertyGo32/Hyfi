import { createAsyncThunk } from '@reduxjs/toolkit';
// import { persistor } from '@redux/index';

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

interface Returned{
  logged:boolean;
}

export const loginUserToWebSite = createAsyncThunk(
  'auth/loginUserToWebSite',
  async () => {
    await timeout(3000);
    return {
      logged: true,
    } as Returned;
  }
);

export const logoutUserFromWebSite = createAsyncThunk(
  'auth/logoutUserFromWebSite',
  async () => {
    await timeout(3000);
    return {
      logged: false,
    } as Returned;
  }
);
