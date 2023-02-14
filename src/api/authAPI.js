import axios from 'axios';
import {
  API_LOGIN,
  API_REGISTER,
} from './configAPI';
import { authActions } from '../store/auth-slice';

export const loginByEmailPass = (
  email,
  password,
) => {
  return async (dispatch) => {
    await axios
      .post(
        API_LOGIN,
        { email, password },
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then((res) => res.data)
      .then((data) => {
        dispatch(
          authActions.loginHandler(data.token),
        );
      })
      .catch((err) => console.log(err));
  };
};

export const registerByUsernamePass = (
  username,
  phonenumber,
  email,
  password,
  password_confirm,
) => {
  console.log(email);
  return async (dispatch) => {
    axios
      .post(
        API_REGISTER,
        {
          username,
          phonenumber,
          email,
          password,
          password2: password_confirm,
        },
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then((res) => {
        const data = res.data;
        console.log(data);
      })
      .catch((error) => {
        const { status } = error.response;
        let message = '';
        // console.log(status);
        // if (status >= 400 && status < 500)
        //   message = ERROR_LOGIN_MESSAGE;
        // else if (status >= 500)
        //   message = ERROR_500_MESSAGE;
      });
  };
};
