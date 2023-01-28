import axios from 'axios';
import { API_LOGIN } from './configAPI';

export const loginByUsernamePass = async (
  username,
  password,
) => {
  axios
    .post(
      API_LOGIN,
      { username, password },
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    .then((res) => res)
    .catch((err) => err);
};
