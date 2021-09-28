import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IloState {
  buyPrice: number | null;
}

const initialState: IloState = {
  buyPrice: null,
};

export const iloSlicer = createSlice({
  name: 'ilo',
  initialState,
  reducers: {
    changeIloBuyPrice: (state, action: PayloadAction<number>) => {
      state.buyPrice = action.payload;
    },
  },
});
export const { changeIloBuyPrice } = iloSlicer.actions;

export default iloSlicer.reducer;
