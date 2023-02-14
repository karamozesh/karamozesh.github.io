import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import LoginBanner from '/src/images/Rectangle 504.png';
import '/src/index.css';
import React from 'react';
import { registerByUsernamePass } from '../../../api/authAPI';

export default function Register() {
  const [status, setStatus] = useState(false);
  const [model, setModel] = useState(false);
  const toggleMode = () => {
    setModel(!model);
  };
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const usernameRef = useRef(null);
  const phonenumberRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const password_confirmRef = useRef(null);

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
    <>
      <section className="mx-auto border max-w-[44rem] lg:px-0 px-10  container flex relative flex-row-reverse mt-12 mb-12">
        <div
          className={`w-1/2 hidden lg:flex h-full right-0  overflow-hidden transition-all ease-in-out duration-1000 shadow-lg absolute top-0 ${
            status && '-translate-x-full'
          }`}
        >
          <figure className="h-full border">
            <img
              src={LoginBanner}
              alt=""
              className=" hidden md:flex h-full  "
            />
          </figure>

          <div
            className={`bg-[#F5AF2B] transition-all translate-x-full ease-in-out duration-1000 p-4 text-sm font-bold absolute  rounded-l-xl ${
              status && 'translate-x-0'
            }`}
          >
            <p
              className="cursor-pointer"
              onClick={() => setStatus(false)}
            >
              عضویت
            </p>
          </div>

          <div
            className={`bg-[#F5AF2B] p-4 text-sm font-bold absolute  transition-all ease-in-out duration-1000 left-0  align-right translate-x-0  rounded-r-xl ${
              status && '-translate-x-76 -left-14'
            }`}
          >
            <p
              className="cursor-pointer"
              onClick={() => {
                setStatus(true);
              }}
            >
              ورود
            </p>
          </div>
        </div>

        <div className="shadow-lg lg:w-1/2 w-full flex flex-col   text-right h-full ">
          <p className="bg-[#576BF0] text-white p-5 text-center text-lg  font-bold">
            عضویت در کارآموزش
          </p>
          <div className="flex flex-col gap-3 p-5 px-14 ">
            <div className="flex justify-between gap-1 ">
              <div className=" flex flex-col gap-2 w-1/2">
                <label
                  htmlFor=""
                  className="text-bold text-xs"
                >
                  نام کاربری{' '}
                </label>
                <input
                  className="bg-[#ECEBEB]  placeholder-gray-800 rounded-full px-2 p-2 text-[12px] text-right "
                  type="text"
                  placeholder="نام کاربری"
                  ref={usernameRef}
                />{' '}
              </div>
              <div className=" flex flex-col gap-2 w-1/2">
                <label
                  htmlFor=""
                  className="text-bold text-xs"
                >
                  شماره موبایل
                </label>
                <input
                  className="bg-[#ECEBEB] rounded-full  placeholder-gray-800 px-2 p-2 text-[12px] text-right "
                  type="text"
                  placeholder="شماره موبایل"
                  ref={phonenumberRef}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-bold text-xs"
              >
                پست الکترونیک
              </label>
              <input
                className="bg-[#ECEBEB] rounded-full  placeholder-gray-800 text-[12px] px-2 text-left p-2"
                type="text"
                placeholder="
Info@example.com"
                ref={emailRef}
              />
            </div>
            <div className="flex flex-col gap-2 justify-end">
              <label
                htmlFor=""
                className="text-bold text-xs"
              >
                گذرواژه{' '}
              </label>
              <input
                className="bg-[#ECEBEB]  placeholder-gray-800 rounded-full  text-[12px] px-2 text-left p-2"
                type="password"
                placeholder="********"
                ref={passwordRef}
              />
            </div>
            <div className="flex flex-col gap-2 justify-end">
              <label
                htmlFor=""
                className="text-bold text-xs"
              >
                تکرار گذرواژه
              </label>
              <input
                className="bg-[#ECEBEB] rounded-full  p-1 text-sm"
                type="password"
                placeholder="********"
                ref={password_confirmRef}
              />
            </div>
            <div className="flex flex-col gap-3 pt-3">
              <button
                className="bg-[#F5AF2B] p-1 text-sm rounded-full"
                onClick={registerClickHandler}
              >
                <a href="">عضویت</a>
              </button>
              <span className="flex  ">
                <p className="text-[13px]">
                  حساب کاربری دارید؟
                </p>
                <p
                  className="text-[#576BF0] font-bold cursor-pointer text-[13px]"
                  onClick={() => setStatus(true)}
                >
                  ورود به حساب کاربری
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="shadow-lg lg:w-1/2  lg:flex-col  hidden lg:flex w-full  flex-col text-right ">
          <p className="bg-[#576BF0] text-white p-5 text-center text-lg font-bold">
            ورود به حساب کاربری
          </p>
          <div className="flex flex-col gap-5 p-6 px-16">
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-bold text-xs"
              >
                پست الکترونیک
              </label>
              <input
                className="bg-[#ECEBEB]  placeholder-gray-800 rounded-full text-[12px] px-2 text-left p-2"
                type="text"
                placeholder="
Info@example.com"
              />
            </div>
            <div className="flex flex-col gap-2 justify-end">
              <label
                htmlFor=""
                className="text-bold text-xs"
              >
                گذرواژه{' '}
              </label>
              <input
                className="bg-[#ECEBEB]  placeholder-gray-800 rounded-full text-[12px] px-2 text-left p-2"
                type="password"
                placeholder="********"
              />
              <p
                href=""
                className="font-bold text-blue-600 text-[13px]"
                onClick={toggleMode}
              >
                رمز عبور خود را فراموش کرده اید؟
              </p>
            </div>
            <div className="flex flex-col gap-3  justify-between">
              <button className="bg-[#F5AF2B] p-1 rounded-full  text-sm">
                <a href="">ورود به سایت</a>
              </button>
              <span className="flex ">
                <p className=" text-[13px]">
                  حساب کاربری ندارید؟
                </p>
                <p
                  className="text-[#576BF0]  text-[13px] font-bold cursor-pointer"
                  onClick={() => setStatus(false)}
                >
                  عضویت در اموزشیار .
                </p>
              </span>
            </div>
          </div>
        </div>
      </section>
      {model && (
        <section
          className=" fixed top-0 bottom-0 left-0 right-0 
     "
        >
          <div
            className="overlay fixed top-0 bottom-0 left-0 right-0 bg-black-700 opacity-50"
            onClick={toggleMode}
          ></div>

          <div
            className=" w-[27rem] absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl 
          "
          >
            <h1 className="bg-[#576BF0] text-white p-5 text-center rounded-xl text-lg font-bold">
              بازیابی گذرواژه
            </h1>
            <div className="p-10 flex flex-col gap-5 ">
              <input
                type="text"
                className="p-2 rounded-full  placeholder-gray-800 bg-slate-200"
                placeholder="پست الکترونیک "
              />
              <button className="bg-[#F5AF2B] p-2 rounded-full  text-sm">
                درخواست بازیابی گذرواژه
              </button>
              <span className="flex   ">
                <p className="text-[13px]">
                  ثبت نام نکرده اید؟
                </p>
                <p
                  className="text-[#576BF0] font-bold cursor-pointer text-[13px]"
                  onClick={() =>
                    navigate('/access/register')
                  }
                >
                  برای ثبت نام کلیک کنید
                </p>
              </span>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

const registerLoader = () => {
  return null;
};

export { registerLoader };
