import userIcon from '../../asset/icon/profile-user_icon.svg';
import moshavereIcon from '../../asset/icon/profile-moshaver_icon.svg';
import UserInfo from '../../components/profile/UserInfo';
import TicketsInfo from '../../components/profile/TicketsInfo';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { changeUserImageProfile } from '../../store/profile-slice';

import profileImage from '../../asset/images/people-media-profile.png';

import greenTick from '../../asset/icon/green-tick.png';

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
      } flex justify-center items-center w-[150px] h-20 rounded-r-md shadow-profile bg-white mt-2 cursor-pointer`}
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
  const { image } = useSelector(
    (state) => state.profile,
  );
  const [imageFile, setImageFile] =
    useState(null);

  const imageChangeHandler = (e) => {
    const file = e.target.files[0];

    setImageFile(file);
    dispatch(
      changeUserImageProfile({
        user_token,
        fileImage: file,
      }),
    );
  };

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
      <div className="flex flex-col items-center w-[150px] mt-6">
        <div className="relative flex flex-col items-center w-fit mb-2">
          <img
            src={image ?? profileImage}
            alt=""
            className="w-[62px] h-[64px] rounded-full"
            key={image}
          />
          <input
            type="file"
            accept="image/*"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={imageChangeHandler}
          />
          <span className="mt-2 text-xs whitespace-nowrap">
            {imageFile?.name ? (
              <div className="flex items-end">
                عکس آپلود شد.
                <img
                  src={greenTick}
                  alt=""
                  className="w-[30px] aspect-auto"
                />
              </div>
            ) : (
              'بارگذاری تصویر'
            )}
          </span>
        </div>
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
