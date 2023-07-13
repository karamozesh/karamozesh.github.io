import Button from '../UI/Button';
import { Link } from 'react-router-dom';
import Input from '../UI/Input';
import TalentResultBtn from './TalentResultBtn';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import InputLabelProfile from '../UI/InputLabelProfile';
import {
  changeFieldProfile,
  profileActions,
} from '../../store/profile-slice';

import profileImage from '../../asset/images/people-media-profile.svg';
import { useState } from 'react';
import { Progress, Tooltip } from 'antd';

export default function UserInfo() {
  const dispatch = useDispatch();
  const { user_token } = useSelector(
    (state) => state.auth,
  );

  const [imageFile, setImageFile] =
    useState(null);

  const {
    first_name,
    last_name,
    email,
    phone_number,
    image,
    cv,
    talent_result,
  } = useSelector((state) => state.profile);

  const filedChangeHandler = (e, prop) => {
    const value = e.target.value;

    const fieldObj = { prop, value };

    dispatch(
      profileActions.changeField(fieldObj),
    );
  };

  const inputFields = [
    {
      id: 0,
      label: 'نام',
      prop: 'first_name',
      value: first_name,
      onChange: filedChangeHandler,
    },
    {
      id: 1,
      label: 'نام خانوادگی',
      prop: 'last_name',
      value: last_name,
      onChange: filedChangeHandler,
    },
    {
      id: 2,
      label: 'شماره موبایل',
      prop: 'phone_number',
      value: phone_number,
      onChange: filedChangeHandler,
    },
    {
      id: 3,
      label: 'ایمیل',
      prop: 'email',
      value: email,
      onChange: filedChangeHandler,
    },
  ];

  const talentTestsArray = [];

  const cancelWantClickHandler = () =>
    setWantChange(false);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // simple validation

    if (
      first_name.trim().length < 2 ||
      last_name.trim().length < 2 ||
      email.trim().length < 2 ||
      phone_number.trim().length < 2
    )
      return;

    const fieldObj = {
      first_name,
      last_name,
      email,
      phone_number,
    };

    new Promise((resolve) => {
      dispatch(
        changeFieldProfile({
          user_token,
          dataObj: fieldObj,
        }),
      );
      if (resolve) {
        cancelWantClickHandler();
      }
    });
  };

  const imageChangeHandler = (e) => {
    const file = e.target.files[0];

    setImageFile(file);
  };

  return (
    <div className="flex flex-col rounded-md mt-4">
      <h1 className="text-3xl font-normal mt-3">
        پروفایل
      </h1>
      <p className="text-sm mt-8 mb-4">
        در این بخش می‌توانید وضعیت پروفایل خود را
        مشاهده کنید.
      </p>
      <div className="w-[90%] mx-auto">
        <h2 className="mb-2">عکس پروفایل</h2>
        <div className="relative isolate flex items-center w-fit py-8 px-16 rounded-md bg-gray-600/20">
          <img src={profileImage} alt="" />
          <input
            type="file"
            accept="image/*"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={imageChangeHandler}
          />
          <span className="mr-4">
            {imageFile?.name ?? 'بارگذاری تصاویر'}
          </span>
        </div>
        <h2 className="mb-2 mt-8">
          اطلاعات کاربری
        </h2>
        <form
          className="py-8 px-16 rounded-md bg-gray-600/20"
          onSubmit={formSubmitHandler}
        >
          <div className="grid grid-cols-2 gap-x-20 gap-y-5">
            {inputFields.map(
              ({
                id,
                label,
                onChange,
                value,
                prop,
                required,
              }) => (
                <InputLabelProfile
                  label={label}
                  key={id}
                  value={value}
                  onChange={(e) =>
                    onChange(e, prop)
                  }
                  // changeMode
                  required={true}
                />
              ),
            )}
          </div>
          <Button
            type="submit"
            className="mt-8 hover:bg-amber-300 bg-[#FFC359] rounded-md shadow-profile-talent-btn"
          >
            <Link to="/profile">ذخیره</Link>
          </Button>
        </form>
        <h2 className="mt-8 mb-2">
          رزومه و خودشناسی
        </h2>
        <div className="flex flex-col gap-y-9 py-8 px-16 rounded-md bg-gray-600/20">
          <div
            className="flex justify-between items-center py-3 px-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='black' stroke-width='2' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
            }}
          >
            <p>رزومه من</p>
            <Progress
              className="w-[40%] mt-2"
              percent={50}
              style={{ direction: 'ltr' }}
              strokeColor={'#24AD29'}
            />
            <div className="flex gap-x-2">
              <Button
                type="button"
                className="px-0 py-0 shadow-profile-talent-btn rounded-md text-xs bg-white"
              >
                <Link
                  to="/resume-creating-app/base-information"
                  className="inline-block h-full w-full px-4 py-2"
                >
                  اعمال تغییرات
                </Link>
              </Button>
              <Tooltip title="به زودی این قابلیت ایجاد می‌شود">
                <Button
                  type="button"
                  className="px-5 bg-[#24AD29] text-white text-xs rounded-md cursor-not-allowed"
                >
                  دانلود
                </Button>
              </Tooltip>
            </div>
          </div>
          <div
            className="flex justify-between py-3 px-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='black' stroke-width='2' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
            }}
          >
            <p>نتیجه خودشناسی</p>
            <div className="flex gap-x-2">
              {talentTestsArray.length > 0
                ? talentTestsArray.map(
                    (talentTest) => (
                      <TalentResultBtn
                        key={talentTest.id}
                        talent={talentTest}
                      />
                    ),
                  )
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
