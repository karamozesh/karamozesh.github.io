import React from 'react';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';
import 'swiper/css';
import pana1 from '../../images/pana1.png';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import './style.css';
import imageProfile from '../../asset/images/people-media-profile.svg';
import SliderSlide from './UI/SliderSlide';

import man1 from '../../asset/personImage/man1.jpg';
import man2 from '../../asset/personImage/man2.jpg';
import man3 from '../../asset/personImage/man3.jpg';
import woman1 from '../../asset/personImage/woman1.jpg';
import woman2 from '../../asset/personImage/woman2.jpg';

function Comment() {
  const comments = [
    {
      text: 'ظاهر زیبا و خلاقانه سایت سریع منو جذب خودش کرد. همینطور رابط کاربری سایت به راحتی برای هرکسی قابل استفاده می باشد',
      name: 'ساینا',
      image: woman1,
      feature: 'طرح سایت',
    },
    {
      text: 'من تست شخصیت شناسی mbti رو انجام دادم .با توجه به شناختی که از خودم دارم خیلی دقیق و نزدیک به شخصیتم، به من تایپم رو معرفی کرد',
      name: 'پوریا',
      image: man2,
      feature: 'خودشناسی',
    },
    {
      text: 'نسبت به سایت های دیگه ای که تست رو با اونا انجام دادم خیلی سریعتر میتونستم انتخاب کنم.  گزینه ها خیلی واضح طراحی شده بودن که این کار من رو راحت تر میکرد',
      name: 'داداش پوریا',
      image: man3,
      feature: 'خودشناسی',
    },
    {
      text: 'سایت از لحاظ رنگ بندی خیلی زیبا و دلنشین طراحی شده و همچين برای استفاده کاربران خیلی ساده و کاربردی است',
      name: 'ماری',
      image: woman2,
      feature: 'طرح سایت',
    },
    {
      text: 'من تست شخصیت شناسی هالند رو در راستای پیدا کردن مسیر شغلیم انجام دادم.با توجه به شناختی که از خودم دارم کاملا درست عمل کرده بود و با کمک بخش مهارت های معرفی شده خیلی ساده کارهایی که باید انجام بدم تا این مسیرو طی کنم دستم اومد و از سردرگمی بیرون اومدم.',
      name: 'امید',
      image: man1,
      feature: 'خودشناسی',
    },
  ];

  return (
    <div className="bg-[#DEEAFF] p-4 md:p-10">
      <h2 className="mb-10 text-center md:text-right md:mb-0">
        نظرات کاربران اموزشیاری
      </h2>
      <div className="flex items-center justify-center lg:p-0">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {comments.map((comment) => (
            <SwiperSlide>
              <SliderSlide
                comment={comment.text}
                img={comment.image}
                name={comment.name}
                feature={comment.feature}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <img
          src={pana1}
          alt=""
          className="hidden lg:block"
        />
      </div>
    </div>
  );
}

export default Comment;
