import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice';
import resumeReducer from './resume-slice';
import halandReducer from './haland-slice';
import moshavereFormReducer from './moshavereForm-slice';
import mbtiReducer from './mbti-slice';
import notificationReducer from './notification-slice';
import ticketReducer from './ticket-slice';
import profileReducer from './profile-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    resume: resumeReducer,
    haland: halandReducer,
    moshavereForm: moshavereFormReducer,
    mbti: mbtiReducer,
    notification: notificationReducer,
    ticket: ticketReducer,
    profile: profileReducer,
  },
});

export default store;
