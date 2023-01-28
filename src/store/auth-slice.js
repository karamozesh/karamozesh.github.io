import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import Cookies from 'universal-cookie';
import { loginByUsernamePass } from '../api/authAPI';

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
  async ({ username, password }, thunkAPI) => {
    const data = await loginByUsernamePass(
      username,
      password,
    );

    return data;
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
      loginHandler.pending,
      (state, action) => {},
    );
    builder.addCase(
      loginHandler.fulfilled,
      (state, action) => {
        console.log(action.payload.token);
        const user_token = action.payload.token;
        state.user_token = user_token;
        state.isLoggedIn = true;
        const nextYear = new Date(
          new Date().setFullYear(
            new Date().getFullYear() + 1,
          ),
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
    );
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
