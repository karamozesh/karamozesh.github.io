import { useState } from 'react';
import {
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { Drawer, Menu } from 'antd';

import CustomDropdown from '../UI/CustomDropdown';

import { ReactComponent as BarMenu } from '../../asset/icon/bars-v2.svg';
import { useSelector } from 'react-redux';
import { ReactComponent as UserProfile } from '../../asset/icon/user-profile_icon.svg';

function getItem(
  label,
  key,
  icon,
  children,
  type,
) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

export default function Navbar() {
  const { pathname } = useLocation();
  const { isLoggedIn } = useSelector(
    (state) => state.auth,
  );

  return (
    <header
      className={`h-[75px] flex justify-between items-center px-5 text-white ${
        pathname === '/'
          ? 'bg-white'
          : 'bg-primaryColor'
      }`}
    >
      <div className="flex items-center w-full">
        <MobileNav />
        {pathname !== '/' && (
          <Link to="/">
            <h1 className="hidden ml-4 text-xl lg:text-2xl md:block">
              آموزشیار
            </h1>
          </Link>
        )}
        <DesktopNav />
      </div>
      {isLoggedIn ? (
        <div
          className={`flex w-[50px] h-[50px] ${
            pathname === '/'
              ? 'bg-primaryColor'
              : 'bg-white'
          } rounded-full`}
        >
          <Link
            to="/profile"
            className="flex justify-center items-center w-full h-full"
          >
            <UserProfile className="w-1/2 fill-white cursor-pointer" />
          </Link>
        </div>
      ) : (
        <div className="flex justify-between items-center w-[180px] h-[40px] rounded-3xl bg-gray-700 text-base shadow-md lg:w-[235px]">
          <Link
            to="/login"
            className="flex justify-center items-center w-[100px] h-full text-black-900"
          >
            ورود
          </Link>
          <Link
            to="/register"
            className={`flex justify-center items-center w-[170px] h-full ${
              pathname === '/'
                ? 'bg-primaryColor text-white'
                : 'bg-secondaryColor text-black-900'
            } rounded-3xl`}
          >
            عضویت
          </Link>
        </div>
      )}
    </header>
  );
}

const MobileNav = () => {
  // mobile

  const [open, setOpen] = useState(false);
  const navigator = useNavigate();

  const drawerCloseHandler = () => {
    setOpen(false);
  };

  const drawerToggleHandler = () => {
    setOpen((prev) => !prev);
  };

  const items = [
    getItem(
      'صفحه اصلی',
      '/',
      null,
      null,
    ),
    getItem(
      'خودشناسی',
      '/talent-survey',
      null,
      null,
    ),
    getItem(
      'درخواست مشاوره',
      '/request-moshavere',
      null,
      null,
    ),
    getItem('ساخت رزومه', '', null, [
      getItem(
        'آموزش رزومه نویسی',
        '/resume-training',
        null,
        null,
      ),
      getItem(
        'ساخت رزومه',
        '/resume-creating',
        null,
        null,
      ),
    ]),
    getItem('کسب مهارت', '/skills', null, []),
    // getItem(
    //   'بانک رزومه',
    //   '/resume-bank',
    //   null,
    //   null,
    // ),
  ];
  const onClick = (e) => {
    const href = e.keyPath.reverse().join('');
    navigator(href);
  };

  return (
    <nav className="mobile lg:hidden">
      <div className="flex items-center cursor-pointer ml-8">
        <div>
          <BarMenu
            fill="currentColor"
            stroke="currentColor"
            onClick={drawerToggleHandler}
          />
        </div>
      </div>
      <Drawer
        title="آموزشیار"
        placement="right"
        onClose={drawerCloseHandler}
        open={open}
        closeIcon={<BarMenu />}
      >
        <Menu
          onClick={onClick}
          className="text-base border-l-5"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
          inlineIndent={24}
        />
      </Drawer>
    </nav>
  );
};

const DesktopNav = () => {
  // desktop

  const { pathname } = useLocation();

  const resumeMenuItems = [
    {
      label: (
        <Link to="resume-training">
          آموزش رزومه نویسی
        </Link>
      ),
      key: `/resume-training`,
    },
    {
      label: (
        <Link to="/resume-creating">
          ساخت رزومه
        </Link>
      ),
      key: '/resume-creating',
    },
  ];

  const skillMenuItems = [];

  const linkClassName =
    pathname === '/'
      ? 'px-4 bg-primaryColor rounded-2xl'
      : null;

  return (
    <nav className="desktop hidden w-full lg:block">
      <ul className="flex w-full text-base [&>*]:ml-4">
        <Link
          to="/talent-survey"
          className={linkClassName}
        >
          خودشناسی
        </Link>
        <Link
          to="/moshavere-request"
          className={linkClassName}
        >
          درخواست مشاوره
        </Link>
        <CustomDropdown
          items={resumeMenuItems}
          label="ساخت رزومه"
          className={linkClassName}
        />
        {/*  for next term */}
        {/* now its next term! */}
        <CustomDropdown
          items={skillMenuItems}
          label="کسب مهارت"
          className={linkClassName}
        />
        {/* deprecate */}
        {/* <Link
          to="resume-bank"
          className={linkClassName}
        >
          بانک رزومه
        </Link> */}
      </ul>
    </nav>
  );
};
