import React from 'react';
import { useAppDispatch, useAppSelector } from '@utils/hooks';
import {
  loginUserToWebSite,
  logoutUserFromWebSite,
  selectAuth,
} from '@redux/auth';
import { persistor } from '@redux/index';

export default function Login() {
  const dispatch = useAppDispatch();
  const {
    pending,
    data: { isAuth },
  } = useAppSelector(selectAuth);

  const loginFunction = function () {
    dispatch(loginUserToWebSite());
  };
  const logoutFunction = function () {
    persistor.purge();
    dispatch(logoutUserFromWebSite());
  };
  return (
    <div>
      <p>Current state: {String(pending)}</p>
      <p>Is I am Authed? {String(isAuth)} </p>
      <button disabled={pending} onClick={loginFunction}>
        Login
      </button>
      <button disabled={pending} onClick={logoutFunction}>
        LogOut
      </button>
    </div>
  );
}
