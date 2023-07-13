import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';
import {
  API_CHANGE_FIELD_PROFILE,
  API_CHANGE_IMAGE_PROFILE,
  // API_GET_CV_ID,
  API_GET_PROFILE,
  API_GET_USER_ID,
  API_TALENT_TESTS,
  GET_CONFIG,
  PATCH_CONFIG,
  POST_CONFIG,
} from '../api/configAPI';
import { notificationActions } from './notification-slice';

const SUCCESS_MESSAGE =
  'تغییرات با موفقیت ثبت شد';

const ERROR_MESSAGE =
  'ثبت تغییرات دچار مشکل شده است';

export const getTalents = createAsyncThunk(
  'profile/getTalents',
  async ({ user_token }, { dispatch }) => {
    try {
      const response = await axios.get(
        API_TALENT_TESTS,
        GET_CONFIG(user_token),
      );

      const data = await response.data;

      dispatch(
        profileActions.changeField({
          prop: 'talent_result',
          value: data,
        }),
      );
    } catch (error) {}
  },
);

// export const getCVId = createAsyncThunk(
//   'profile/getCVId',
//   async ({ user_token }, { dispatch }) => {
//     try {
//       const response = await axios.get(
//         API_GET_CV_ID,
//         // GET_CONFIG(user_token),
//         {
//           headers: {
//             Authorization: user_token,
//           },
//         },
//       );
//       const data = await response.data;

//       console.log(data);
//       // dispatch(
//       //   profileActions.changeField({
//       //     prop: 'user_id',
//       //     value: user_id,
//       //   }),
//       // );
//     } catch (error) {}
//   },
// );

export const getUserId = createAsyncThunk(
  'profile/getUserId',
  async ({ user_token }, { dispatch }) => {
    try {
      const response = await axios.get(
        API_GET_USER_ID,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${user_token}`,
          },
        },
      );
      const { user_id } = await response.data;
      dispatch(
        profileActions.changeField({
          prop: 'user_id',
          value: user_id,
        }),
      );
    } catch (error) {}
  },
);

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

export const changeUserImageProfile =
  createAsyncThunk(
    'profile/changeUserImageProfile',
    async (
      { user_token, imageFile },
      { dispatch },
    ) => {
      try {
        const response = await axios.post(
          API_CHANGE_IMAGE_PROFILE,
          POST_CONFIG(user_token),
        );

        const linkImage = await response.data;

        dispatch(
          profileActions.changeField({
            prop: 'image',
            value: linkImage,
          }),
        );
        dispatch(
          notificationActions.changeSuccess({
            exist: true,
            message:
              'عکس پروفایل با موفقیت تغییر کرد',
          }),
        );
      } catch (error) {
        dispatch(
          notificationActions.changeError({
            exist: true,
            message:
              'تغییر عکس پروفایل با شکست مواجه شد',
          }),
        );
      }
    },
  );

const initialState = {
  resume: null,
  user_id: '',
  first_name: '',
  last_name: '',
  email: '',
  phone_number: '',
  cv: [],
  talent_result: [],
  image: null,
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
    saveResumeArray(state, action) {
      state.resume = action.payload;
    },
  },
});

export const profileActions =
  profileSlice.actions;
export default profileSlice.reducer;
