import { useState } from 'react';
import logoSite from '../../asset/images/logo-site.png';
import ContactUsModal from '../ContactUsModal/ContactUsModal';
import { Modal } from 'antd';
import { Link } from 'react-router-dom';

import logo from '../../asset/icon/logo.png';

export default function Footer() {
  const [contactUsModal, setContactUsModal] =
    useState(false);

  return (
    <footer
      className="flex items-center w-full h-[120px] pt-2 pl-8 bg-[#C5D0DA] text-black-400 text-xs"
      style={{ direction: 'ltr' }}
    >
      <img
        src={logo}
        alt=""
        className="w-[75px] h-[75px] mr-4 bg-white rounded-full"
      />
      <div className="flex flex-col justify-center w-full h-full">
        <div className="flex">
          <button
            className="mr-4"
            onClick={() =>
              setContactUsModal(true)
            }
          >
            تماس با ما
          </button>
          {contactUsModal && (
            <ContactUsModal
              onClose={setContactUsModal}
            />
          )}

          <Link to="/about-us" className="mr-4">
            درباره ما
          </Link>
        </div>
        <div className="w-[90%] h-[0.5px] my-2 bg-black-900"></div>
        <p>
          تمامی حقوق برای سایت آموزشیار محفوظ است
        </p>
      </div>
    </footer>
  );
}
