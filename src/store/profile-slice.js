import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';
import {
  API_CHANGE_FIELD_PROFILE,
  API_GET_PROFILE,
  GET_CONFIG,
  PATCH_CONFIG,
} from '../api/configAPI';
import { notificationActions } from './notification-slice';

const SUCCESS_MESSAGE =
  'تغییرات با موفقیت ثبت شد';

const ERROR_MESSAGE =
  'ثبت تغییرات دچار مشکل شده است';

export const getProfileInformation =
  createAsyncThunk(
    'profile/getProfileInformation',
    async ({ user_token }, { dispatch }) => {
      try {
        const response = await axios.get(
          API_GET_PROFILE,
          GET_CONFIG(user_token),
        );

        const userData = await response.data;

        const { first_name, last_name, email } =
          userData.user;

        dispatch(
          profileActions.saveUserInfo({
            first_name,
            last_name,
            email,
            phone_number: userData.phone_number,
          }),
        );
      } catch (error) {}
    },
  );

export const changeFieldProfile =
  createAsyncThunk(
    'profile/changeFieldProfile',
    async (
      { dataObj, user_token },
      { dispatch },
    ) => {
      try {
        const response = axios.patch(
          API_CHANGE_FIELD_PROFILE,
          JSON.stringify(dataObj),
          PATCH_CONFIG(user_token),
        );

        dispatch(
          profileActions.saveUserInfo(dataObj),
        );
        dispatch(
          notificationActions.changeSuccess({
            exist: true,
            message: SUCCESS_MESSAGE,
          }),
        );
      } catch (error) {
        dispatch(
          notificationActions.changeError({
            exist: true,
            message: ERROR_MESSAGE,
          }),
        );
      }
    },
  );

const initialState = {
  first_name: '',
  last_name: '',
  email: '',
  phone_number: '',
  cv: [],
  talent_result: [],
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    saveUserInfo(state, action) {
      const {
        first_name,
        last_name,
        email,
        phone_number,
      } = action.payload;

      state.first_name = first_name;
      state.last_name = last_name;
      state.email = email;
      state.phone_number = phone_number;
    },
    changeField(state, action) {
      const { prop, value } = action.payload;

      state[prop] = value;
    },
  },
});

export const profileActions =
  profileSlice.actions;
export default profileSlice.reducer;
