import { useState } from 'react';
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { Drawer, Dropdown, Menu } from 'antd';

import CustomDropdown from '../UI/CustomDropdown';

import { ReactComponent as BarMenu } from '../../asset/icon/bars-v2.svg';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import imageProfile from '../../asset/images/people-media-profile.svg';
import { authActions } from '../../store/auth-slice';

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
  const { isLoggedIn, isMoshaver } = useSelector(
    (state) => state.auth,
  );
  const { image } = useSelector(
    (state) => state.profile,
  );

  const dispatch = useDispatch();

  const normalUserNav = (
    <>
      <MobileNav />
      <DesktopNav />
    </>
  );

  const moshaverNav = (
    <>
      <MoshaverMobileNav />
      <MoshaverDesktopNav />
    </>
  );

  const navigate = useNavigate();

  const onClick = ({ key }) => {
    if (key === '1') {
      navigate('/profile');
    } else if (key === '2') {
      dispatch(authActions.logoutHandler());
    } else
      throw Error('Invalid key profile dropdown');
  };
  const items = [
    {
      label: 'پروفایل',
      key: '1',
    },
    {
      label: 'خروج',
      key: '2',
    },
  ];

  return (
    <header
      className={`h-[75px] flex justify-between items-center px-5 text-white ${
        pathname === '/'
          ? 'bg-white'
          : 'bg-primaryColor'
      }`}
    >
      <div className="flex items-center w-full">
        {pathname !== '/' && (
          <Link to="/">
            <h1 className="hidden ml-4 text-xl lg:text-2xl md:block">
              آموزشیار
            </h1>
          </Link>
        )}
        {isMoshaver ? moshaverNav : normalUserNav}
      </div>
      {isLoggedIn ? (
        <div
          className={`flex justify-center items-center w-[50px] h-[50px] overflow-hidden ${
            pathname === '/'
              ? 'bg-primaryColor'
              : 'bg-white'
          } rounded-full`}
        >
          <Dropdown
            menu={{
              items,
              onClick,
            }}
            placement="bottom"
          >
            <img
              src={image.url ?? imageProfile}
              key={image.changed}
              className="cursor-pointer w-[50px] h-[50px] bg-cover"
              alt=""
            />
          </Dropdown>
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
    getItem('صفحه اصلی', '/', null, null),
    getItem(
      'خودشناسی',
      '/talent-survey',
      null,
      null,
    ),
    getItem(
      'درخواست مشاوره',
      '/moshavere-request',
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
    getItem('کسب مهارت', '/skill', null, null),
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
        <NavLink to="resume-training">
          آموزش رزومه نویسی
        </NavLink>
      ),
      key: `/resume-training`,
    },
    {
      label: (
        <NavLink to="/resume-creating">
          ساخت رزومه
        </NavLink>
      ),
      key: '/resume-creating',
    },
  ];

  const linkClassName =
    pathname === '/'
      ? 'px-4 bg-primaryColor rounded-2xl'
      : null;

  const sectionFirst = pathname.split('/')[1];
  const isResumePage =
    sectionFirst.split('-')[0] === 'resume';

  return (
    <nav className="desktop hidden w-full lg:block">
      <ul className="flex w-full text-base [&>*]:ml-4">
        <NavLink
          to="/talent-survey"
          className={linkClassName}
        >
          خودشناسی
        </NavLink>
        <NavLink
          to="/moshavere-request"
          className={linkClassName}
        >
          درخواست مشاوره
        </NavLink>
        <CustomDropdown
          items={resumeMenuItems}
          label="ساخت رزومه"
          className={linkClassName}
          classNameLabel={
            isResumePage ? 'text-[#FFEA7B]' : ''
          }
        />
        <NavLink
          to="/skill"
          className={linkClassName}
        >
          کسب مهارت
        </NavLink>
        {/*  for next term */}
        {/* now its next term! */}

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

const MoshaverMobileNav = () => {
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
    getItem('صفحه اصلی', '/', null, null),
    getItem(
      'درخواست های مشاوره',
      '/tickets',
      null,
      null,
    ),
    getItem(
      'مشاوره های من',
      '/my-tickets',
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

const MoshaverDesktopNav = () => {
  // desktop

  const { pathname } = useLocation();

  console.log(pathname);

  const linkClassName =
    pathname === '/'
      ? 'px-4 bg-primaryColor rounded-2xl'
      : null;

  return (
    <nav className="desktop hidden w-full lg:block">
      <ul className="flex w-full text-base [&>*]:ml-4">
        <NavLink
          to="/tickets"
          className={linkClassName}
        >
          درخواست های مشاوره
        </NavLink>
        <NavLink
          to="/my-tickets"
          className={linkClassName}
        >
          مشاوره های من
        </NavLink>
      </ul>
    </nav>
  );
};
