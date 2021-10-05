import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SidebarState {
  closed: boolean;
}

const initialState: SidebarState = {
  closed: false,
};

export const SidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    changeClosed: (state, action: PayloadAction<boolean>) => {
      state.closed = action.payload;
    },
  },
});

export const { changeClosed } = SidebarSlice.actions;

export default SidebarSlice.reducer;
