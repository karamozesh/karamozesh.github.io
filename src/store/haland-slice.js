import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalQuestions: 48,
  ansArray: [], // {id: number, point: number}[]
};

const halandSlice = createSlice({
  name: 'haland',
  initialState,
  reducers: {
    setAns(state, action) {
      state.ansArray = action.payload;
    },
    addAns(state, action) {
      const ans = action.payload;

      let existAnsIndex =
        state.ansArray.findIndex(
          (ansInArray) =>
            ansInArray.id === ans.id,
        );
      // // if exist then update else add
      if (existAnsIndex > -1) {
        state.ansArray[existAnsIndex] = ans;
      } else {
        state.ansArray.push(ans);
      }
    },
  },
});

export const halandActions = halandSlice.actions;

export default halandSlice.reducer;
