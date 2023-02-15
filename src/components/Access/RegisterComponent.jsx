import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import InputLabel from '../UI/InputLabel';
import {
  Link,
  useNavigate,
} from 'react-router-dom';
import axios from 'axios';
import { API_REGISTER } from '../../api/configAPI';

const RegisterComponent = ({}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const usernameRef = useRef(null);
  const phonenumberRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const password_confirmRef = useRef(null);
  const registerByUsernamePass = (
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
          if (data) {
            navigate('/access/login');
          }
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

  const registerClickHandler = () => {
    const username_value =
      usernameRef.current.value;
    const phonenumber_value =
      phonenumberRef.current.value;
    const email_value = emailRef.current.value;
    const password_value =
      passwordRef.current.value;
    const passwordConfirm_value =
      password_confirmRef.current.value;

    // simple validation
    if (
      username_value.length < 0 ||
      phonenumber_value.length < 0 ||
      email_value.length < 0 ||
      password_value.length < 0 ||
      passwordConfirm_value.length < 0
    )
      return;
    if (password_value !== passwordConfirm_value)
      return;

    dispatch(
      registerByUsernamePass(
        username_value,
        phonenumber_value,
        email_value,
        password_value,
        passwordConfirm_value,
      ),
    );
  };

  return (
    <div className="shadow-lg lg:w-1/2 w-full flex flex-col h-full ">
      <p className="bg-primaryColor text-white p-5 text-center text-lg  font-bold">
        عضویت در کارآموزش
      </p>
      <div className="flex flex-col gap-3 p-5 px-8">
        <div className="grid grid-cols-2 gap-2">
          <InputLabel
            text="نام کاربری"
            type="text"
            placeholder="mohammad021"
            innerRef={usernameRef}
          />
          {/* its need to change into type="tel" and add pattern */}
          <InputLabel
            text="شماره موبایل"
            type="text"
            placeholder="09123456789"
            innerRef={phonenumberRef}
          />
        </div>
        <div className="flex flex-col gap-2">
          <InputLabel
            text="پست الکترونیک"
            type="email"
            placeholder="example@gmail.com"
            innerRef={emailRef}
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <InputLabel
            text="گذرواژه"
            type="password"
            placeholder="*******"
            innerRef={passwordRef}
            autoComplete="false"
          />
          <InputLabel
            text="تکرار گذرواژه"
            type="password"
            placeholder="*******"
            innerRef={password_confirmRef}
          />
        </div>
        <div className="flex flex-col gap-3 pt-3">
          <button
            className="bg-secondaryColor p-1 text-sm rounded-full"
            onClick={registerClickHandler}
          >
            عضویت
          </button>
          <span className="flex items-center">
            <p className="text-[13px]">
              حساب کاربری دارید؟
            </p>

            <p className="text-[13px]">
              بر روی لینک بالا کلیک کنید
            </p>
            {/* <Link
              className="mr-2 text-primaryColor font-bold cursor-pointer text-[13px]"
              onClick={() => setStatus(true)}
              to="/access/login"
            >
              ورود به حساب کاربری
            </Link> */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
