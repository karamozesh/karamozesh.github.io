import React from 'react';
import infp from '../../images/INFP.svg';
import infpSvg from '../../images/infpSvg.png';
import './style.css';
import PersonTypes from './PersonTypes/PersonTypes';
import HeaderType from './Type/Type';
import tolkien from '../../images/tolkien.svg';
import shakespeare from '../../images/shakespeare.svg';
import bjork from '../../images/bjork.svg';
import alicia from '../../images/alicia.svg';
import GreatTalk from './GreatTalk/GreatTalk';

function INTP() {
  return (
    <main>
      <HeaderType
        typeName={'میانجی'}
        type={'INFP-A / INFP-T'}
        typeImg={infp}
        color={'#33A474'}
      />

      <section className="container mx-auto  mt-10 p-20 font-medium ">
        <h1 className="text-4xl text-[#51596A] pb-5">
          شخصیت میانجی
        </h1>
        <GreatTalk
          text="هر چیزی که طلا باشد برق نمی‌زند؛ همه کسانی که سرگردان هستند گم نشده‌اند؛ چیزهای قدیمی که نیرومند باشند از ریخت نمی‌افتند؛ یخبندان به ریشه‌های عمیق نمی‌رسد."
          author="J. R. R. TOLKIEN"
        />

        <div className=" p-5 text-[#545C6D] ">
          <p className="text-md">
            شخصیت‌های میانجی آرمانگرایانی واقعی
            هستند، همیشه به دنبال نشانه‌هایی از
            خوبی در حتی بدترین افراد و حوادث
            می‌گردند و در جستجوی راه‌هایی برای
            بهتر کردن اوضاع هستند. ممکن است
            میانجی‌گران را افرادی آرام، کم‌حرف یا
            حتی خجالتی تصور کرد، اما شعله‌ای درونی
            و شور و شوقی دارند که واقعاً می‌تواند
            بدرخشد. گونه شخصیتی میانجی فقط 4%
            جمعیت را تشکیل می‌دهد و متأسفانه خطر
            بروز سوءتفاهم برای آنها بالا است - اما
            وقتی افراد همفکر خود را پیدا می‌کنند
            تا وقتشان را با آنها بگذرانند، هماهنگی
            که احساس می‌کنند سرچشمه شادی و
            الهام‌بخشی است.
          </p>
        </div>

        <div className=" p-5 text-[#545C6D] mt-5">
          <h2 className="text-lg text-[#51596A] pb-5">
            ما می‌دانیم چه کسانی هستیم، اما
            نمی‌دانیم ممکن است چه کسانی باشیم
          </h2>
          <p className="text-md">
            میانجی‌گران براساس اصول خود عمل
            می‌کنند تا منطق، هیجان، یا عملی بودن
            مسائل. آنها در هنگام تصمیم‌گیری برای
            حرکت رو به جلو، در پی افتخار، زیبایی،
            اخلاق و فضیلت هستند - میانجی‎گران به
            واسطه خلوص نیت خود هدایت می‌شوند نه
            پاداش و مجازات. افراد دارای گونه
            شخصیتی میانجی به‌درستی به این کیفیت
            افتخار می‌کنند، اما همه افراد محرک
            پشتوانه این احساسات را درک نمی‌کنند و
            این امر می‌تواند به انزوا منجر شود.
          </p>
        </div>
        <figure className="m-10 flex justify-center">
          <img src={infpSvg} alt="" />
        </figure>
        <div className=" p-5 text-[#545C6D]">
          <p className="text-md">
            این ویژگی‌ها در بهترین حالت خود افراد
            دارای گونه شخصیتی میانجی را قادر به
            برقراری ارتباط عمیق با دیگران، صحبت
            کردن به‌سادگی با زبان استعاره و مثل، و
            درک و ایجاد نمادهایی برای در میان
            گذاشتن ایده‌های خود می‌سازد. میزان قوت
            این سبک ارتباطی شهودی تا سطح آثار هنری
            است و به همین دلیل جای تعجب نیست که
            بسیاری از میانجی‌گران معروف شاعر،
            نویسنده و بازیگر بوده‌اند. درک خود و
            جایگاه خود در جهان برای شخصیت میانجی
            مهم است، و آنها این ایده‌ها را با غرق
            کردن خود در کارشان بررسی می‌کنند.
          </p>
        </div>
        <div class="description-pullout-g">
          میانجی‌گران استعدادی برای ابراز خویش،
          آشکار کردن زیبایی و اسرار خود از طریق
          استعاره‌ها و شخصیت‌های داستانی دارند.
        </div>
        <div className=" p-5 text-[#545C6D]">
          <p className="text-md">
            توانایی زبانی میانجی‌گران در حد زبان
            مادری‌شان متوقف نمی‌ماند - آنها در
            هنگام آموختن زبان دوم (یا سوم!) نیز
            مستعد تلقی می‌شوند. استعداد
            میانجی‌گران در برقراری ارتباط به میل
            آنها برای هماهنگی نیز یاری می‌رساند و
            به این شخصیت‌ها کمک می‌کند وقتی مسیر
            خود را پیدا کردند رو به جلو حرکت کنند.
          </p>
        </div>

        <div></div>
      </section>
      <PersonTypes
        img1={tolkien}
        name1={'   J.R.R. Tolkien'}
        img2={shakespeare}
        name2={'  William Shakespeare '}
        img3={bjork}
        name3={'   Björk'}
        img4={alicia}
        name4={' Alicia Keys'}
      />
    </main>
  );
}

export default INTP;
