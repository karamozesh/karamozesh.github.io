import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const token_id = '1234_qwe_3435_jkier_hello';

const retrieveStoredToken = () => {
  const storedToken = cookies.get(token_id);
  return {
    token: storedToken,
  };
};

const retrieveStoredRole = () => {
  const storedToken = localStorage.getItem('role');
  return {
    role: storedToken,
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
  isMoshaver: !!initialRole,
};

// export const loginHandler = createAsyncThunk(
//   'login',
//   async ({ username, password }, thunkAPI) => {
//     const data = await loginByUsernamePass(
//       username,
//       password,
//     );

//     return data;
//   },
// );

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutHandler(state) {
      state.isLoggedIn = false;
      state.user_token = null;
      cookies.remove(token_id);
    },
    loginHandler(state, action) {
      // need to check user is moshaver or not
      const data = action.payload;
      const { user_token, role } = data;
      state.user_token = user_token;
      state.isLoggedIn = true;
      // state.isMoshaver = role === 1 ? F
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
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
