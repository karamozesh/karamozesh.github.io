import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import Cookies from 'universal-cookie';
import {
  API_LOGIN,
  API_REGISTER,
} from '../api/configAPI';
import { notificationActions } from './notification-slice';
import axios from 'axios';

const cookies = new Cookies();
const token_id = '1234_qwe_3435_jkier_hello';

const retrieveStoredToken = () => {
  const storedToken = cookies.get(token_id);
  return {
    token: storedToken,
  };
};

const retrieveStoredRole = () => {
  const storedRole = localStorage.getItem('role');
  return {
    role: storedRole,
  };
};

const tokenData = retrieveStoredToken();
const roleData = retrieveStoredRole();

let initialToken, initialRole;

if (tokenData.token) {
  initialToken = tokenData.token;
}

if (roleData.role) {
  initialRole = roleData.role;
}

let initialState = {
  user_token: initialToken,
  isLoggedIn: !!initialToken,
  isMoshaver: initialRole
    ? initialRole === 2
    : null,
};

export const registerUser = createAsyncThunk(
  'auth/login',
  async ({ data, cb }, { dispatch }) => {
    try {
      const response = await axios.post(
        API_REGISTER,
        data,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      dispatch(
        notificationActions.changeSuccess({
          exist: true,
          message:
            'ساختن اکانت با موافقیت انجام شد دوست من.',
        }),
      );
      cb();

      return response.data;
    } catch (error) {
      dispatch(
        notificationActions.changeError({
          exist: true,
          message:
            'ساختن اکانت با مشکل مواجه شد دوست من.',
        }),
      );
      throw Error('error');
    }
  },
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ data, cb }, { dispatch }) => {
    try {
      const response = await axios.post(
        API_LOGIN,
        JSON.stringify(data),
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      const result = await response.data;

      dispatch(authActions.loginHandler(result));

      dispatch(
        notificationActions.changeSuccess({
          exist: true,
          message: 'خوش آمدی دوست من.',
        }),
      );
      cb();
    } catch (error) {
      dispatch(
        notificationActions.changeError({
          exist: true,
          message:
            'ایمیل با پسورد سازگار نیست دوست من.',
        }),
      );
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutHandler(state) {
      state.isLoggedIn = false;
      state.user_token = null;
      cookies.remove(token_id);
      localStorage.removeItem('role');
    },
    loginHandler(state, action) {
      // need to check user is moshaver or not
      const data = action.payload;
      const { token: user_token, role } = data;
      state.user_token = user_token;
      state.isLoggedIn = true;
      state.isMoshaver = role === 2;
      const nextYear = new Date(
        new Date().setFullYear(
          new Date().getFullYear() + 1,
        ),
      );
      localStorage.setItem(
        'role',
        role.toString(),
      );
      cookies.set(
        token_id,
        user_token.toString(),
        {
          path: '/',
          expires: nextYear,
        },
      );
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
