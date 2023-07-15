import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalQuestions: 70,
  ansArray: [], // {id: number, point: number}[]
  type: '',
};

const mbtiSlice = createSlice({
  name: 'mbti',
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
    setType(state, action) {
      state.type = action.payload;
    },
  },
});

export const mbtiActions = mbtiSlice.actions;

export default mbtiSlice.reducer;
