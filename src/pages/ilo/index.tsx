import React from 'react';
import { useAppDispatch, useAppSelector } from '@utils/hooks';
import {
  loginUserToWebSite,
  logoutUserFromWebSite,
  selectAuth,
} from '@redux/auth';
import { persistor } from '@redux/index';

export default function Ilo() {
  return (
    <div>
      <p>TEST</p>
    </div>
  );
}
