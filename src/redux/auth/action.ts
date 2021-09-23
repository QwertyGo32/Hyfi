import { IUser, UserStatusType } from '@/interfaces/IUser';
import {authedUser} from "@mock/user"
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { persistor } from '@redux/index';

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

interface Returned extends IUser {
}

export const loginUserToWebSite = createAsyncThunk(
  'auth/loginUserToWebSite',
  async () => {
    await timeout(2000);
    return authedUser as Returned;
  }
);

export const logoutUserFromWebSite = createAsyncThunk(
  'auth/logoutUserFromWebSite',
  async () => {
    await timeout(3000);
    return {
      accountName:"",
      status:UserStatusType.VISITOR,
    } as Returned;
  }
);
