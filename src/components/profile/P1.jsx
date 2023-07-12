import profilimage from '../../asset/images/set-social-people-media-profile-member_24877-53571 1.png';
import usericon from '../../asset/icon/user-profile_icon.svg';
import dashedrectangle from '../../asset/images/Rectangle 579.png';
import reqresult from '../../asset/images/image 30.png';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';
import Input from '../UI/Input';

/* 
shadow-[0px_0px_10px_5px_rgba(0,0,0,0.15)]

*/

const UserInput = () => {
  return <input type="text" />;
};

export default function P1() {
  const formSubmitHandler = () => {};

  return (
    <>
      <div className="flex flex-col rounded-md mt-4">
        <h1 className="text-3xl font-normal mt-3">
          پروفایل
        </h1>
        <p className="text-sm mt-8 mb-4">
          در این بخش می‌توانید وضعیت پروفایل خود
          را مشاهده کنید.
        </p>
        <form
          className="w-[90%] mx-auto pt-8 px-16 rounded-md bg-gray-600/20"
          onSubmit={formSubmitHandler}
        >
          <div className="grid grid-cols-2 gap-32">
            <div className="flex flex-col">
              <label>
                نام خوانوادگی{' '}
                <span className="text-red-500">
                  *
                </span>
              </label>
              <Input
                type="text"
                className="rounded-[10px] mt-2 text-sm"
              />
            </div>
            <div className="flex flex-col">
              <label>مدرک تحصیلی</label>
              <Input
                type="text"
                className="rounded-[10px] mt-2 text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-32 mt-5">
            <div className="flex flex-col">
              <label>
                شماره موبایل{' '}
                <span className="text-red-500">
                  *
                </span>
              </label>
              <Input
                type="text"
                className="rounded-[10px] mt-2 text-sm"
              />
            </div>
            <div className="flex flex-col">
              <label>
                ایمیل
                <span className="text-red-500">
                  *
                </span>
              </label>
              <Input
                type="text"
                className="rounded-[10px] mt-2 text-sm"
              />
            </div>
          </div>

          <div>
            <img
              src={dashedrectangle}
              className="w-[90%] mr-10"
              alt=""
            />
            <div className="flex justify-between">
              <p>رزومه من</p>
              <div>
                <Button
                  type="button"
                  className="shadow-profile bg-[#00C408] text-white text-xs rounded-sm "
                >
                  دانلود
                </Button>
                <Button
                  type="button"
                  className="shadow-profile rounded-md  text-xs bg-white"
                >
                  اعمال تغییرات
                </Button>
              </div>
            </div>
          </div>

          <img
            src={dashedrectangle}
            className="w-[90%] mr-10"
            alt=""
          />
          <div>
            <p>نتیجه خودشناسی</p>
            <Button
              type="button"
              className="flex justify-center items-center hover:shadow-xl  text-xs ml-8  border-2 rounded-md border-black bg-white"
            >
              نتیجه تست Mbti
            </Button>
            <Button
              type="button"
              className="shadow-profile text-xs border-2 border-black rounded-md bg-white"
            >
              نتیجه تست هالند
            </Button>
          </div>
          <div className=" w-[90%] mr-7 bg-gray-500 h-0.5 rounded-xl"></div>
          <br />
          <div className="w-5/6 mr-12">
            <Button className=" hover:bg-white inline font-light rounded-md w-[48%] px-8 shadow-lg bg-slate-100">
              <Link to="/profile">انصراف</Link>
            </Button>
            <Button className="hover:bg-amber-300 inline font-light mr-6 rounded-md w-[48%] px-8 shadow-lg">
              <Link to="/profile">
                ثبت تغییرات
              </Link>
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
