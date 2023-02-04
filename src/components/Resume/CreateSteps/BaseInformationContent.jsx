import { useSelector } from 'react-redux';
import profileImage from '../../../asset/images/people-media-profile.svg';
import ResumeInput from '../ResumeInput';
import { Select } from 'antd';

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
            onChange={null}
            placeholder="فرانت اند"
          />
          <ResumeInput
            label="شماره همراه"
            name="phone-number"
            type="text"
            onChange={null}
            placeholder="0912345678"
          />
        </div>
        <div className="grid grid-cols-2 gap-28 items-end h-full ">
          <ResumeInput
            label="نام"
            name="firstname"
            type="text"
            onChange={null}
            placeholder="احمد"
          />
          <div className="grid grid-cols-2 gap-4">
            <Select
              defaultValue="جنسیت"
              placement="bottomRight"
              options={jensiatOptions}
            />
            <Select
              defaultValue="وضعیت تاهل"
              dropdownMatchSelectWidth={false}
              placement="bottomRight"
              options={vaziatTaaholOptions}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-28 mt-4">
          <ResumeInput
            label="نام خانوادگی"
            name="lastname"
            type="text"
            onChange={null}
            placeholder="روشن فکر"
          />
          <div className="grid grid-cols-2 gap-4 items-end">
            <Select
              defaultValue="شهر"
              placement="bottomRight"
              options={cityOptions}
            />
            <Select
              defaultValue="نظام وظیفه"
              dropdownMatchSelectWidth={false}
              placement="bottomRight"
              options={nezamVazifeOptions}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-28 items-end mt-4">
          <ResumeInput
            label="تاریخ تولد"
            name="date-birthday"
            type="date"
            onChange={null}
          />
          <ResumeInput
            label="آدرس"
            name="address"
            type="text"
            onChange={null}
            placeholder="استان تهران، شهر تهران، مهراباد جنوبی، ۱۲ متری شمشیری"
          />
        </div>
      </div>
    </div>
  );
};

export default BaseInformationContent;
