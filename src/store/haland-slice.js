import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';
import {
  API_TALENT_TESTS,
  POST_CONFIG,
} from '../api/configAPI';

export const sendTestResult = createAsyncThunk(
  'haland/sendTestResult',
  async ({ user_token, result, name }) => {
    const objData = { name, result };

    console.log('here');

    try {
      const response = await axios.post(
        API_TALENT_TESTS,
        JSON.stringify(objData),
        POST_CONFIG(user_token),
      );

      const data = await response.data;

      console.log(data);
    } catch (error) {}
  },
);

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
