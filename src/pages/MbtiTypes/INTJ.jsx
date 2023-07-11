import React from 'react';
import intj from '../../images/intj.svg';
import intjSvg from '../../images/intjSvg.svg';
import './style.css';
import PersonTypes from './PersonTypes/PersonTypes';
import HeaderType from './Type/Type';
import friedrich from '../../images/friedrich.svg';
import michelle from '../../images/michelle.svg';
import elon from '../../images/elon.svg';
import nolan from '../../images/nolan.svg';

function INTJ() {
  return (
    <main>
      <HeaderType
        typeName={' معمار'}
        type={'INTJ-A / INTJ-T'}
        typeImg={intj}
        color={'#88619A'}
      />

      <section className="container mx-auto  mt-10 p-20 font-medium   ">
        <h1 className="text-5xl text-[#51596A] pb-5">
          شخصیت معمار
        </h1>
        <div className=" p-5 text-[#545C6D] border-4 border-t-0 border-b-0 border-l-[#33A474] border-r-[#33A474] border-5">
          <p className="text-xl">
            شما حقی نسبت به دیدگاه خودتان ندارد.
            شما فقط در مورد دیدگاه آگاهانه خود محق
            هستید. هیچ کس حق ندارد نادان باشد.
          </p>
          <span className="p-3 text-[#B5B5B5]">
            HARLAN ELLISON
          </span>
        </div>

        <div className=" p-5 text-[#545C6D] ">
          <p className="text-xl">
            معماران به‌تنهایی در نوک قله قرار
            گرفته‌اند و یکی از کمیاب‌ترین و
            توانمندترین گونه‌های شخصیتی از حیث
            توانایی‌های استراتژیک هستند و به‌خوبی
            از این امر آگاهند. معماران تنها دو
            درصد جمعیت را تشکیل می‌دهند و زنان این
            گونه شخصیتی بسیار نادر هستند و فقط
            0.8% جمعیت را تشکیل می‌دهند - به همین
            دلیل اغلب اوقات پیدا کردن افراد همفکر
            که قادر باشند با روشن‌اندیشی بی حد و
            حصر و مانورهای شطرنج‌وار آنها برابری
            کنند کار دشواری است. افراد دارای گونه
            شخصیتی معمار اهل تخیل و در عین حال
            قاطع، بلندپرواز و در عین حال گوشه‌گیر
            و به شکلی شگفت‌آور کنجکاو هستند، اما
            انرژی خود را بیهوده هدر نمی‌دهند.
          </p>
        </div>

        <div className=" p-5 text-[#545C6D] mt-5">
          <h2 className="text-5xl text-[#51596A] pb-5">
            هیچ چیز نمی‌تواند منش و رویکرد صحیح را
            از دستیابی به اهدافش بازدارد
          </h2>
          <p className="text-xl">
            معماران به دلیل تشنگی ذاتی‌شان برای
            کسب دانش که خود را در اوایل زندگی نشان
            می‌دهد، اغلب کودکانی "خرخوان" لقب داده
            می‌شوند. اگرچه ممکن است این لقب از نظر
            همسالان نوعی توهین تلقی شود، اما آنها
            به احتمال زیاد با آن همدلی کرده و حتی
            به آن افتخار می‌کنند و از مجموعه
            گسترده و عمیق دانش خود بهره می‌برند.
            معماران همچنین از اینکه آنچه را
            می‌دانند به دیگران بگویند لذت می‌برند،
            از تسلط خود به موضوعات مورد انتخابشان
            مطمئن هستند، اما این شخصیت‌ها ترجیح
            می‌دهند به طراحی و اجرای طرحی درخشان
            در حوزه کاری خود بپردازند تا اینکه
            دیدگاه‌هایی در مورد مسائل فرعی
            "غیرجذاب" همچون شایعات را بپذیرند.
          </p>
        </div>
        <figure className="m-10">
          <img src={intjSvg} alt="" />
        </figure>
        <div className=" p-5 text-[#545C6D]">
          <p className="text-xl">
            پارادوکس آنها از دید اکثر ناظران این
            است که معماران می‌توانند با تناقض‌هایی
            آشکار به زندگی بپردازند - حداقل از
            دیدگاه صرفاً منطقی. به‌عنوان مثال،
            معماران همزمان هم رؤیاپردازترین
            آرمانگرایان و هم بدبین‌ترین بدبینان
            هستند، تعارضی که به ظاهر غیرممکن است.
            اما دلیل این امر آن است که افراد دارای
            گونه شخصیتی معمار باور دارند که با
            تلاش، هوش و ملاحظه، هیچ چیز غیرممکن
            است، در عین حال که معتقدند مردم خیلی
            تنبل، کوته‌بین یا خودخواه هستند و
            نمی‌توانند به این نتایج فوق‌العاده دست
            یابند. در عین حال چنین دیدگاه
            بدبینانه‌ای نسبت به واقعیت، مانع از آن
            نخواهد شد که معمار علاقه‌مند از
            دستیابی به نتیجه‌ای که به آن باور دارد
            دست بکشد.
          </p>
        </div>
        <div class="description-pullout">
          قوانین، محدودیت‌ها و سنت‌ها مورد نفرت
          گونه شخصیتی معمار هستند - همه چیز باید
          در معرض پرسش و ارزیابی مجدد قرار گیرد و
          اگر معماران راهی پیدا کنند، اغلب
          یک‌جانبه دست به کار می‌شوند و ایده‌ها و
          روش‌های خود را که از لحاظ فنی برتر،
          غیرمعمول و گاهی اوقات بی‌رحمانه و
          تقریباً همیشه غیرسنتی هستند را به اجرا
          می‌گذارند.
        </div>

        <div className=" p-5 text-[#545C6D]">
          <p className="text-xl">
            معماران اعتماد به نفس و هاله‌ای از رمز
            و راز از خود می‌پراکنند و مشاهدات
            روشنگر، ایده‌های اصیل و منطق
            توانمندشان آنها را قادر می‌سازد تنها
            با اراده مطلق و نیروی شخصیت خود تغییر
            ایجاد کنند. گاهی اوقات چنین به نظر
            می‌رسد که معماران دست به شالوده‌شکنی و
            بازسازی هر ایده و نظامی می‌زنند که با
            آن برخورد می‌کنند و در این زمینه حس
            کمال‌گرایی و حتی اخلاق را به کار
            می‌بندند. هر کسی که استعداد آن را
            نداشته باشد که با فرآیندهای معماران
            برابری کند یا بدتر از آن، متوجه
            منظورشان نشود به احتمال زیاد فوراً و
            برای همیشه احترام خود را از دست خواهد
            داد.
          </p>
        </div>

        <div></div>
      </section>
      <PersonTypes
        img1={friedrich}
        name1={'Friedrich Nietzsche'}
        img2={michelle}
        name2={'Michelle Obama'}
        img3={elon}
        name3={'Elon Musk'}
        img4={nolan}
        name4={'Christopher Nolan '}
      />
    </main>
  );
}

export default INTJ;
