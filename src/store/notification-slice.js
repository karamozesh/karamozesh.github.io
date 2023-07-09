import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  success: {
    exist: false,
    message: '',
  },
  error: {
    exist: false,
    message: '',
  },
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    changeSuccess(state, action) {
      state.success = action.payload;
    },
    resetSuccess(state) {
      state.success = {
        exist: false,
        message: '',
      };
    },
    changeError(state, action) {
      state.error = action.payload;
    },
    resetError(state) {
      state.error = {
        exist: false,
        message: '',
      };
    },
  },
});

export const notificationActions =
  notificationSlice.actions;

export default notificationSlice.reducer;
