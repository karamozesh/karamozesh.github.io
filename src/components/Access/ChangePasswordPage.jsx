import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  changePassword,
  forgetPassword,
} from '../../store/auth-slice';
import { useRef, useState } from 'react';
import InputLabelProfile from '../UI/InputLabelProfile';

const ChangePasswordPage = ({
  toggleModeHandler,
}) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { email } = useSelector(
    (state) => state.auth,
  );

  const dispatch = useDispatch();

  const emailRef = useRef(null);
  const password1Ref = useRef(null);
  const password2Ref = useRef(null);

  const callbackFunction = () =>
    navigate('/login');

  const formSubmitHanlder = (e) => {
    e.preventDefault();
    const password1 = password1Ref.current.value;
    const password2 = password2Ref.current.value;
    if (password1.trim() !== password2.trim()) {
      setError('گذرواژه با تکرارش یکی نیست');
      return;
    } else if (
      password1.trim().length < 1 ||
      password2.trim().length < 1
    ) {
      setError('مقادیر نمی‌توانند خالی باشند!');
      return;
    }
    setError(null);
    dispatch(
      changePassword({
        email,
        password: password1,
        password2,
        cb: callbackFunction,
      }),
    );
  };


  return (
    <section className="fixed top-0 bottom-0 left-0 right-0">
      <div
        className="overlay fixed top-0 bottom-0 left-0 right-0 bg-black-700 opacity-50"
        onClick={toggleModeHandler}
      ></div>

      <form
        onSubmit={formSubmitHanlder}
        className=" w-[27rem] absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl"
      >
        <h1 className="bg-[#576BF0] text-white p-5 text-center rounded-t-xl text-lg font-bold">
          بازیابی گذرواژه
        </h1>
        <div className="flex flex-col w-[80%] mx-auto gap-y-5 my-4">
          <InputLabelProfile
            label="پسورد جدید"
            innerRef={password1Ref}
            type="password"
          />
          <InputLabelProfile
            label="تکرار پسورد"
            innerRef={password2Ref}
            type="password"
          />
        </div>
        {error && (
          <span className="inline-block w-[80%] mr-[10%] text-red-500 my-4">
            {error}
          </span>
        )}
        <div className="flex justify-center">
          <button
            className="bg-secondaryColor py-2 px-4 text-base rounded-md mb-4"
            onClick={formSubmitHanlder}
          >
            درخواست بازیابی
          </button>
        </div>
      </form>
    </section>
  );
};

export default ChangePasswordPage;
