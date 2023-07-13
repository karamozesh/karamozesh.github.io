import userIcon from '../../asset/icon/profile-user_icon.svg';
import moshavereIcon from '../../asset/icon/profile-moshaver_icon.svg';
import UserInfo from '../../components/profile/UserInfo';
import TicketsInfo from '../../components/profile/TicketsInfo';
import { useState } from 'react';

const ProfileTab = ({
  isActive,
  image,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative ${
        isActive ? 'z-20' : 'z-10'
      } flex justify-center items-center w-[100px] h-20 rounded-r-md shadow-profile bg-white mt-2 cursor-pointer`}
    >
      <div className="absolute -left-5 w-5 h-full bg-white"></div>
      <div className="absolute -left-2 w-2 h-[calc(100%+20px)] bg-white"></div>
      <img
        src={image}
        alt=""
        className="w-[40px] h-[40px]"
      />
    </div>
  );
};

export default function ProfilePage() {
  const [tabIndex, setTabIndex] = useState(0);

  const tabArray = [
    {
      id: 0,
      image: userIcon,
      // onClick: () => setTabIndex(0),
    },
    {
      id: 1,
      image: moshavereIcon,
      // onClick: () => setTabIndex(1),
    },
  ];

  let contentProfile;

  switch (tabIndex) {
    case 0:
      contentProfile = <UserInfo />;
      break;

    case 1:
      contentProfile = <TicketsInfo />;
  }

  return (
    <div className="flex mx-8 mt-8">
      <div className="flex flex-col items-center w-[100px] mt-6">
        {tabArray.map(({ image, id }) => (
          <ProfileTab
            image={image}
            key={id}
            isActive={tabIndex === id}
            onClick={() => setTabIndex(id)}
          />
        ))}
      </div>
      <div className="relative z-10 w-[calc(100%-48px)] h-full px-10 pb-20 bg-white rounded-t-xl shadow-profile">
        {contentProfile}
      </div>
    </div>
  );
}
