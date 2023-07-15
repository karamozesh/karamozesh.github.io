import { useRef, useState } from 'react';
import InputLabel from '../UI/InputLabel';
import { useDispatch } from 'react-redux';
import { loginByEmailPass } from '../../api/authAPI';
import {
  Navigate,
  useNavigate,
} from 'react-router-dom';
import { loginUser } from '../../store/auth-slice';

const LoginComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState(null);

  const callbackFunction = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    const email_value = emailRef.current.value;
    const password_value =
      passwordRef.current.value;

    // simple validation
    if (
      email_value.trim().length < 5 ||
      password_value.trim().length < 5
    ) {
      setError(
        'ایمیل و پسورد باید حداقل ۵ کاراکتر داشته باشد',
      );
      return;
    } else if (
      !email_value.includes('@') ||
      !email_value.includes('.')
    ) {
      setError('اینکه اصلا ایمیل نیست!');
      return;
    }
    setError(null);

    const data = {
      email: email_value,
      password: password_value,
    };

    dispatch(
      loginUser({ data, cb: callbackFunction }),
    );
  };

  const gotoRegister = () => {
    Navigate('/access/login');
  };

  return (
    <div className="shadow-lg lg:w-1/2  lg:flex-col  hidden lg:flex w-full  flex-col text-right ">
      <p className="bg-primaryColor text-white p-5 text-center text-lg font-bold">
        ورود به حساب کاربری
      </p>
      <form onSubmit={loginHandler}>
        <div className="flex flex-col gap-4 p-6 px-8">
          <InputLabel
            text="پست الکترونیک"
            type="email"
            name="username"
            placeholder="Info@example.com"
            innerRef={emailRef}
            role="username"
          />

          <InputLabel
            text="گذرواژه"
            name="password"
            type="password"
            placeholder="********"
            innerRef={passwordRef}
            autoComplete="off"
            role="password"
          />
          <a
            href=""
            className="font-bold text-primaryColor text-[11px]"
            // onClick={toggleModeHandler}
          >
            رمز عبور خود را فراموش کرده اید؟
          </a>

          <div className="flex flex-col gap-3  justify-between">
            <button
              className="bg-secondaryColor p-1 rounded-full text-sm"
              onClick={loginHandler}
              type="submit"
              role="submitButton"
            >
              ورود به سایت
            </button>
            <span className="flex">
              <p className=" text-[13px]">
                حساب کاربری ندارید؟
              </p>
              <p
                className="mr-2 text-[13px] font-bold cursor-pointer"
                onClick={() => {
                  gotoRegister();
                  setStatus(false);
                }}
              >
                بر روی عضویت بالا کلیک کنید
                {/* عضویت در اموزشیار . */}
              </p>
            </span>
          </div>
          {error && (
            <p className="flex items-center">
              خطا:{' '}
              <span className="text-red-500 text-xs mr-2">
                {error}
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
