import {
  RadioGroup,
  Tab,
} from '@headlessui/react';
import { Select } from 'antd';
import MoshavereRequsetTicket from './MoshavereReuqestTicket';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  addTicketFree,
  moshavereFormActions,
} from '../../store/moshavereForm-slice';
import {
  getDateValue,
  getLabelFromDate,
} from '../../functions/date';
import { useNavigate } from 'react-router-dom';

const ERTH_MOSHAVERE_OPTION_COLORS = {
  html: '#DC1F31',
  css: '#576BF0',
  javascript: '#F5AF2B',
  typescript: '#17268A',
  frontend: '#A899DF',
  python: '#16B4E5',
  backend: '#CBDAFF',
  ai: '#0A0A0A',
  nlp: '#3EBA60',
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
    label: 'تایپ اسکریپت',
    value: 'typescript',
  },
  {
    label: 'فرانت اند',
    value: 'frontend',
  },
  {
    label: 'پایتون',
    value: 'python',
  },
  {
    label: 'بک اند',
    value: 'backend',
  },

  {
    label: 'هوش مصنوعی',
    value: 'ai',
  },

  {
    label: 'پردازش زبان طبیعی',
    value: 'nlp',
  },
];

const mizan_info_options = [
  {
    label: 'آشنا نیستم',
    value: '1',
  },
  {
    label: 'تا حدودی آشنایی دارم',
    value: '2',
  },
  {
    label: 'کاملا آشنا هستم',
    value: '3',
  },
];

const contact_way_options = [
  {
    label: 'مشاوره تلفنی',
    value: '1',
  },
  {
    label: 'پیامک',
    value: '2',
  },
  {
    label: 'ایمیل',
    value: '3',
  },
];

const currentDate = new Date().getDate();

const dateArray = new Array(7)
  .fill(0)
  .map((_, index) => {
    const date = new Date();
    date.setDate(currentDate + index);
    return date;
  });

