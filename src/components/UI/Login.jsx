import React from 'react';
import LoginBanner from '/src/images/Rectangle 504.png';
import '/src/index.css';
function Login() {
  return (
    <section className="mx-auto max-w-[73rem]  container flex items-center justify-center h-[80vh] mt-12 px-16">
      <div className="w-1/2 hidden lg:flex shadow-lg relative">
        <figure className="w-full h-[80vh] ">
          <img
            src={LoginBanner}
            alt=""
            className=" hidden w-full md:flex  h-[80vh]"
          />
        </figure>
        <div className="bg-[#F5AF2B] p-5 text-lg font-bold absolute right-0 rounded-l-xl">
          <p>عضویت</p>
        </div>
      </div>

      <div className="shadow-lg lg:w-1/2 w-full flex flex-col   text-right h-full ">
        <p className="bg-[#576BF0] text-white p-6 text-center text-3xl font-bold">
          ورود به حساب کاربری
        </p>
        <div className="flex flex-col gap-8 p-7 px-16">
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
            <a
              href=""
              className="font-bold text-blue-600"
            >
              رمز عبور خود را فراموش کرده اید؟
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <button className="bg-[#F5AF2B] p-3 rounded-full">
              <a href="">ورود به سایت</a>
            </button>
            <span className="flex text-right justify-end">
              <a
                href=""
                className="text-[#576BF0] font-bold"
              >
                عضویت در کارآموزش .
              </a>
              <p>حساب کاربری ندارید؟</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
