import Button from '../UI/Button';
import { Link } from 'react-router-dom';
import cross from '../../asset/images/akar-icons_cross.png';
import InputLabelProfile from '../UI/InputLabelProfile';

export default function ContactUs({ onClose }) {
  const closeHandler = () => {
    onClose();
  };

  const modalClickHandler = (e) => {
    e.stopPropagation();
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    onClose()
  };

  return (
    <div
      className="fixed left-0 top-0 w-screen h-screen bg-black-900/50 z-40"
      onClick={closeHandler}
    >
      <div
        className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[75%] rounded-md h-[95%] mx-auto bg-white overflow-hidden"
        style={{ direction: 'rtl' }}
        onClick={modalClickHandler}
      >
        <h2 className="bg-[#C5D0DA] px-9 py-4">
          تماس با ما
        </h2>
        <form
          className="w-[90%] mx-auto mt-4"
          onSubmit={formSubmitHandler}
        >
          <div className="grid grid-cols-2 gap-x-10 gap-y-5">
            <InputLabelProfile
              label="نام"
              required
            />
            <InputLabelProfile
              label="نام خانوادگی"
              required
            />
            <InputLabelProfile
              label="پست الکترونیک"
              required
            />
          </div>
          <div className="mt-4">
            <InputLabelProfile
              label="پیام"
              required
              isTextArea
            />
          </div>
          <div className="flex justify-end mt-4">
            <button className="rounded-lg text-base bg-secondaryColor px-8 py-2">
              ارسال
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
