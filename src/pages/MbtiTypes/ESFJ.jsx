import React from 'react';
import esfj from '../../images/esfj.svg';
import esfjSvg from '../../images/esfjSvg.svg';
import './style.css';
import PersonTypes from './PersonTypes/PersonTypes';
import HeaderType from './Type/Type';
import harvey from '../../images/harvey.svg';
import clinton from '../../images/clinton.svg';
import garner from '../../images/garner.svg';
import swift from '../../images/swift.svg';
import GreatTalk from './GreatTalk/GreatTalk';

function ESFJ() {
  return (
    <main>
      <HeaderType
        typeName={' سفیر'}
        type={'ESFJ-A / ESFJ-T'}
        typeImg={esfj}
        color={'#4298B4'}
      />

      <section className="container mx-auto  mt-10 p-20 font-medium   ">
        <h1 className="text-3xl text-[#51596A] pb-5">
          شخصیت سفیر
        </h1>
        <GreatTalk
          text="یکدیگر را تشویق کنید، بالا ببرید و تقویت کنید. چرا که وقتی یک نفر انرژی مثبت را دریافت کند همه ما آن را احساس می‌کنیم."
          author="DEBORAH DAY"
        />

        <div className=" p-5 text-[#545C6D] ">
          <p className="text-md">
            باید گفت افراد دارای شخصیت مشاور
            پرطرفدار هستند - البته به این دلیل که
            کلمه بهتری نداریم - که از این بابت هم
            منطقی است که این گونه شخصیتی بسیار
            رایج است و تا دوازده درصد جمعیت را
            تشکیل می‌دهد. مشاوران در دبیرستان،
            سردسته تشویق‌کنندگان است که فضا را
            ایجاد می‌کنند خود را در معرض توجه قرار
            می‌دهند و تیم‌های خود را به سمت پیروزی
            و شهرت هدایت می‌کنند. مشاوران در ادامه
            زندگی خود همچنان از حمایت دوستان و
            عزیزانشان بهره می‌گیرند و به سازماندهی
            گردهمایی‌های اجتماعی می‌پردازند و هر
            کاری که بتوانند می‌کنند تا مطمئن شوند
            که همه راضی باشند.
          </p>
        </div>

        <div className=" p-5 text-[#545C6D] mt-5">
          <h2 className="text-lg text-[#51596A] pb-5">
            احترام گذاشتن به خرد رهبری
          </h2>
          <p className="text-md">
            مشاوران افراد نوع‌دوستی هستند و
            مسئولیت خود را برای کمک کردن و انجام
            کار درست جدی می‌گیرند. با این حال
            مشاوران، بر خلاف گونه‌های شخصیتی
            آرمان‌گراتر قطب‌نمای اخلاقی خود را بر
            مبنای سنن و قوانین حاکم تنظیم می‌کنند
            و به حفظ اقتدار و قوانین می‌پردازند تا
            اینکه بخواهند اخلاق خود را از فلسفه یا
            عرفان استخراج نمایند. با این همه، مهم
            است مشاوران به یاد داشته باشند که
            افراد دارای پیشینه‌ها و دیدگاه‌های
            مختلفی هستند و آنچه که ممکن است درست
            به نظر برسد همواره حقیقتی مطلق نیست.
          </p>
        </div>
        <figure className="m-10">
          <img src={esfjSvg} alt="" />
        </figure>
        <div className="p-5 text-[#545C6D]">
          <p className="text-md">
            احتمالاً بحث در مورد نظریه‌های علمی یا
            سیاست بین‌المللی برای مدت زمان طولانی
            علاقه مشاوران را برنمی‌انگیزد. مشاوران
            بیشتر به کارهای محسوس و عملی از جمله
            بهبود موقعیت اجتماعی خود و در نظر
            گرفتن افراد دیگر علاقه‌مند هستند.
            پیگیری آنچه که در اطرافشان اتفاق
            می‌افتد مهمترین روش گذران وقت برای
            شخصیت‌های مشاور است، اما در عین حال از
            قدرت خود نیز به‌خوبی استفاده می‌کنند.
          </p>
        </div>
        <div class="description-pullout-b">
          شخصیت مشاور در قلب خود موجودی اجتماعی
          است و خواستار به‌روز ماندن و انجام
          کارهایی است که دوستانش انجام می‌دهند.
        </div>

        <div className=" p-5 text-[#545C6D]">
          <p className="text-md">
            بزرگترین چالش مشاوران کنار آمدن با
            حساسیتشان است - سایر افراد مخالف هستند
            و انتقاد می‌کنند، درست است که چنین
            مسئله‌ای دردناک است اما بخشی از واقعیت
            زندگی است. بهترین کاری که فردی با گونه
            شخصیتی مشاور می‌تواند انجام بدهد این
            است که کاری را انجام دهد که به بهترین
            نحو قادر به انجام آن است: ایفای نقش
            الگو، مراقبت از آنچه که قدرت مراقبت از
            آن را دارد، و لذت بردن از اینکه خیلی
            از افراد قدردان زحمات وی هستند.
          </p>
        </div>

        <div></div>
      </section>
      <PersonTypes
        img1={harvey}
        name1={'Steve Harvey'}
        img2={clinton}
        name2={'Bill Clinton'}
        img3={garner}
        name3={'Jennifer Garner'}
        img4={swift}
        name4={'Taylor Swift'}
      />
    </main>
  );
}

export default ESFJ;
