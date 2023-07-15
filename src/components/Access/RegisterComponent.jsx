import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import InputLabel from '../UI/InputLabel';
import {
  Link,
  useNavigate,
} from 'react-router-dom';
import { registerUser } from '../../store/auth-slice';

const RegisterComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const usernameRef = useRef(null);
  const phonenumberRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const password_confirmRef = useRef(null);

  const registerClickHandler = (e) => {
    e.preventDefault();
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

    const data = {
      username: username_value,
      phonenumber: phonenumber_value,
      email: email_value,
      password: password_value,
      password2: passwordConfirm_value,
    };

    dispatch(
      registerUser({
        data,
        cb: () => navigate('/login'),
      }),
    );
  };

  return (
    <div className="shadow-lg lg:w-1/2 w-full flex flex-col h-full ">
      <p className="bg-primaryColor text-white p-5 text-center text-lg  font-bold">
        عضویت در آموزشیار
      </p>
      <form
        action=""
        onSubmit={registerClickHandler}
      >
        <div className="flex flex-col gap-3 p-5 px-8">
          <div className="grid grid-cols-2 gap-2">
            <InputLabel
              name="username"
              text="نام کاربری"
              type="text"
              placeholder="mohammad021"
              innerRef={usernameRef}
              role="username"
            />
            {/* its need to change into type="tel" and add pattern */}
            <InputLabel
              text="شماره موبایل"
              type="text"
              placeholder="09123456789"
              innerRef={phonenumberRef}
              role="phoneNumber"
            />
          </div>
          <div className="flex flex-col gap-2">
            <InputLabel
              text="پست الکترونیک"
              type="email"
              placeholder="example@gmail.com"
              innerRef={emailRef}
              role="email"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <InputLabel
              text="گذرواژه"
              type="password"
              placeholder="*******"
              innerRef={passwordRef}
              autoComplete="false"
              role="password"
            />
            <InputLabel
              text="تکرار گذرواژه"
              type="password"
              placeholder="*******"
              innerRef={password_confirmRef}
              role="confirmPassword"
            />
          </div>
          <div className="flex flex-col gap-3 pt-3">
            <button
              className="bg-secondaryColor p-1 text-sm rounded-full"
              onClick={registerClickHandler}
              role="submitButton"
            >
              عضویت
            </button>
            <span className="flex items-center">
              <p className="text-[13px]">
                حساب کاربری دارید؟
              </p>
              <Link
                className="mr-2 text-primaryColor font-bold cursor-pointer text-[13px]"
                to="/login"
              >
                ورود به حساب کاربری
              </Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterComponent;
