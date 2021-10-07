import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CssState {
  closed: boolean;
}

const initialState: CssState = {
  closed: false,
};

export const CssSlice = createSlice({
  name: 'css',
  initialState,
  reducers: {
    changeClosed: (state, action: PayloadAction<boolean>) => {
      state.closed === action.payload
        ? (state.closed = !action.payload)
        : (state.closed = action.payload);
    },
  },
});

export const { changeClosed } = CssSlice.actions;

export default CssSlice.reducer;
