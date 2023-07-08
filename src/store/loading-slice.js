import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: false,
  register: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    changeLoading(state, action) {
      const prop = action.payload.prop;
      const value = action.payload.value;
      state[prop] = value;
    },
  },
});

export const loadingActions =
  loadingSlice.actions;

export default loadingSlice.reducer;
