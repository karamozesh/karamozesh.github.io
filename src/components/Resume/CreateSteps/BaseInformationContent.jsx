import { useEffect, useRef } from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { Select } from 'antd';

import ResumeInput from '../ResumeInput';

import { resumeActions } from '../../../store/resume-slice';
import profileImage from '../../../asset/images/people-media-profile.svg';

const BaseInformationContent = () => {
  const jensiatOptions = [
    {
      value: 'M',
      label: 'مرد',
    },
    {
      value: 'F',
      label: 'زن',
    },
    {
      value: 'U',
      label: 'تمایلی به اعلام ندارم',
    },
  ];

  const vaziatTaaholOptions = [
    {
      value: '2',
      label: 'مجرد',
    },
    {
      value: '1',
      label: 'متاهل',
    },
  ];

  const cityOptions = [
    { value: 'tehran', label: 'تهران' },
    { value: 'esfahan', label: 'اصفهان' },
    { value: 'mashhad', label: 'مشهد' },
    { value: 'shiraz', label: 'شیراز' },
    { value: 'kermanshah', label: 'کرمانشاه' },
    { value: 'ahvaz', label: 'اهواز' },
    { value: 'tabriz', label: 'تبریز' },
  ];

  const nezamVazifeOptions = [
    { value: '3', label: 'مشمول' },
    { value: '2', label: 'معافیت دائم' },
    {
      value: '1',
      label: 'معافیت تحصیلی',
    },
    {
      value: '4',
      label: 'پایان خدمت',
    },
  ];

  const dispatch = useDispatch();

  const { baseInformation } = useSelector(
    (state) => state.resume,
  );

  const {
    nameResume,
    phonenumber,
    firstName,
    lastName,
    generic,
    vaziatTaahol,
    nezamVazife,
    city,
    birthdayDate,
    address,
    image,
  } = baseInformation;

  const nameResumeRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  // const birthdayDateRef = useRef(null);
  const addressRef = useRef(null);

  const nameResumeChangeHandler = (e) => {
    const nameResume_value = e.target.value;
    dispatch(
      resumeActions.changeBaseInformation({
        prop: 'nameResume',
        value: nameResume_value,
      }),
    );
  };

  const phonenumberChangeHandler = (e) => {
    const phonenumber_value = e.target.value;
    dispatch(
      resumeActions.changeBaseInformation({
        prop: 'phonenumber',
        value: phonenumber_value,
      }),
    );
  };

  const firstNameChangeHandler = (e) => {
    const firstName_value = e.target.value;
    dispatch(
      resumeActions.changeBaseInformation({
        prop: 'firstName',
        value: firstName_value,
      }),
    );
  };

  const lastNameChangeHandler = (e) => {
    const lastName_value = e.target.value;
    dispatch(
      resumeActions.changeBaseInformation({
        prop: 'lastName',
        value: lastName_value,
      }),
    );
  };

  const birthdayChangeHandler = (
    date,
    dateString,
  ) => {
    dispatch(
      resumeActions.changeBaseInformation({
        prop: 'birthdayDate',
        value: dateString,
      }),
    );
  };

  const genericChangeHandler = (_, option) => {
    const { value, label } = option;
    dispatch(
      resumeActions.changeBaseInformation({
        prop: 'generic',
        value: { value, label },
      }),
    );
  };

  const vaziatTaaholChangeHandler = (
    _,
    option,
  ) => {
    const { value, label } = option;
    dispatch(
      resumeActions.changeBaseInformation({
        prop: 'vaziatTaahol',
        value: { value, label },
      }),
    );
  };

  const nezamVazifeChangeHandler = (
    _,
    option,
  ) => {
    const { value, label } = option;
    dispatch(
      resumeActions.changeBaseInformation({
        prop: 'nezamVazife',
        value: { value, label },
      }),
    );
  };

  const cityChangeHandler = (_, option) => {
    const { value, label } = option;
    dispatch(
      resumeActions.changeBaseInformation({
        prop: 'city',
        value: { value, label },
      }),
    );
  };

  const addressChangeHandler = (e) => {
    const address_value = e.target.value;
    dispatch(
      resumeActions.changeBaseInformation({
        prop: 'address',
        value: address_value,
      }),
    );
  };

  const imageChangeHandler = (e) => {
    const file = e.target.files[0];

    dispatch(
      resumeActions.changeBaseInformation({
        prop: 'image',
        value: file,
      }),
    );
  };

  useEffect(() => {
    // initial Value Set
    nameResumeRef.current.value = nameResume;
    phoneNumberRef.current.value = phonenumber;
    firstNameRef.current.value = firstName;
    lastNameRef.current.value = lastName;
    addressRef.current.value = address;
  }, []);

  return (
    <div className="resume-step-content">
      <div className="relative isolate flex items-center w-fit h-[120px] rounded-full">
        <img src={profileImage} alt="" />
        <input
          type="file"
          accept="image/*"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={imageChangeHandler}
        />
        <span className="mr-4">
          {image?.name ?? 'بارگذاری تصاویر'}
        </span>
      </div>
      <div className="flex items-center">
        {image?.name && <span>0</span>}
        <div
          className={
            'progress transition-all duration-1000 bg-greenColor rounded-sm mx-1'
          }
          style={{
            width: image?.name ? '100px' : '0',
            height: '4px',
          }}
        ></div>
        {image?.name && (
          <span className="ml-4">100%</span>
        )}
        {image?.name && 'آپلود شد.'}
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-2 gap-28 mb-4">
          <ResumeInput
            label="نام رزومه"
            name="name-resume"
            type="text"
            onChange={nameResumeChangeHandler}
            placeholder="فرانت اند"
            innerRef={nameResumeRef}
          />
          <ResumeInput
            label="شماره همراه"
            name="phone-number"
            type="text"
            onChange={phonenumberChangeHandler}
            placeholder="0912345678"
            innerRef={phoneNumberRef}
          />
        </div>
        <div className="grid grid-cols-2 gap-28 items-end h-full ">
          <ResumeInput
            label="نام"
            name="firstname"
            type="text"
            onChange={firstNameChangeHandler}
            placeholder="احمد"
            innerRef={firstNameRef}
          />
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="mb-2">
                جنسیت
              </label>
              <Select
                labelInValue="جنسیت"
                placement="bottomRight"
                options={jensiatOptions}
                onChange={genericChangeHandler}
                aria-label="generic-select"
                value={
                  generic
                    ? generic.label
                    : undefined
                }
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2">
                وضعیت تاهل
              </label>
              <Select
                dropdownMatchSelectWidth={false}
                onChange={
                  vaziatTaaholChangeHandler
                }
                placement="bottomRight"
                options={vaziatTaaholOptions}
                value={
                  vaziatTaahol
                    ? vaziatTaahol.label
                    : undefined
                }
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-28 mt-4">
          <ResumeInput
            label="نام خانوادگی"
            name="lastname"
            type="text"
            onChange={lastNameChangeHandler}
            placeholder="روشن فکر"
            innerRef={lastNameRef}
          />
          <div className="grid grid-cols-2 gap-4 items-end">
            <div className="flex flex-col">
              <label className="mb-2">شهر</label>
              <Select
                placement="bottomRight"
                onChange={cityChangeHandler}
                options={cityOptions}
                value={
                  city ? city.label : undefined
                }
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2">
                نظام وظیفه
              </label>
              <Select
                dropdownMatchSelectWidth={false}
                placement="bottomRight"
                onChange={
                  nezamVazifeChangeHandler
                }
                options={nezamVazifeOptions}
                value={
                  nezamVazife
                    ? nezamVazife.label
                    : undefined
                }
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-28 items-end mt-4">
          <ResumeInput
            label="تاریخ تولد"
            name="date-birthday"
            type="date"
            onChange={birthdayChangeHandler}
          />

          <ResumeInput
            label="آدرس"
            name="address"
            type="text"
            onChange={addressChangeHandler}
            placeholder="استان تهران، شهر تهران، مهراباد جنوبی، ۱۲ متری شمشیری"
            innerRef={addressRef}
          />
        </div>
      </div>
    </div>
  );
};

export default BaseInformationContent;
