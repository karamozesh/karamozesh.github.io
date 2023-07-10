import {
  Dialog,
  Transition,
} from '@headlessui/react';
import { Fragment, useState } from 'react';
import {
  Link,
  Navigate,
  useNavigate,
} from 'react-router-dom';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigator = useNavigate();

  const closeModal = () => {
    goLogin();
  };

  const goLogin = () => {
    setIsOpen(false);
    setTimeout(() => {
      navigator('/login');
    }, 400);
  };

  const goRegister = () => {
    setIsOpen(false);
    setTimeout(() => {
      navigator('/register');
    }, 400);
  };

  return (
    <Transition
      appear
      show={isOpen}
      as={Fragment}
    >
      <Dialog
        as="div"
        className="relative z-10"
        onClose={closeModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div
          className="fixed inset-0 overflow-y-auto"
          style={{ direction: 'rtl' }}
        >
          <div className="flex min-h-full items-center justify-center p-4 bg-black-900/60">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-primaryColor p-6 align-middle shadow-xl transition-all text-center">
                <p className="mb-5 text-white">
                  برای استفاده از این قابلیت وارد
                  حساب کاربری خودتان شوید{' '}
                </p>
                <button
                  className="inline-block w-[80%] py-1 rounded-[10px] bg-secondaryColor"
                  onClick={goLogin}
                >
                  ورود
                </button>
                <div className="mt-[6px] text-xs font-light">
                  <span className="text-white ml-1">
                    حساب کاربری ندارید؟
                  </span>
                  <button
                    className="text-[#FFEA7B]"
                    onClick={goRegister}
                  >
                    عضویت در آموزشیار .
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
