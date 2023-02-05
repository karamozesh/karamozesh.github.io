import { useState } from 'react';
import LoginBanner from '/src/images/Rectangle 504.png';
import '/src/index.css';

function Register() {
  const [status, setStatus] = useState(false);

  return (
    <section className="mx-auto border max-w-[44rem] lg:px-0 px-10  container flex relative flex-row-reverse  mt-12 ">
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
            onClick={() => setStatus(true)}
          >
            ورود
          </p>
        </div>
      </div>

      <div className="shadow-lg lg:w-1/2 w-full flex flex-col   text-right h-full ">
        <p className="bg-[#576BF0] text-white p-5 text-center  font-bold">
          عضویت در کارآموزش
        </p>
        <div className="flex flex-col gap-3 p-5 px-14 ">
          <div className="flex justify-between gap-1 ">
            <div className=" flex flex-col gap-2 w-1/2">
              <label
                htmlFor=""
                className="text-bold text-sm"
              >
                نام کاربری{' '}
              </label>
              <input
                className="bg-[#ECEBEB] rounded-full px-2 p-2 text-[12px] text-right "
                type="text"
                placeholder="نام کاربری"
              />{' '}
            </div>
            <div className=" flex flex-col gap-2 w-1/2">
              <label
                htmlFor=""
                className="text-bold text-sm"
              >
                شماره موبایل
              </label>
              <input
                className="bg-[#ECEBEB] rounded-full px-2 p-2 text-[12px] text-right "
                type="text"
                placeholder="شماره موبایل"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor=""
              className="text-bold text-sm"
            >
              پست الکترونیک
            </label>
            <input
              className="bg-[#ECEBEB] rounded-full text-[12px] px-2 p-2 text-sm"
              type="text"
              placeholder="
Info@example.com"
            />
          </div>
          <div className="flex flex-col gap-2 justify-end">
            <label
              htmlFor=""
              className="text-bold text-sm"
            >
              گذرواژه{' '}
            </label>
            <input
              className="bg-[#ECEBEB] rounded-full px-2 p-2 text-sm"
              type="password"
              placeholder="********"
            />
          </div>
          <div className="flex flex-col gap-3 pt-3">
            <button className="bg-[#F5AF2B] p-2 text-sm rounded-full">
              <a href="">عضویت</a>
            </button>
            <span className="flex text-right justify-end text-[13px]">
              <p>حساب کاربری دارید؟</p>
              <p
                className="text-[#576BF0] font-bold cursor-pointer"
                onClick={() => setStatus(true)}
              >
                ورود به حساب کاربری
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="shadow-lg lg:w-1/2  lg:flex-col  hidden lg:flex w-full  flex-col text-right ">
        <p className="bg-[#576BF0] text-white p-5 text-center  font-bold">
          ورود به حساب کاربری
        </p>
        <div className="flex flex-col gap-5 p-6 px-16">
          <div className="flex flex-col gap-2">
            <label
              htmlFor=""
              className="text-bold text-sm"
            >
              پست الکترونیک
            </label>
            <input
              className="bg-[#ECEBEB] rounded-full px-2 p-2 text-sm"
              type="text"
              placeholder="
Info@example.com"
            />
          </div>
          <div className="flex flex-col gap-2 justify-end">
            <label
              htmlFor=""
              className="text-bold text-sm"
            >
              گذرواژه{' '}
            </label>
            <input
              className="bg-[#ECEBEB] rounded-full  px-2 p-2 text-sm"
              type="password"
              placeholder="********"
            />
            <a
              href=""
              className="font-bold text-blue-600 text-[13px]"
            >
              رمز عبور خود را فراموش کرده اید؟
            </a>
          </div>
          <div className="flex flex-col gap-3  justify-between">
            <button className="bg-[#F5AF2B] p-2 rounded-full  text-sm">
              <a href="">ورود به سایت</a>
            </button>
            <span className="flex text-right justify-end text-[13px]">
              <p>حساب کاربری ندارید؟</p>
              <p
                className="text-[#576BF0] font-bold cursor-pointer"
                onClick={() => setStatus(false)}
              >
                عضویت در اموزشیار .
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
