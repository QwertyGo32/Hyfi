import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/redux';

export const selectSidebar = (state: RootState) => state.sidebar;

export const selectClosedSidebarState = createSelector(
  selectSidebar,
  (state) => state.closed
);
