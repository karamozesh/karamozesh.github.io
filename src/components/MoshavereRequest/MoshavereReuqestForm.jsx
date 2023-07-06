import { Tab } from '@headlessui/react';
import { useState } from 'react';
import { Select, Tag } from 'antd';

const ERTH_MOSHAVERE_OPTION_COLORS = {
  html: '#DC1F31',
  css: '#576BF0',
  javascript: '#F5AF2B',
  nlp: '#3EBA60',
  typescript: '#17268A',
};

const erthMoshavere_options = [
  {
    label: 'اچ تی ام ال',
    value: 'html',
  },
  {
    label: 'سی اس اس',
    value: 'css',
  },
  {
    label: 'جاوا اسکریپت',
    value: 'javascript',
  },
  {
    label: 'پردازش زبان طبیعی',
    value: 'nlp',
  },
  {
    label: 'تایپ اسکریپت',
    value: 'typescript',
  },
];

const mizan_info_options = [
  {
    label: 'خیلی زیاد',
    value: '5',
  },
  {
    label: 'زیاد',
    value: '4',
  },
  {
    label: 'متوسط',
    value: '3',
  },
  {
    label: 'خیلی کم',
    value: '2',
  },
  {
    label: 'کم',
    value: '1',
  },
];

const tagRender = ({ label, value, onClose }) => {
  const color =
    ERTH_MOSHAVERE_OPTION_COLORS[value];

  const onPreventMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <span
      onMouseDown={onPreventMouseDown}
      className={`inline-block p-1 mx-2 mb-2  rounded-sm border-[1px] border-dashed cursor-pointer`}
      style={{
        backgroundColor: `${color}30`,
        borderColor: color,
      }}
      onClick={onClose}
    >
      {label}
    </span>
  );
};

const FreeMoshavereRequestContent = () => {
  const optionChangeHandler = (data) => {
    // setOptionSelected(data);
    // add data in redux store!
  };

  return (
    <>
      <p>
        جهت مشاوره رایگان می توانید فرم زیر را پر
        کرده و برای ما ارسال نمایید.
      </p>
      <p>
        کارشناسان ما در اولین فرصت با شما ارتباط
        خواهند گرفت.
      </p>
      <form>
        <div className="grid grid-cols-2 gap-x-4 mb-6">
          <div>
            <label className="inline-block mb-1">
              زمینه مشاوره{' '}
              <span className="text-redColor">
                *
              </span>
            </label>
            <Select
              mode="multiple"
              showArrow
              tagRender={tagRender}
              placeholder="لطفا انتخاب کنید (یک یا بیشتر)"
              style={{
                width: '100%',
              }}
              onChange={optionChangeHandler}
              options={erthMoshavere_options}
            />
          </div>
          <div>
            <label className="inline-block mb-1">
              میزان اطلاعات شما{' '}
              <span className="text-redColor">
                *
              </span>
            </label>
            <Select
              showArrow
              tagRender={tagRender}
              placeholder="لطفا انتخاب کنید"
              style={{
                width: '100%',
              }}
              onChange={optionChangeHandler}
              options={mizan_info_options}
            />
          </div>
        </div>
        <div className="flex flex-col mb-3">
          <label>توضیحات</label>
          <textarea
            name=""
            id=""
            className="mt-2 p-4 bg-gray-600/[0.56] shadow-mahdis focus:outline-dashed"
            style={{ resize: 'none' }}
          ></textarea>
        </div>
        <div
          className="flex flex-col px-6 py-4 mb-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='black' stroke-width='2' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
          }}
        >
          <span className="text-xs text-black-900/[.4]">
            رزومه من
          </span>
          <span className="inline-block my-4 text-xs text-black-900/[.4]">
            سند
          </span>
          <span className="text-xs text-black-900/[.4]">
            نتیجه خودشناسی
          </span>
        </div>
        <div className="grid grid-cols-2 gap-x-4 mb-7">
          <div>
            <label className="inline-block mb-1">
              راه ارتباطی{' '}
              <span className="text-redColor">
                *
              </span>
            </label>
            <Select
              mode="multiple"
              showArrow
              placeholder="لطفا انتخاب کنید"
              tagRender={tagRender}
              style={{
                width: '100%',
              }}
              onChange={optionChangeHandler}
              options={erthMoshavere_options}
            />
          </div>
          <div>
            <label className="inline-block mb-1">
              زمان مشاوره{' '}
              <span className="text-redColor">
                *
              </span>
            </label>
            <Select
              mode="multiple"
              showArrow
              placeholder="لطفا انتخاب کنید"
              tagRender={tagRender}
              style={{
                width: '100%',
              }}
              onChange={optionChangeHandler}
              options={erthMoshavere_options}
            />
          </div>
        </div>
        <button className="w-full h-[54px] rounded-md bg-greenColor text-white">
          ثبت درخواست مشاوره
        </button>
      </form>
    </>
  );
};

const MoshavereRequestForm = () => {
  const tabItems = [
    {
      label: 'مشاوره رایگان',
      bgColor: 'primaryColor',
      textColor: 'white',
    },
    {
      label: 'مشاوره ویژه',
      bgColor: 'secondaryColor',
      textColor: 'black-900',
    },
    {
      label: 'نتیجه درخواست',
      bgColor: 'greenColor',
      textColor: 'black-900',
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <Tab.Group
        selectedIndex={activeTab}
        onChange={setActiveTab}
      >
        <Tab.List className="flex items-end">
          {tabItems
            .slice(0, 2)
            .map((item, index) => (
              <Tab
                key={item.label}
                className={`shadow-mahdis rounded-t-xl overflow-hidden ${
                  activeTab === index
                    ? `w-[40%] h-12 bg-${item.bgColor} text-${item.textColor}`
                    : 'w-[30%] h-10 bg-white text-black-900'
                }`}
              >
                {item.label}
              </Tab>
            ))}
          <Tab
            className={`shadow-mahdis rounded-t-xl overflow-hidden ${
              activeTab === 2
                ? `w-[40%] h-12 bg-greenColor text-${tabItems[2].textColor}`
                : 'w-[30%] h-10 bg-white text-black-900'
            }`}
          >
            {tabItems[2].label}
          </Tab>
        </Tab.List>
        <Tab.Panels className="p-3 shadow-mahdis">
          <Tab.Panel>
            <FreeMoshavereRequestContent />
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default MoshavereRequestForm;
