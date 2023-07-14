import userIcon from '../../asset/icon/profile-user_icon.svg';
import moshavereIcon from '../../asset/icon/profile-moshaver_icon.svg';
import UserInfo from '../../components/profile/UserInfo';
import TicketsInfo from '../../components/profile/TicketsInfo';
import { useState } from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { changeUserImageProfile } from '../../store/profile-slice';

import profileImage from '../../asset/images/people-media-profile.png';

import greenTick from '../../asset/icon/green-tick.png';
import { Progress } from 'antd';

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
  const [imageInfo, setImageInfo] = useState({
    text: 'بارگذاری تصویر',
    isUpload: false,
    progress: null,
  });
  const { user_token } = useSelector(
    (state) => state.auth,
  );

  const dispatch = useDispatch();

  const [imageFile, setImageFile] =
    useState(null);

  const imageChangeHandler = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageFile(file);
    dispatch(
      changeUserImageProfile({
        user_token,
        imageFile: file,
        cb: (info) => {
          setImageInfo(info);
        },
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

  console.log(imageInfo.progress);

  return (
    <div className="flex mx-8 mt-8">
      <div className="flex flex-col items-center w-[150px] mt-6">
        <div className="relative flex flex-col items-center w-fit mb-2">
          <img
            src={image.url ?? profileImage}
            alt=""
            className="w-[62px] h-[64px] rounded-full"
            key={image.changed}
          />
          <input
            type="file"
            accept="image/*"
            className={`absolute inset-0 w-full h-full opacity-0 ${
              imageInfo.isUpload
                ? 'cursor-not-allowed'
                : 'cursor-pointer'
            }`}
            onChange={imageChangeHandler}
            disabled={imageInfo.isUpload}
          />
          <div className="flex flex-col justify-center">
            <span className="mt-2 mb-1 text-xs whitespace-nowrap">
              {imageInfo.text}
            </span>
            {imageInfo.isUpload && (
              <Progress
                percent={
                  +imageInfo.progress * 100
                }
                status="active"
              />
            )}
          </div>
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
