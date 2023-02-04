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

  const vaziatTaahol = [
    [
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
    ],
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
            label="نام رزومه(رزومه مهندسی برق)"
            name="name-resume"
            type="text"
            onChange={null}
          />
          <ResumeInput
            label="شماره همراه"
            name="phone-number"
            type="text"
            onChange={null}
          />
        </div>
        <div className="grid grid-cols-2 gap-28 items-end h-full ">
          <ResumeInput
            label="نام"
            name="firstname"
            type="text"
            onChange={null}
          />
          <div className="grid grid-cols-2 gap-4">
            <Select
              defaultValue="جنسیت"
              placement="bottomRight"
              options={jensiatOptions}
            />
            <Select
              defaultValue="جنسیت"
              dropdownMatchSelectWidth={false}
              placement="bottomRight"
              options={vaziatTaahol}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-28 mt-4">
          <ResumeInput
            label="نام خانوادگی"
            name="lastname"
            type="text"
            onChange={null}
          />
          <div className="grid grid-cols-2 gap-4 items-end">
            <Select
              defaultValue="شهر"
              placement="bottomRight"
              options={jensiatOptions}
            />
            <Select
              defaultValue="نظام وظیفه"
              dropdownMatchSelectWidth={false}
              placement="bottomRight"
              options={vaziatTaahol}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-28 items-end mt-4">
          <ResumeInput
            label="تاریخ تولد"
            name="date-birthday"
            type="text"
            onChange={null}
          />
          <ResumeInput
            label="آدرس"
            name="address"
            type="text"
            onChange={null}
          />
        </div>
      </div>
    </div>
  );
};

export default BaseInformationContent;