const moshaver_time_options = dateArray.map(
  (date) => ({
    label: getLabelFromDate(date),
    value: getDateValue(date),
  }),
);

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
  const data = useSelector(
    (state) => state.moshavereForm.free,
  );

  const navigate = useNavigate();

  const { user_token } = useSelector(
    (state) => state.auth,
  );

  const {
    zamine,
    lvlOfInofrmation,
    question,
    files,
    contactWay,
    timeMoshavere,
    title,
  } = data;

  const dispatch = useDispatch();

  const zamineMoshavereChangeHandler = (
    value,
  ) => {
    dispatch(
      moshavereFormActions.changeFreeProp({
        prop: 'zamine',
        value,
      }),
    );
  };

  const lvlOfInofrmationChangeHandler = (
    value,
  ) => {
    dispatch(
      moshavereFormActions.changeFreeProp({
        prop: 'lvlOfInofrmation',
        value,
      }),
    );
  };

  const questionChangeHandler = (e) => {
    const value = e.target.value;

    dispatch(
      moshavereFormActions.changeFreeProp({
        prop: 'question',
        value,
      }),
    );
  };

  const contactWayChangeHandler = (value) => {
    dispatch(
      moshavereFormActions.changeFreeProp({
        prop: 'contactWay',
        value,
      }),
    );
  };

  const timeMoshavereChangeHandler = (value) => {
    dispatch(
      moshavereFormActions.changeFreeProp({
        prop: 'timeMoshavere',
        value,
      }),
    );
  };

  const titleChangeHandler = (e) => {
    const value = e.target.value;

    dispatch(
      moshavereFormActions.changeFreeProp({
        prop: 'title',
        value,
      }),
    );
  };

  const addTicketHandler = async (e) => {
    e.preventDefault();

    dispatch(
      addTicketFree({
        data,
        user_token,
        cb: () => {
          navigate('/profile');
          window.scrollTo(0, 0);
        },
      }),
    );
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
      <form
        className="p-8"
        onSubmit={addTicketHandler}
      >
        <div>
          <div className="flex flex-col mb-6">
            <label className="inline-block mb-1 text-base">
              عنوان مشاوره:{' '}
              <span className="text-redColor">
                *
              </span>
            </label>
            <input
              type="text"
              className="bg-gray-700 rounded-lg py-2 px-3 text-xs focus:outline-dashed"
              onChange={titleChangeHandler}
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col mb-6">
            <label className="inline-block mb-1 text-base">
              سوال مشاوره:{' '}
              <span className="text-redColor">
                *
              </span>
            </label>
            <textarea
              type="text"
              className="h-[100px] bg-gray-700 rounded-lg py-2 px-3 text-xs focus:outline-dashed resize-none"
              onChange={questionChangeHandler}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-4 mb-6">
          <div>
            <label className="inline-block mb-1 text-base">
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
                fontSize: '12px',
              }}
              onChange={
                zamineMoshavereChangeHandler
              }
              options={erthMoshavere_options}
            />
          </div>
          <div>
            <label className="inline-block mb-1 text-base">
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
                fontSize: '12px',
              }}
              onChange={
                lvlOfInofrmationChangeHandler
              }
              // value={lvlOfInofrmation}
              options={mizan_info_options}
            />
          </div>
        </div>
        {/* <div className="flex flex-col mb-3">
          <label>توضیحات</label>
          <textarea
            name=""
            id=""
            className="mt-2 p-4 bg-gray-600/[0.56] shadow-mahdis focus:outline-dashed text-xs"
            style={{ resize: 'none' }}
            // value={question}
          ></textarea>
        </div> */}
        <div
          className="relative flex flex-col px-6 py-4 mb-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='black' stroke-width='2' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
          }}
        >
          <div className="absolute inset-0 flex justify-center items-center w-full h-full bg-gray-500/10">
            قابلیت فرستادن فایل به زودی اضافه
            خواهد شد
          </div>
          <div className="flex flex-col blur-sm pointer-events-non">
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
        </div>
        <div className="grid grid-cols-2 gap-x-4 mb-7">
          <div>
            <label className="inline-block mb-1 text-base">
              راه ارتباطی{' '}
              <span className="text-redColor">
                *
              </span>
            </label>
            <Select
              showArrow
              placeholder="لطفا انتخاب کنید"
              tagRender={tagRender}
              style={{
                width: '100%',
                fontSize: '12px',
              }}
              onChange={contactWayChangeHandler}
              // value={contactWay}
              options={contact_way_options}
            />
          </div>
          <div>
            <label className="inline-block mb-1 text-base">
              زمان مشاوره{' '}
              <span className="text-redColor">
                *
              </span>
            </label>
            <Select
              showArrow
              placeholder="لطفا انتخاب کنید"
              tagRender={tagRender}
              style={{
                width: '100%',
                fontSize: '12px',
              }}
              // value={timeMoshavere}
              onChange={
                timeMoshavereChangeHandler
              }
              options={moshaver_time_options}
            />
          </div>
        </div>
        <button
          className="w-full h-[54px] rounded-md bg-greenColor text-white text-base"
          onClick={addTicketHandler}
          type="submit"
        >
          ثبت درخواست مشاوره
        </button>
      </form>
    </>
  );
};

const plans = [
  { id: 1, name: 'یک ماهه', value: '1' },
  { id: 2, name: 'دو ماهه', value: '2' },
  { id: 3, name: 'سه ماهه', value: '3' },
];

