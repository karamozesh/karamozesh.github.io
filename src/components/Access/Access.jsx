import { useEffect, useState } from 'react';

import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';
import ForgotPassword from './ForgotPassword';

// this need to transfrom into asset folder
import LoginBanner from '../../images/Rectangle 504.png';
import {
  useLocation,
  useNavigate,
} from 'react-router-dom';

const Access = () => {
  const { pathname } = useLocation();
  const isLoginPage =
    pathname.split('/')[2] === 'login';

  const navigate = useNavigate();

  const [status, setStatus] = useState(
    !isLoginPage,
  );
  const [model, setModel] = useState(false);

  useEffect(() => {
    // make animation form
    setStatus(isLoginPage);
  }, []);

  const toggleMode = () => {
    setModel(!model);
  };

  const toggleLink = () => {
    const link = isLoginPage
      ? '/access/register'
      : '/access/login';
    navigate(link);
  };

  return (
    <section className="flex relative flex-row-reverse container w-[80%] mx-auto my-12 border lg:max-w-[44rem] ">
      <div
        className={`w-1/2 hidden lg:flex h-full right-0  overflow-hidden transition-all ease-in-out duration-1000 shadow-lg absolute top-0 ${
          status
            ? '-translate-x-full'
            : '-translate-x-0'
        }`}
      >
        <figure className="h-full border">
          <img
            src={LoginBanner}
            alt=""
            className="hidden md:flex h-full"
          />
        </figure>

        <div
          className={`absolute ${
            status
              ? 'left-full -translate-x-[calc(100%-10px)]'
              : '-left-[15px]'
          } w-[100px] top-4 text-center px-4 py-2 transition-all ease duration-1000 shadow-lg rounded-2xl bg-secondaryColor`}
        >
          <p
            className="cursor-pointer"
            onClick={toggleLink}
          >
            {status ? 'عضویت' : 'ورود'}
          </p>
        </div>
      </div>

      <RegisterComponent />
      <LoginComponent
        toggleModeHandler={toggleMode}
      />
      {model && (
        <ForgotPassword
          toggleModeHandler={toggleMode}
        />
      )}
    </section>
  );
};

export default Access;
