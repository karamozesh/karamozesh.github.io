import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice';
import resumeReducer from './resume-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    resume: resumeReducer,
  },
});

export default store;
