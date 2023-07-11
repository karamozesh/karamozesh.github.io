import profilimage from '../../asset/images/set-social-people-media-profile-member_24877-53571 1.png';
import usericon from '../../asset/icon/user-profile_icon.svg';
import dashedrectangle from '../../asset/images/Rectangle 579.png';
import reqresult from '../../asset/images/image 30.png';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';

/* 
shadow-[0px_0px_10px_5px_rgba(0,0,0,0.15)]

*/

const UserInput = () => {
  return <input type="text" />;
};

export default function P1() {
  return (
    <>
      <div
        id="p1"
        className="pb-20 flex flex-col rounded-md mt-5"
      >
        <div>
          <p className="text-lg mr-4 mt-3">
            پروفایل
          </p>
          <p className=" font-normal text-xs mr-6 mt-3">
            در این بخش می‌توانید وضعیت پروفایل خود
            را مشاهده کنید.
          </p>
          <br />
        </div>
        <form action="">
          <div className="mr-12 rounded-md bg-gray-100 w-5/6 ">
            <div className="grid grid-cols-2 pt-4 mt-3 mr-10">
              <label
                htmlFor=""
                className="text-sm font-normal"
              >
                نام خوانوادگی{' '}
                <span className="text-red-500">
                  *
                </span>
              </label>
              <label
                htmlFor=""
                className="text-sm font-normal"
              >
                مدرک تحصیلی
              </label>
            </div>
            <div className="grid grid-cols-2  mr-10">
              <input
                type="text"
                className="bg-stone-200 rounded-md w-2/3"
              />
              <input
                type="text"
                className="bg-stone-200 rounded-md w-2/3 h-9"
              />
            </div>
            <br />
            <div className="grid grid-cols-2  mr-10">
              <label
                htmlFor=""
                className="text-sm"
              >
                {' '}
                شماره موبایل{' '}
                <span className="text-red-500">
                  *
                </span>
              </label>
              <label
                htmlFor=""
                className="text-sm"
              >
                {' '}
                ایمیل
                <span className="text-red-500">
                  *
                </span>
              </label>
            </div>

            <div className="grid grid-cols-2  mr-10">
              <input
                type="text"
                className="bg-stone-200  rounded-md w-2/3"
              />
              <input
                type="text"
                placeholder="info@example.com"
                className=" bg-stone-200 rounded-md w-2/3 h-9"
              />
            </div>
            <br />
            <br />
            <div>
              <img
                src={dashedrectangle}
                className="w-[90%] mr-10"
                alt=""
              />
              <div className="  ">
                <p className=" relative -top-10 mr-10  right-3 inline">
                  رزومه من{' '}
                </p>
                <input
                  type="button"
                  value="دانلود"
                  style={{
                    backgroundColor: '#00C408',
                  }}
                  className="hover:shadow-xl h-7 text-white font-thin relative text-xs  text -top-10 float-left ml-36 w-16 rounded-sm "
                />
                <input
                  type="button"
                  value="اعمال تغییرات"
                  className=" hover:shadow-xl relative -top-10  border-2 border-black rounded-md h-7 float-left font-thin ml-2 text-xs  inline w-28 "
                />
              </div>
            </div>

            <img
              src={dashedrectangle}
              className="w-[90%] mr-10"
              alt=""
            />
            <div className="  ">
              <p className="mr-10 relative -top-10  right-3 ml-10 inline">
                نتیجه خودشناسی
              </p>
              <input
                type="button"
                value="نتیجه تست Mbti"
                className="hover:shadow-xl relative -top-10 h-7  text-xs  inline ml-8  border-2 rounded-md border-black w-36   bg-white"
              />
              <input
                type="button"
                value="نتیجه تست هالند"
                className="hover:shadow-xl relative -top-10 h-7 text-xs border-2 border-black rounded-md inline w-36   bg-white"
              />
            </div>
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
