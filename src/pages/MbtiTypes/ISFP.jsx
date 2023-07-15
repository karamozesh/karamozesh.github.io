import React from 'react';
import isfp from '../../images/isfp.svg';
import isfpSvg from '../../images/isfpSvg.svg';
import './style.css';
import PersonTypes from './PersonTypes/PersonTypes';
import HeaderType from './Type/Type';
import costner from '../../images/costner.svg';
import bts from '../../images/bts.svg';
import lavigne from '../../images/lavigne.svg';
import rey from '../../images/rey.svg';
import GreatTalk from './GreatTalk/GreatTalk';

function ISFP() {
  return (
    <main>
      <HeaderType
        typeName={' ماجراجو'}
        type={'ISFP-A / ISFP-T'}
        typeImg={isfp}
      />

      <section className="container mx-auto  mt-10 p-20 font-medium   ">
        <h1 className="text-4xl text-[#51596A] pb-5">
          شخصیت ماجراجو
        </h1>
        <GreatTalk
          text=" من در طول روز عوض می‌شوم. وقتی از خواب بیدار می‌شوم یک شخص هستم و وقتی می‌خواهم بخوابم مطمئنم که شخص دیگری شده‌ام."
          author="BOB DYLAN"
        />

        <div className=" p-5 text-[#545C6D] ">
          <p className="text-md">
            شخصیت ماجراجو هنرمندانی واقعی هستند،
            اما نه لزوماً به معنای متداول کلمه و
            اینکه در فضای باز به نقاشی درختانی
            کوچک مشغول باشند. اگرچه خیلی اوقات
            به‌خوبی می‌توانند چنین کاری را هم
            انجام بدهند. بلکه مسئله این است که
            آنها از زیبایی‌شناسی، طراحی و حتی
            انتخاب‌ها و اعمال خود برای فشار وارد
            کردن به محدودیت‌های قراردادهای اجتماعی
            بهره می‌گیرند. شخصیت‌های ماجراجو از
            پشت کردن به انتظارات سنتی با انجام
            آزمایش‌هایی در زمینه زیبایی و رفتار
            لذت می‌برند - احتمالاً بارها و بارها
            این عبارت را گفته‌اند که "مرا در قفس
            نینداز!"
          </p>
        </div>

        <div className=" p-5 text-[#545C6D] mt-5">
          <h2 className="text-lg text-[#51596A] pb-5">
            از آنچه که هستند خرسندند
          </h2>
          <p className="text-md">
            افراد ماجراجو در دنیایی نفسانی و
            رنگارنگ زندگی می‌کنند که از ارتباطات
            با افراد و ایده‌ها الهام گرفته باشد.
            شخصیت‌های ماجراجو از بازتفسیر این
            ارتباطات، ابداع دوباره و آزمودن خودشان
            و دیدگاه‌های جدید لذت می‌برند. هیچ نوع
            شخصیتی دیگری بیش از آنها به کنکاش و
            آزمایش به این طریق دست نمی‌زند. این
            امر حس خودانگیختگی را ایجاد می‌کند و
            باعث می‌شود افراد ماجراجو حتی برای
            دوستان نزدیک و عزیزان خود هم غیرقابل
            پیش‌بینی به نظر برسند.
          </p>
        </div>
        <figure className="m-10">
          <img src={isfpSvg} alt="" />
        </figure>
        <div className=" p-5 text-[#545C6D]">
          <p className="text-md">
            افراد ماجراجو در زندگی به دنبال پیدا
            کردن راه‌هایی برای پیشبرد اشتیاق خود
            هستند. رفتارهای پرمخاطره مانند
            قماربازی و ورزش‌های خطرناک در بین این
            نوع شخصیتی شایع‌تر است. خوشبختانه
            هم‌سویی آنها با لحظه و محیط به آنها
            این امکان را می‌دهد تا نسبت به سایرین
            عملکرد بهتری داشته باشند. افراد
            ماجراجو همچنین از برقراری ارتباط با
            دیگران لذت می‌برند و جذابیتی دارند که
            نمی‌توان در برابر آن مقاومت کرد.
          </p>
        </div>
        <div class="description-pullout-y">
          افراد ماجراجو همیشه می‌دانند که با تعریف
          و تمجید می‌توانند دل‌های افرادی که سعی
          می‌کنند اعمال مخاطره‌آمیز آنها را
          غیرمسئولانه یا بی‌پروایانه بدانند، نرم
          کنند.
        </div>

        <div className=" p-5 text-[#545C6D]">
          <p className="text-md">
            اگر این اهداف و اصول شرافت‌مندانه
            باشند، ممکن است افراد ماجراجو اعمالی
            توأم با بخشش و از خود گذشتگی
            شگفت‌انگیز انجام دهند - اما این احتمال
            هم وجود دارد که افراد دارای سنخ شخصیتی
            ماجراجو هویتی خودمحورانه برای خود دست
            و پا کنند و براساس خودخواهی، تقلب و
            خودپرستی دست به عمل بزنند. برای افراد
            ماجراجو مهم است به یاد داشته باشند که
            برای تبدیل شدن به شخصی که می‌خواهند
            باشند باید فعال باشند. ممکن است پدید
            آوردن و حفظ یک عادت جدید به‌طور طبیعی
            رخ ندهد، اما افراد دارای شخصیت ماجراجو
            با صرف وقت در هر روز برای درک
            انگیزه‌های خود می‌توانند از نقاط قوت
            خود استفاده کرده و هر آنچه که عاشق آن
            شده‌اند را دنبال کنند.
          </p>
        </div>

        <div></div>
      </section>
      <PersonTypes
        img1={costner}
        name1={'Kevin Costner'}
        img2={lavigne}
        name2={'Avril Lavigne'}
        img3={bts}
        name3={'Jungkook (Jeon Jungkook)'}
        img4={rey}
        name4={'Lana Del Rey'}
      />
    </main>
  );
}

export default ISFP;