const VIPMoshavereRequestContent = () => {
  const {
    zamine,
    lvlOfInofrmation,
    question,
    files,
    contactWay,
    timeMoshavere,
    plan,
  } = useSelector(
    (state) => state.moshavereForm.vip,
  );

  const dispatch = useDispatch();

  const zamineMoshavereChangeHandler = (
    value,
  ) => {
    dispatch(
      moshavereFormActions.changeVipProp({
        prop: 'zamine',
        value,
      }),
    );
  };

  const lvlOfInofrmationChangeHandler = (
    value,
  ) => {
    dispatch(
      moshavereFormActions.changeVipProp({
        prop: 'lvlOfInofrmation',
        value,
      }),
    );
  };

  const questionChangeHandler = (e) => {
    const value = e.target.value;

    dispatch(
      moshavereFormActions.changeVipProp({
        prop: 'question',
        value,
      }),
    );
  };

  const planChangeHandler = (value) => {
    dispatch(
      moshavereFormActions.changeVipProp({
        prop: 'plan',
        value,
      }),
    );
  };

  const contactWayChangeHandler = (value) => {
    dispatch(
      moshavereFormActions.changeVipProp({
        prop: 'contactWay',
        value,
      }),
    );
  };

  const timeMoshavereChangeHandler = (value) => {
    dispatch(
      moshavereFormActions.changeVipProp({
        prop: 'timeMoshavere',
        value,
      }),
    );
  };

  return (
    <div className="relative">
      <div className="w-full h-full flex justify-center items-center text-center absolute bg-gray-500/50 align-middle">
        <p className="text-2xl bg-white/50 p-2 rounded-xl">
          مشاوره ویژه در حال ساخت است
        </p>
      </div>
      <div className="blur-sm pointer-events-none p-3">
        <p>
          جهت مشاوره و تماس می توانید فرم زیر را
          پر کرده و برای ما ارسال نمایید.
        </p>
        <p>
          کارشناسان ما در اولین فرصت با شما تماس
          خواهند گرفت.
        </p>
        <form className="p-8">
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
                onChange={
                  zamineMoshavereChangeHandler
                }
                value={zamine}
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
                onChange={
                  lvlOfInofrmationChangeHandler
                }
                value={lvlOfInofrmation}
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
              onChange={questionChangeHandler}
              value={question}
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
                showArrow
                placeholder="لطفا انتخاب کنید"
                tagRender={tagRender}
                style={{
                  width: '100%',
                }}
                onChange={contactWayChangeHandler}
                value={contactWay}
                options={contact_way_options}
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
                showArrow
                placeholder="لطفا انتخاب کنید"
                tagRender={tagRender}
                style={{
                  width: '100%',
                }}
                value={timeMoshavere}
                onChange={
                  timeMoshavereChangeHandler
                }
                options={moshaver_time_options}
              />
            </div>
          </div>
          <div>
            <RadioGroup
              value={plan}
              onChange={planChangeHandler}
              className="flex mb-8"
            >
              <RadioGroup.Label className="text-base ml-10">
                نوع اشتراک
              </RadioGroup.Label>
              {plans.map((planItem) => (
                <div className="flex items-center w-1/4">
                  <RadioGroup.Option
                    key={planItem.id}
                    value={planItem}
                    className={`w-[22px] h-[20px] ml-2 shadow-mahdis rounded-sm cursor-pointer ${
                      +planItem.id === +plan.id
                        ? 'bg-greenColor'
                        : ''
                    }`}
                  ></RadioGroup.Option>
                  <span className="text-sm">
                    {planItem.name}
                  </span>
                </div>
              ))}
            </RadioGroup>
          </div>
          <button
            className="w-full h-[54px] rounded-md bg-greenColor text-white"
            // onClick={addTicketHandler}
          >
            ثبت درخواست مشاوره
          </button>
        </form>
      </div>
    </div>
  );
};

const MoshavereRequestForm = ({
  activeTab,
  setActiveTab,
}) => {
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
  ];

  return (
    <div className="mb-20">
      <Tab.Group
        selectedIndex={activeTab}
        onChange={setActiveTab}
      >
        <Tab.List className="flex items-end">
          {tabItems.map((item, index) => (
            <Tab
              key={item.label}
              className={`shadow-mahdis rounded-t-xl overflow-hidden text-base ${
                activeTab === index
                  ? `w-[56%] h-12 bg-${item.bgColor} text-${item.textColor}`
                  : 'w-[44%] h-10 bg-white text-black-900'
              }`}
            >
              {item.label}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="rounded-b-md shadow-mahdis items-start">
          <Tab.Panel className="p-3">
            <FreeMoshavereRequestContent />
          </Tab.Panel>
          {/* <Tab.Panel className="p-3"> */}
          <Tab.Panel>
            <VIPMoshavereRequestContent />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default MoshavereRequestForm;
