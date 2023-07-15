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

function Comment() {
  return (
    <div className="bg-[#DEEAFF] p-10 ">
      <h2>نظرات کاربران اموزشیاری</h2>
      <div className="flex items-center justify-center lg:p-0 p-10">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <SliderSlide
              comment={
                ' لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'
              }
              img={imageProfile}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderSlide
              comment={
                ' لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'
              }
              img={imageProfile}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderSlide
              comment={
                ' لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'
              }
              img={imageProfile}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderSlide
              comment={
                ' لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'
              }
              img={imageProfile}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderSlide
              comment={
                ' لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد'
              }
              img={imageProfile}
            />
          </SwiperSlide>
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
