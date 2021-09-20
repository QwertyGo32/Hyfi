import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@redux/index';

export const selectAuth = (state: RootState) => state.auth;

export const authSelectorState = createSelector(selectAuth, (state) => state);

export const isLoggedState = createSelector(
  selectAuth,
  (state) => state.data.isAuth
);
