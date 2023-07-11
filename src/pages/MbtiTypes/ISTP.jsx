import React from 'react';
import istp from '../../images/istp.svg';
import istpSvg from '../../images/istpSvg.svg';
import './style.css';
import PersonTypes from './PersonTypes/PersonTypes';
import HeaderType from './Type/Type';
import eastwood from '../../images/eastwood.svg';
import jordan from '../../images/jordan.svg';
import bear from '../../images/bear.svg';
import wilde from '../../images/wilde.svg';

function ISTP() {
  return (
    <main>
      <HeaderType
        typeName={' چیره دست'}
        type={'ISTP-A / ISTP-T'}
        typeImg={istp}
      />

      <section className="container mx-auto  mt-10 p-20 font-medium   ">
        <h1 className="text-5xl text-[#51596A] pb-5">
          شخصیت چیره دست
        </h1>
        <div className=" p-5 text-[#545C6D] border-4 border-t-0 border-b-0 border-l-[#33A474] border-r-[#33A474] border-5">
          <p className="text-xl">
          می‌خواستم زندگی کنم، یک زندگی متفاوت. نمی‌خواستم 
          هر روز به همان محل قبلی بروم، همان آدمهای قبلی 
          را ببینم و همان کارهای قبلی را 
          انجام بدهم. می‌خواستم چالش‌های جالبی داشته باشم.
          </p>
          <span className="p-3 text-[#B5B5B5]">
          HARRISON FORD
          </span>
        </div>

        <div className=" p-5 text-[#545C6D] ">
          <p className="text-xl">
          چیره‌دستان عاشق اکتشاف با دست و چشم خود، 
          لمس کردن و بررسی کردن جهان اطراف با عقل 
          محض و روحیه کنجکاوی هستند. افراد دارای 
          این نوع شخصیت سازندگانی بالفطره هستند، در حال 
          رفتن از یک پروژه به سراغ پروژه بعدی، ساختن چیزهای مفید 
          و بیهوده برای لذت بردن از آن، و آموختن از محیط خود هستند. 
          شخصیت‌های چیره‌دست اغلب مکانیک و مهندس هستند که هیچ چیزی 
          برایشان شادی‌آورتر از کثیف کردن دستها و جدا کردن اجزا و 
          سر هم کردن دوباره آنها نیست، به‌طوری که کمی از قبل بهتر باشد.
          </p>
        </div>

        <div className=" p-5 text-[#545C6D] mt-5">
          <h2 className="text-5xl text-[#51596A] pb-5">
          جرأت متفاوت بودن
          </h2>
          <p className="text-xl">
          در حالی که طبیعت کم‌حرف و تمرکز چیره‌دستان بر 
          مسائل عملی باعث می‌شود این شخصیت‌ها در نگاه اول ساده 
          به نظر برسند، اما آنها در واقع افرادی کاملاً پیچیده‌اند. 
          شخصیت چیره‌دستان دوستانه اما بسیار خصوصی، آرام اما به‌طور 
          ناگهانی خودانگیخته، بسیار کنجکاو، اما قادر به متمرکز ماندن 
          بر تحصیلات رسمی است و پیش‌بینی آنها حتی توسط دوستان و عزیزانشان 
          چالش برانگیز است. چیره‌دستان ممکن است برای مدتی بسیار وفادار و 
          ثابت‌قدم به نظر برسند، اما معمولاً انرژی فراوانی در خود نگه می‌دارند 
          که بدون هشدار منفجر می‌شود و علایق آنها 
          را به مسیرهای جسورانه تازه‌ای هدایت می‌کند.
          </p>
        </div>
        <figure className="m-10">
          <img src={istpSvg} alt="" />
        </figure>
        <div className=" p-5 text-[#545C6D]">
          <p className="text-xl">
          تصمیمات چیره‌دستان از حس واقع گرایی عملی آنها ناشی می‌شود 
          و در قلبشان حس نیرومند انصاف وجود دارد، نگرش "چیزی را که 
          دوست نداری در مورد دیگران انجام مده"، واقعاً کمک می‌کند 
          بتوان بسیاری از صفات گیج‌کننده چیره‌دستان را توضیح داد. 
          افراد دارای شخصیت چیره‌دست بجای احتیاط بیش از حد و اجتناب 
          از وارد کردن درد و رنج به دیگران به احتمال زیاد پا را بسیار
           فراتر می‌گذارند و تلافی‌جویی متقابل را هم چه 
           خوب و چه بد می‌پذیرند زیرا آن را بخشی از بازی منصفانه می‌دانند.
          </p>
        </div>
        <div class="description-pullout-y">
        هرچند چیره‌دستان در هنگام بروز چنین تغییرات شدیدی به‌جای 
        امتحان کردن چشم‌اندازی تازه، صرفاً به بررسی دوام این علایق می‌پردازند.
        </div>
        <div className=" p-5 text-[#545C6D]">
          <p className="text-xl">
          پیدا کردن محیطی که بتوانند با دوستان خوبشان همکاری کنند، 
          کسانی که سبک و غیرقابل پیش‌بینی بودن آنها را درک نمایند، 
          استفاده از خلاقیت، حس شوخ‌طبعی و رویکرد عملی خود برای ایجاد 
          راه‌حل‌های عملی به شخصیت‌های چیره‌دست فرصت می‌دهد سال‌های سال با 
          شادمانی به ساخت جعبه‌های مفیدی بپردازند - و آنها از بیرون تحسین کنند.
          </p>
        </div>

        <div></div>
      </section>
      <PersonTypes
        img1={eastwood}
        name1={'Clint Eastwood'}
        img2={jordan}
        name2={'Michael Joran'}
        img3={bear}
        name3={'Bear Grylls'}
        img4={wilde}
        name4={'Olivia Wilde '}
      />
    </main>
  );
}

export default ISTP;
