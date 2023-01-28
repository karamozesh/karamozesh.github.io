import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import Cookies from 'universal-cookie';
import { loginByUsernamePass } from '../api/authAPI';
import { API_LOGIN } from '../api/configAPI';

const cookies = new Cookies();
const token_id = '1234_qwe_3435_jkier_hello';

const retrieveStoredToken = () => {
  const storedToken = cookies.get(token_id);
  return {
    token: storedToken,
  };
};

const tokenData = retrieveStoredToken();

let initialToken;

if (tokenData.token) {
  initialToken = tokenData.token;
}

let initialState = {
  user_token: initialToken,
  isLoggedIn: !!initialToken,
};

export const loginHandler = createAsyncThunk(
  'login',
  async (username, password, thunkAPI) => {
    const response = await loginByUsernamePass(
      username,
      password,
    );
    return response.data;
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
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      loginHandler.fulfilled,
      (state, action) => {
        state.user_token = action.payload;
        state.isLoggedIn = true;
        const nextYear = new Date(
          new Date().setFullYear(
            new Date().getFullYear() + 1,
          ),
        );
        cookies.set(
          token_id,
          action.payload.toString(),
          {
            path: '/',
            expires: nextYear,
          },
        );
      },
    );
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
