import Button from '../UI/Button';
import { Link } from 'react-router-dom';
import cross from '../../asset/images/akar-icons_cross.png'

export default function ContactUs({ onClose }) {
  const closeHandler = () => {
    onClose();
  };

  const modalClickHandler = (e) => {
    e.stopPropagation();
  };

  const formSubmitHandler = () => {};

  return (
    <div
      className="fixed left-0 top-0 w-screen h-screen bg-black-900/50"
      onClick={closeHandler}
    >
      <div
        className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[75%] rounded-md h-[95%] mx-auto bg-white"
        style={{ direction: 'rtl' }}
        onClick={modalClickHandler}
      >
        <div className="content-center items-center flex flex-row rounded-md  bg-slate-300 h-12">
          <h1 className="px-9 text-md w-[95%] ">تماس با ما</h1>
          <button onClick={onClose} className=' '>
            <img  src={cross} alt="" /></button>
            
            
            
           
            
          
        </div>
        <p className="text-xs font-normal p-3">
          هرگونه نظر، پیشنهاد، انتقاد یا مشکلات
          مشاهده‌شده در سامانه را از طریق این فرم
          با تیم پشتیبانی در میان بگذارید :)
        </p>
        <form
          onSubmit={formSubmitHandler}
          className="mt-2"
        >
          <div className=" w-[60%] grid grid-cols-2 mr-3 ">
            <label
              htmlFor=""
              className="text-sm font-normal"
            >
              نام{' '}
              <span className="text-red-500">
                *
              </span>
            </label>
            <label
              htmlFor=""
              className="text-sm font-normal"
            >
              نام خانوادگی{' '}
              <span className="text-red-500">
                *
              </span>
            </label>
          </div>
          <div className="w-[60%] grid grid-cols-2 mr-3 ">
            <input
              type="text"
              className="bg-stone-200 ml-4 rounded-md  shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)] "
            />
            <input
              type="text"
              className="bg-stone-200 rounded-md h-7 shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)] "
            />
          </div>
          <br />
          <div className="w-[60%] grid grid-cols-1 mr-3 ">
            <label htmlFor="" className="text-sm">
              {' '}
              پست الکترونیک
              <span className="text-red-500">
                *
              </span>
            </label>
          </div>

          <div className="w-[80%] grid grid-cols-1 mr-3 ">
            <input
              type="text"
              placeholder="info@example.com"
              className=" bg-stone-200 rounded-md  h-7 shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)] "
            />
            <br />
          </div>
          <div className="w-[60%] grid grid-cols-1 mr-3">
            <label htmlFor="" className="text-sm">
              پیام{' '}
              <span className="text-red-500">
                *
              </span>
            </label>
          </div>
          <div className="w-[80%] grid grid-cols-1 mr-3 ">
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              className=" bg-stone-200 rounded-md h-24 shadow-[0px_5px_10px_1px_rgba(0,0,0,0.3)]   "
            ></textarea>

            <br />
          </div>
          <div className=" w-4/5 flex justify-end ">
            <Button className="end-0  w-24  rounded-sm ">
              ارسال
              <Link to=""></Link>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
