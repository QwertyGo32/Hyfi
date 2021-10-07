import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/redux';

export const selectCss = (state: RootState) => state.css;

export const selectClosedCssState = createSelector(
  selectCss,
  (state) => state.closed
);
