import profilimage from '../../asset/images/set-social-people-media-profile-member_24877-53571 1.png';
import usericon from '../../asset/icon/user-profile_icon.svg';

import reqresult from '../../asset/images/image 30.png';
import P1 from '../../components/profile/P1';
import P2 from '../../components/profile/P2';
import { useEffect, useState } from 'react';

export default function ProfilePage() {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div>
      <div className="flex flex-row ">
        <div className="flex flex-col w-12 m-4 mt-6">
          <img src={profilimage} alt="" />
          <br />
          <div
            onClick={toggleClass}
            className="w-16 h-16 z-10  rounded-md bg-white  mr-1 shadow-[11px_20px_10px_-15px_rgba(0,0,0,0.3)] mt-5  "
          >
            <img
              src={usericon}
              alt=""
              className="w-9 h-9 relative top-2 right-2 "
            />
          </div>
          <div
            onClick={toggleClass}
            className="hover:stroke-white w-16 h-16 rounded-md z-10 bg-white mr-1 shadow-[11px_20px_10px_-15px_rgba(0,0,0,0.3)] mt-3  "
          >
            <img
              src={reqresult}
              alt=""
              className=" w-9 h-9 relative top-2 right-2 "
            />
          </div>
        </div>
        <div
          className={isActive ? 'hidden' : null}
        >
          <P1 />
        </div>
        <div
          className={isActive ? null : 'hidden'}
        >
          <P2 />
        </div>
      </div>
    </div>
  );
}
