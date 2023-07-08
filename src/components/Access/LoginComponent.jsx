import { useRef, useState } from 'react';
import InputLabel from '../UI/InputLabel';
import { useDispatch } from 'react-redux';
import { loginByEmailPass } from '../../api/authAPI';
import { Navigate } from 'react-router-dom';

const LoginComponent = ({onSubmit}) => {
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

  const gotoRegister = () => {
    Navigate('/access/login');
  };

 


  return (
    <div className="shadow-lg lg:w-1/2  lg:flex-col  hidden lg:flex w-full  flex-col text-right ">
      <p className="bg-primaryColor text-white p-5 text-center text-lg font-bold">
        ورود به حساب کاربری
      </p>
      <form onSubmit={onSubmit}>
       <div className="flex flex-col gap-5 p-6 px-8">
       
        <InputLabel
          text="پست الکترونیک"
          type="email"
          name="username"
          placeholder="Info@example.com"
          innerRef={emailRef}
          
          role='username'
         
        />
        
        
        <InputLabel
          text="گذرواژه"
          name="password"
          type="password"
          placeholder="********"
          innerRef={passwordRef}
          autoComplete="off"
          role='password'
         
        />
        {/* <p
          href=""
          className="font-bold text-gray-600 text-[13px] cursor-not-allowed"
          // onClick={toggleModeHandler}
        >
          رمز عبور خود را فراموش کرده اید؟
        </p> */}

        <div className="flex flex-col gap-3  justify-between">
          <button
            className="bg-secondaryColor p-1 rounded-full text-sm"
            onClick={loginHandler}
            type='submit'
            role='submitButton'
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
      </div>
      </form>
    </div>
  );
};

export default LoginComponent;
// export const validateInput = (str="")=>str.includes("@")
 