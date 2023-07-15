import { Link } from 'react-router-dom';
import heroImage from '../../asset/images/hero_image.svg';
import Button from '../../components/UI/Button';

import roadDashed from '../../asset/images/road-dashed.svg';
import roadCircleImage from '../../asset/images/road-circle_image.svg';
import roadSite from '../../asset/images/Group 386.png';
import Statictics from '../Statictics/Statictic.jsx';
import Comment from '../Comments/Comment';

const road = {
  resume: {
    position: 'relative',
    top: '-9rem',
    right: ' 15%',
  },
  skill: {
    position: 'relative',
    top: '-10rem',
    right: ' 40%',
  },
  moshavere: {
    position: 'relative',
    top: '-25rem',
    right: ' 65%',
  },
  khodshenasi: {
    position: 'relative',
    top: '-15rem',
    right: ' 80%',
  },
};
export default function HomePage() {
  return (
    <div className="mt-8">
      <div className="relative flex flex-col items-center min-h-[60vh] p-4 shadow-lg md:flex-row z-30">
        <div className="w-[100%] h-1/2 md:h-full md:w-1/2">
          <img
            src={heroImage}
            className="h-full"
          />
        </div>
        <div className="flex flex-col justify-center w-full my-4 md:text-center md:items-center md:w-[45%]">
          <h1 className="text-4xl md:text-8xl">
            آموزشیار
          </h1>
          <p className="my-2">
            بستری برای خودشناسی ، یادگیری ، آموزش
            و به اشتراک گذاشتن رزومه و تجربیاتتون
            با دیگران :)
          </p>
          <Button className="inline w-fit shadow-lg text-base px-0 py-0">
            <Link
              to="/talent-survey"
              className="inline-block px-8 py-2"
            >
              خودشناسی
            </Link>
          </Button>
        </div>
        <div className="w-[5%]"></div>
      </div>
      <div>
        <div className="-z-30 relative flex justify-end mb-20">
          <img
            src={roadDashed}
            alt=""
            className="absolute right-0 -top-28 w-[30%] bg-top h-[450px] -z-30"
          />
          <div
            className="w-fit h-fit p-2 ml-2 bg-[#CFDFFF]"
            style={{
              borderRadius: '0 0 19px 19px',
            }}
          >
            <img src={roadCircleImage} alt="" />
          </div>
        </div>
        <div className="mb-[20vh] md:mb-[40vh] inline">
          <img src={roadSite} alt="" />

          <div className=" ">
            <p
              className="relative -top-36 right-1/4 inline"
              style={road.resume}
            >
              ساخت رزومه
            </p>
            <p
              className=" relative  text-xs font-light"
              style={road.resume}
            >
              مثل حرفه ایا رزومه بساز
            </p>
          </div>
          <div className="">
            <p
              className=" relative "
              style={road.skill}
            >
              کسب مهارت
            </p>
            <p
              className=" relative  text-xs font-light"
              style={road.skill}
            >
              یادگیری مهارت های دلخواهتون به روش
              بهترینا{' '}
            </p>
          </div>
          <div className="">
            <p
              className=" relative "
              style={road.moshavere}
            >
              مشاوره{' '}
            </p>
          </div>
          <div className="">
            <p
              className=" relative "
              style={road.khodshenasi}
            >
              خودشناسی
            </p>
            <p
              className=" relative  text-xs font-light"
              style={road.khodshenasi}
            >
              ویژگی ها و ابعاد مختلفتو بهتر بشناس
            </p>
          </div>
        </div>
      </div>

      <div className="relative my-[200px]">
        <div className="absolute w-full h-[100px] -top-[10%] bg-secondaryColor skew-y-2 -z-10" />
        <div className="absolute w-full h-[100px] -bottom-[10%] bg-secondaryColor skew-y-2 -z-10" />
        <Statictics />
      </div>
      <div className="relative my-[400px]">
        <div className="absolute w-full h-[100px] -top-[10%] bg-[#DEEAFF] -skew-y-2 -z-10" />
        <div className="absolute w-full h-[100px] -bottom-[10%] bg-[#DEEAFF] -skew-y-2 -z-10" />
        <Comment />
      </div>
    </div>
  );
}
