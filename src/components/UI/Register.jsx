import React from 'react';
import LoginBanner from '/src/images/Rectangle 504.png';
import '/src/index.css';

function Register() {
  return (
    <section className="mx-auto max-w-[73rem]  container flex flex-row-reverse items-center justify-center h-[80vh] mt-12 px-16">
      <div className="w-1/2 hidden lg:flex shadow-lg relative">
        <figure className="w-full h-[80vh] ">
          <img
            src={LoginBanner}
            alt=""
            className=" hidden w-full md:flex  h-[80vh]"
          />
        </figure>
        <div className="bg-[#F5AF2B] p-7 text-xl font-bold absolute left-0 rounded-r-xl">
          <p>ورود</p>
        </div>
      </div>

      <div className="shadow-lg lg:w-1/2 w-full flex flex-col   text-right h-full ">
        <p className="bg-[#576BF0] text-white p-6 text-center text-3xl font-bold">
          عضویت در کارآموزش
        </p>
        <div className="flex flex-col gap-4 p-7 px-16 ">
          <div className="flex justify-between">
            <div className=" flex flex-col gap-2 w-1/2">
              <label
                htmlFor=""
                className="text-bold text-lg"
              >
                نام کاربری{' '}
              </label>
              <input
                className="bg-[#ECEBEB] rounded-full px-3 p-2 text-right "
                type="text"
                placeholder="نام کاربری"
              />{' '}
            </div>
            <div className=" flex flex-col gap-2 w-1/2">
              <label
                htmlFor=""
                className="text-bold text-lg"
              >
                شماره موبایل
              </label>
              <input
                className="bg-[#ECEBEB] rounded-full px-3 p-2  text-right "
                type="text"
                placeholder="شماره موبایل"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <label
              htmlFor=""
              className="text-bold text-lg"
            >
              پست الکترونیک
            </label>
            <input
              className="bg-[#ECEBEB] rounded-full px-3 p-2"
              type="text"
              placeholder="
Info@example.com"
            />
          </div>
          <div className="flex flex-col gap-4 justify-end">
            <label htmlFor="">گذرواژه </label>
            <input
              className="bg-[#ECEBEB] rounded-full px-3 p-2"
              type="password"
              placeholder="********"
            />
          </div>
          <div className="flex flex-col gap-3 pt-3">
            <button className="bg-[#F5AF2B] p-3 rounded-full">
              <a href="">عضویت</a>
            </button>
            <span className="flex text-right justify-end text-sm">
              <a
                href=""
                className="text-[#576BF0] font-bold"
              >
                ورود به حساب کاربری
              </a>
              <p>حساب کاربری دارید؟</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
