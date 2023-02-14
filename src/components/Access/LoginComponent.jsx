import { useRef } from 'react';
import InputLabel from '../UI/InputLabel';
import { useDispatch } from 'react-redux';
import { loginByEmailPass } from '../../api/authAPI';

const LoginComponent = ({
  toggleModeHandler,
}) => {
  const dispatch = useDispatch();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const loginHandler = () => {
    const email_value = emailRef.current.value;
    const password_value =
      passwordRef.current.value;

    // simple validation
    if (
      email_value.trim().length < 1 ||
      password_value.trim().length < 1
    )
      return;

    dispatch(
      loginByEmailPass(
        email_value,
        password_value,
      ),
    );
  };

  return (
    <div className="shadow-lg lg:w-1/2  lg:flex-col  hidden lg:flex w-full  flex-col text-right ">
      <p className="bg-primaryColor text-white p-5 text-center text-lg font-bold">
        ورود به حساب کاربری
      </p>
      <div className="flex flex-col gap-5 p-6 px-8">
        <InputLabel
          text="پست الکترونیک"
          type="email"
          placeholder="Info@example.com"
          innerRef={emailRef}
        />
        <InputLabel
          text="گذرواژه"
          type="password"
          placeholder="********"
          innerRef={passwordRef}
          autoComplete="off"
        />
        <p
          href=""
          className="font-bold text-blue-600 text-[13px]"
          onClick={toggleModeHandler}
        >
          رمز عبور خود را فراموش کرده اید؟
        </p>

        <div className="flex flex-col gap-3  justify-between">
          <button
            className="bg-secondaryColor p-1 rounded-full text-sm"
            onClick={loginHandler}
          >
            ورود به سایت
          </button>
          <span className="flex">
            <p className=" text-[13px]">
              حساب کاربری ندارید؟
            </p>
            <p
              className="mr-2 text-primaryColor  text-[13px] font-bold cursor-pointer"
              onClick={() => setStatus(false)}
            >
              عضویت در اموزشیار .
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
