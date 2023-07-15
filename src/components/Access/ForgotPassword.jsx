import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { forgetPassword } from '../../store/auth-slice';
import { useRef, useState } from 'react';

const ForgotPassword = ({
  toggleModeHandler,
}) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const emailRef = useRef(null);

  const callbackFunction = () =>
    navigate('/login');

  const emailSendHandler = () => {
    const email_value = emailRef.current.value;
    if (email_value.trim().length < 4) {
      setError('ایمیل خیلی کوتاه است!');
      return;
    } else if (!email_value.includes('@')) {
      setError('این که اصلا ایمیل نیست!');
      return;
    }
    setError(null);
    dispatch(
      forgetPassword({
        email: email_value,
        cb: callbackFunction,
      }),
    );
  };

  return (
    <section className=" fixed top-0 bottom-0 left-0 right-0">
      <div
        className="overlay fixed top-0 bottom-0 left-0 right-0 bg-black-700 opacity-50"
        onClick={toggleModeHandler}
      ></div>

      <div className=" w-[27rem] absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl">
        <h1 className="bg-[#576BF0] text-white p-5 text-center rounded-xl text-lg font-bold">
          بازیابی گذرواژه
        </h1>
        <div className="p-10 flex flex-col gap-5 ">
          <input
            type="text"
            className="p-2 rounded-full  placeholder-gray-800 bg-slate-200"
            placeholder="پست الکترونیک "
            dir='ltr'
            ref={emailRef}
          />
          <button
            className="bg-[#F5AF2B] p-2 rounded-full  text-sm"
            onClick={emailSendHandler}
          >
            درخواست بازیابی گذرواژه
          </button>
          {error && (
            <span className="text-red-500">
              {error}
            </span>
          )}
          <span className="flex">
            <p className="text-[13px] ml-2">
              ثبت نام نکرده اید؟
            </p>
            <p
              className="text-[#576BF0] font-bold cursor-pointer text-[13px]"
              onClick={() =>
                navigate('/register')
              }
            >
              برای ثبت نام کلیک کنید
            </p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
