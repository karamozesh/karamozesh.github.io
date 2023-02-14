import axios from 'axios';
import {
  API_LOGIN,
  API_REGISTER,
} from './configAPI';

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
