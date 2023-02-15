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
