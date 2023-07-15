import React from 'react';
import estp from '../../images/estp.svg';
import estpSvg from '../../images/estpSvg.svg';
import './style.css';
import PersonTypes from './PersonTypes/PersonTypes';
import HeaderType from './Type/Type';
import ernest from '../../images/ernest.svg';
import madona from '../../images/madonna.svg';
import jack from '../../images/jack.svg';
import murphy from '../../images/murphy.svg';
import GreatTalk from './GreatTalk/GreatTalk';

function ESTP() {
  return (
    <main>
      <HeaderType
        typeName={' کارآفرین'}
        type={'ESTP-A / ESTP-T'}
        typeImg={estp}
      />

      <section className="container mx-auto  mt-10 p-20 font-medium   ">
        <h1 className="text-3xl text-[#51596A] pb-5">
          شخصیت کارآفرین
        </h1>
        <GreatTalk
          text="زندگی یا ماجراجویی جسورانه است یا اساساً هیچ."
          author="HELEN KELLER"
        />

        <div className=" p-5 text-[#545C6D] ">
          <p className="text-md">
            گونه شخصیت کارآفرین همواره بر محیط
            بلافصل اطراف خود تأثیر دارد - بهترین
            راه برای تشخیص آنها در یک مهمانی است
            که دارند به‌سرعت از یک گروه به سراغ
            گروهی دیگر می‌روند. شخصیت‌های کارآفرین
            که با طنزی نافذ و زمینی موجبات خنده و
            سرگرمی را فراهم می‌کنند عاشق این هستند
            که در مرکز توجه باشند. اگر از یکی از
            حضار خواسته شود که به روی صحنه بیاید،
            کارآفرینان داوطلب می‌شوند - یا دوستان
            خجالتی خود را داوطلب می‌کنند.
          </p>
        </div>

        <div className=" p-5 text-[#545C6D] mt-5">
          <h2 className="text-lg text-[#51596A] pb-5">
            هرگز حرکت را با عمل اشتباه نگیر
          </h2>
          <p className="text-md">
            کارآفرینان محتمل‌ترین گونه شخصیتی
            هستند که ممکن است شیوه زندگی رفتار
            مخاطره‌آمیز را در پیش بگیرند. آن‌ها در
            لحظه زندگی می‌کنند و دست به عمل
            می‌زنند - آن‌ها ناحیه‌ای آرام در دل
            طوفان هستند. افراد دارای گونه شخصیتی
            کارآفرین از درام، شور، و لذت سرخوش
            می‌شوند نه به خاطر تحریک عاطفی، بلکه
            به دلیل اینکه برای ذهن منطقی آنها
            بسیار تحریک‌کننده است. آن‌ها مجبور به
            گرفتن تصمیماتی حیاتی بر اساس واقعیت
            آنی و در روند سریع پاسخگویی به
            محرک‌های منطقی هستند.
          </p>
        </div>
        <figure className="m-10">
          <img src={estpSvg} alt="" />
        </figure>
        <div className=" p-5 text-[#545C6D]">
          <p className="text-md">
            همچنین مسئله دیگر که برای افراد دارای
            گونه شخصیتی کارآفرین چالش‌برانگیز است
            این است که آنها ترجیح می‌دهند از
            قطب‌نمای اخلاقی خودشان استفاده کنند تا
            شخصی دیگر. قوانین ساخته شده‌اند تا زیر
            پا گذاشته شوند. این احساسی است که بعضی
            از معلمان دبیرستان یا سرپرستان سازمانی
            احتمالاً با آن هم‌عقیده هستند و
            می‌تواند برای شخصیت کارآفرین شهرتی دست
            و پا کند. اما اگر کارآفرینان
            مشکل‌آفرینی را به حداقل برسانند، از
            انرژی خود بهره‌برداری کرده و تمرکز خود
            را بر روی مسائل خسته‌کننده از دست
            ندهند، نیرویی محسوب می‌شوند که نباید
            آنها را نادیده گرفت.
          </p>
        </div>
        <div class="description-pullout-y">
          گاهی اوقات مشاهده و اقدام آنی کارآفرینان
          درست همان چیزی است که به آن نیاز است، به
          عنوان مثال در برخی از محیط‌های شرکتی و
          به‌خصوص در مواقع اضطراری.
        </div>

        <div className=" p-5 text-[#545C6D]">
          <p className="text-md">
            کارآفرینان پر از شور و انرژی هستند و
            ذهنی منطقی، هرچند گاهی اوقات پریشان
            دارند. افراد با این گونه شخصیتی به
            دلیل الهام‌بخش بودن، قانع‌کننده بودن و
            تنوع‌طلبی به‌طور ذاتی رهبران گروه
            هستند و همه را در مسیرهایی کمتر پیموده
            شده به دنبال خود می‌کشند، و هر جا
            بروند با خود زندگی و هیجان می‌برند.
            قرار دادن این کیفیت‌ها در خدمت هدفی
            سازنده و باارزش چالش واقعی کارآفرینان
            است.
          </p>
        </div>

        <div></div>
      </section>
      <PersonTypes
        img1={madona}
        name1={'Madona'}
        img2={murphy}
        name2={'Eddie Murphy'}
        img3={jack}
        name3={'Jack Nicholson'}
        img4={ernest}
        name4={'Ernest Hemingway'}
      />
    </main>
  );
}

export default ESTP;
