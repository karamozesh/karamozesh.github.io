import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  authActions,
  forgetPassword,
} from '../../store/auth-slice';
import { useRef, useState } from 'react';
import Button from '../UI/Button';

import './style.css';
import { notificationActions } from '../../store/notification-slice';

const ForgotPassword = ({
  toggleModeHandler,
}) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const emailRef = useRef(null);
  const { number } = useSelector(
    (state) => state.auth,
  );

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);

  const refArray = [
    ref1,
    ref2,
    ref3,
    ref4,
    ref5,
    ref6,
  ];

  const callbackFunction = () =>
    navigate('/access/reset-password');

  const emailSendHandler = () => {
    const email_value = emailRef.current.value;
    if (email_value.trim().length < 4) {
      setError('ایمیل خیلی کوتاه است!');
      return;
    } else if (
      !email_value.includes('@') ||
      !email_value.includes('.')
    ) {
      setError('این که اصلا ایمیل نیست!');
      return;
    }
    setError(null);
    dispatch(authActions.setEmail(email_value));
    dispatch(
      forgetPassword({
        email: email_value,
        // cb: callbackFunction,
      }),
    );
  };

  const checkNumber = () => {
    const number1 = ref1.current.value;
    const number2 = ref2.current.value;
    const number3 = ref3.current.value;
    const number4 = ref4.current.value;
    const number5 = ref5.current.value;
    const number6 = ref6.current.value;

    let numberInput =
      number1 +
      '' +
      number2 +
      number3 +
      number4 +
      number5 +
      number6;

    numberInput = numberInput.split('').reverse().join('');


    if (numberInput === number.join('')) {
      callbackFunction();
    } else {
      dispatch(
        notificationActions.changeError({
          message: 'عدد وارد شده تطابق نداره',
          exist: true,
        }),
      );
    }
  };

  return (
    <section className="fixed top-0 bottom-0 left-0 right-0">
      <div
        className="overlay fixed top-0 bottom-0 left-0 right-0 bg-black-700 opacity-50"
        onClick={toggleModeHandler}
      ></div>

      <div className=" w-[27rem] absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl">
        <h1 className="bg-[#576BF0] text-white p-5 text-center rounded-t-xl text-lg font-bold">
          بازیابی گذرواژه
        </h1>
        {number ? (
          <div className="w-[80%] mx-auto mb-8">
            <p className="my-4">
              عدد محرمانه برای شما ایمیل شد
            </p>
            <div className="flex justify-between">
              {number.map((num, index) => (
                <input
                  className="flex justify-center items-center w-[20%] text-center py-1 border-2 border-primaryColor mx-2 rounded-md text-black-900 appearance-none"
                  type="number"
                  ref={refArray[index]}
                />
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <Button onClick={checkNumber}>
                تایید
              </Button>
            </div>
          </div>
        ) : (
          <div className="p-10 flex flex-col gap-5 ">
            <input
              type="text"
              className="p-2 rounded-full  placeholder-gray-800 bg-slate-200"
              placeholder="پست الکترونیک"
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
        )}
      </div>
    </section>
  );
};

export default ForgotPassword;
