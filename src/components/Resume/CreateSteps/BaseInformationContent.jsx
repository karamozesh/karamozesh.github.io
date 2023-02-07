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
      value: 'men',
      label: 'مرد',
    },
    {
      value: 'women',
      label: 'زن',
    },
    {
      value: 'else',
      label: 'سایر',
    },
  ];

  const vaziatTaaholOptions = [
    {
      value: 'single',
      label: 'مجرد',
    },
    {
      value: 'married',
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
    { value: 'included', label: 'مشمول' },
    { value: 'exempt', label: 'معافیت دائم' },
    {
      value: 'exempt-education',
      label: 'معافیت تحصیلی',
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
        prop: 'phoneNumber',
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
      <div className="flex items-center">
        <img
          src={profileImage}
          alt=""
          className="ml-4"
        />
        {/* <input type="file" /> */}
        بارگذاری تصاویر
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
            <Select
              defaultValue="جنسیت"
              placement="bottomRight"
              options={jensiatOptions}
              onChange={genericChangeHandler}
              value={
                generic
                  ? generic.label
                  : undefined
              }
            />
            <Select
              defaultValue="وضعیت تاهل"
              dropdownMatchSelectWidth={false}
              onChange={vaziatTaaholChangeHandler}
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
            <Select
              defaultValue="شهر"
              placement="bottomRight"
              onChange={cityChangeHandler}
              options={cityOptions}
              value={
                city ? city.label : undefined
              }
            />
            <Select
              defaultValue="نظام وظیفه"
              dropdownMatchSelectWidth={false}
              placement="bottomRight"
              onChange={nezamVazifeChangeHandler}
              options={nezamVazifeOptions}
              value={
                nezamVazife
                  ? nezamVazife.label
                  : undefined
              }
            />
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
