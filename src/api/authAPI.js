import axios from 'axios';
import { API_LOGIN } from './configAPI';

export const loginByUsernamePass = async (
  username,
  password,
) => {
  const response = await axios.post(
    API_LOGIN,
    { username, password },
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const data = await response.data;

  return data;
};
