import { useState } from 'react';
import {
  Link,
  useNavigate,
} from 'react-router-dom';
import { Drawer, Menu } from 'antd';

import CustomDropdown from '../UI/CustomDropdown';

import './index.css';

import { ReactComponent as BarMenu } from '../../asset/icon/bars-v2.svg';

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
  return (
    <header className="h-[75px] flex justify-between items-center px-5 bg-primaryColor text-white">
      <div className="flex items-center">
        <MobileNav />
        <h1 className="hidden ml-4 text-xl lg:text-2xl md:block">
          آموزشیار
        </h1>
        <DesktopNav />
      </div>
      <div className="flex justify-between items-center w-[180px] h-[40px] rounded-3xl bg-gray-700 text-base shadow-md lg:w-[235px]">
        <Link
          to="/access/login"
          className="flex justify-center items-center w-[100px] h-full text-black-900"
        >
          ورود
        </Link>
        <Link
          to="/access/register"
          className="flex justify-center items-center w-[170px] h-full bg-secondaryColor text-black-900 rounded-3xl"
        >
          عضویت
        </Link>
      </div>
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
      'درخواست مشاوره',
      '/request-moshavere',
      null,
      null,
    ),
    getItem('ساخت رزومه', '/resume', null, [
      getItem(
        'آموزش رزومه نویسی',
        '/training',
        null,
        null,
      ),
      getItem(
        'ساخت رزومه',
        '/create',
        null,
        null,
      ),
    ]),
    getItem('کسب مهارت', '/skill', null, []),
    getItem(
      'بانک رزومه',
      '/resume-bank',
      null,
      null,
    ),
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
  const skillMenuItems = [];

  const resumeMenuItems = [
    {
      label: 'آموزش رزومه نویسی',
      key: '1',
    },
    {
      label: 'ساخت رزومه',
      key: '2',
    },
  ];

  return (
    <nav className="desktop hidden lg:block">
      <ul className="flex justify-between text-base [&>*]:ml-8">
        <Link to="/moshavere-request">
          درخواست مشاوره
        </Link>
        <CustomDropdown
          items={resumeMenuItems}
          label="ساخت رزومه"
        />
        <CustomDropdown
          items={skillMenuItems}
          label="کسب مهارت"
        />
        <Link to="resume-bank">بانک رزومه</Link>
      </ul>
    </nav>
  );
};
