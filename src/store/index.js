import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice';
import resumeReducer from './resume-slice';
import halandReducer from './haland-slice';
import mbtiReducer from './mbti-slice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        resume: resumeReducer,
        haland: halandReducer,
        mbti: mbtiReducer
    },
});

export default store;