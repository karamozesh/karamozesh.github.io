import React, { useRef, useEffect } from 'react';
import SkillSection from './UI/SkiilSection';
import SkillRoad from './UI/SkillRoad';
import bg from '../../asset/images/bg.png';
import pythonR from '../../asset/images/python 1.png';
import bg2 from '../../asset/images/bg2.png';
import bg3 from '../../asset/images/Group 444.png';
import bg4 from '../../asset/images/Teleportation-pana 3.png';
import bg5 from '../../asset/images/Teleportation-pana 2.png';
import bg6 from '../../asset/images/Group 445.png';
import bg7 from '../../asset/images/Group 446.png';
import bg8 from '../../asset/images/Group 447.png';
import Button from '../../components/UI/Button';
import useObserver from '../../hooks/use-observer';

function Python() {
  const navbarRef = useRef(null);
  const observeLineRef = useRef(null);
  const top1Ref = useRef(null);
  const top2Ref = useRef(null);
  const top3Ref = useRef(null);
  const top4Ref = useRef(null);
  const top5Ref = useRef(null);
  const top6Ref = useRef(null);

  useObserver(navbarRef, observeLineRef);

  return (
    <section className="mx-auto flex flex-col">
      <div className="bg-line bg-no-repeat">
        <h1 className="inline-block p-10 ">
          پایتون{' '}
        </h1>
      </div>

      <SkillSection
        explain={
          'پایتون یک زبان برنامه‌نویسی شیءگرا، تفسیری، سطح بالا، و همه منظوره است، که خیدو فان روسوم آن را طراحی کرده‌است، و اولین بار در سال ۱۹۹۱ منتشر شده‌است. نام پایتون از علاقه خاص خالق آن به مجموعه کمدی تلویزیونی Monty Python گرفته شده است. فلسفه اصلی طراحی پایتون «خوانایی بالای کد» است.'
        }
      ></SkillSection>

      <div ref={observeLineRef}></div>
      <section
        className="flex sticky top-0 gap-5 justify-center mx-auto w-full mt-8 z-20 py-5 bg-white/80"
        ref={navbarRef}
      >
        <div className="bg-dotted bg-no-repeat bg-center flex sticky top-0 gap-5 justify-center mx-auto w-full">
          <SkillRoad
            refTitle={top1Ref}
            title={
              'کاربرد پایتون در دنیای برنامه نویسی'
            }
          />

          <SkillRoad
            title={'اهمیت یادگیری و کاربرد ها'}
            refTitle={top2Ref}
          />
          <SkillRoad
            title={'منابع یادگیری'}
            refTitle={top3Ref}
          />
          <SkillRoad
            title={'ایده پروژه برای تمرین'}
            refTitle={top4Ref}
          />
          <SkillRoad
            title={'نقشه راه'}
            refTitle={top5Ref}
          />

          <SkillRoad
            title={'پروژه های متن باز معروف'}
            refTitle={top6Ref}
          />
        </div>
      </section>
      <section className="inline-block z-10">
        {' '}
        <img
          src={bg}
          className="w-[10%] -mt-7 float-left"
          alt=""
        />
      </section>

      <section className="container mx-auto">
        <h2
          id="6"
          className="inline-block px-10"
          ref={top1Ref}
        >
          کاربرد پایتون در دنیای برنامه نویسی
          چیست؟
        </h2>
        <p className="px-10 text-xs leading-7">
          کلمات کلیدی و اصلی این زبان به‌صورت
          حداقلی تهیه شده‌اند و در مقابل
          کتابخانه‌هایی که در اختیار کاربر است
          بسیار وسیع هستند. سینتکس ساده و قابل
          فهم، راه حل‌های مؤثر و ابزارهای قدرتمندی
          که در اختیار برنامه‌نویسان قرار می‌دهد،
          پایتون را به یکی از محبوب‌ترین زبان‌های
          برنامه‌نویسی تبدیل کرده است. همچنین،
          پایتون به عنوان یک زبان چندمنظوره شناخته
          می‌شود که برای توسعه وب، تحلیل داده، هوش
          مصنوعی، اتوماسیون، ایجاد برنامه‌های سمت
          سرور و دسکتاپ، و بسیاری از کاربردهای
          دیگر استفاده می‌شود.
          <br />
          <br />
          <img
            src={bg6}
            alt=""
            className="-ml-4 w-32 float-left"
          />
          <h2
            id="5"
            className="inline-block"
            ref={top2Ref}
          >
            اهمیت یادگیری و کاربردها:
          </h2>
          <br />
          یادگیری و استفاده از زبان برنامه‌نویسی
          پایتون در دنیای امروز بسیار مهم است.
          پایتون یک زبان برنامه‌نویسی قدرتمند و
          ساده است که برای حل مسائل مختلف، توسعه
          وب، علم داده، هوش مصنوعی و بسیاری از
          زمینه‌های دیگر استفاده می‌شود. در زیر به
          برخی از اهمیت‌ها و کاربردهای پایتون
          اشاره می‌کنم:
          <br />
          <br />
          1• سادگی و خوانایی: پایتون با نحوه نوشتن
          خود و استفاده از سینتکسی ساده، برای شروع
          کردن به یادگیری زبان برنامه‌نویسی بسیار
          مناسب است. این زبان برنامه‌نویسی خوانایی
          بالا و ساختار کدی قابل فهم را ارائه
          می‌دهد.
          <br />
          <br />
          2• پایتون در دانشگاه‌ها و صنعت: پایتون
          به عنوان یکی از زبان‌های برنامه‌نویسی
          محبوب در دانشگاه‌ها استفاده می‌شود و
          برای تدریس مباحث مختلفی از جمله علم
          داده، هوش مصنوعی و برنامه‌نویسی وب به
          کار می‌رود. همچنین، صنعت نیز از پایتون
          به عنوان یک زبان پرکاربرد برای توسعه
          نرم‌افزارها استفاده می‌کند.
          <br />
          <br />
          3• علم داده و هوش مصنوعی: با استفاده از
          کتابخانه‌های قدرتمندی مانند NumPy،
          Pandas، Matplotlib و Scikit-learn،
          پایتون به راحتی قابلیت‌های محاسبات
          آماری، تجزیه و تحلیل داده‌ها و ساخت
          ماشین‌های یادگیری ماشین را فراهم می‌کند.
          <br />
          <br />
          4• توسعه وب: پایتون با فریمورک‌هایی
          مانند Django و Flask، به راحتی قابلیت
          توسعه وب‌سایت‌ها و بک‌اند آن‌ها را فراهم
          می‌کند. این زبان برنامه‌نویسی به دلیل
          سادگی و قابلیت استفاده در توسعه وب،
          بسیار محبوب است.
          <br />
          <br />
          5• اپلیکیشن‌های موبایل و توسعه بازی: با
          استفاده از چارچوب‌هایی مانند Kivy و
          Pygame، پایتون قابلیت توسعه اپلیکیشن‌های
          موبایل و بازی‌ها را نیز داراست. این امر
          به برنامه‌نویسان اجازه می‌دهد تا با
          استفاده از یک زبان برنامه‌نویسی مشترک،
          برای سیستم‌عامل‌های مختلف اپلیکیشن‌ها و
          بازی‌های خود را توسعه دهند.
          <br />
          <br />
          6• امنیت و تست نرم‌افزار: پایتون برای
          تست نرم‌افزارها و تحلیل امنیتی استفاده
          می‌شود. کتابخانه‌هایی مانند Selenium و
          PyTest به برنامه‌نویسان کمک می‌کنند تا
          تست‌های خودکار نرم‌افزارها را انجام دهند
          و مشکلات احتمالی را شناسایی کنند.
          <br />
          <br />
          7• اینترنت اشیا (IoT): با استفاده از
          پایتون و پروتکل MQTT، می‌توانید
          دستگاه‌های مختلف اینترنت اشیا را کنترل و
          مدیریت کنید. پایتون به عنوان یک زبان
          ساده و قابل فهم برای توسعه دستگاه‌های
          متصل به شبکه مورد استفاده قرار می‌گیرد.
          <br />
          <br />
          8• روباتیک: در زمینه روباتیک نیز پایتون
          استفاده می‌شود. کتابخانه‌هایی مانند
          PyRobot و ROSPy به برنامه‌نویسان امکان
          کنترل و برنامه‌نویسی ربات‌ها را در
          پایتون می‌دهند.
          <br />
          <br />
          9• توسعه نرم‌افزارهای عمومی: پایتون به
          عنوان یک زبان برنامه‌نویسی چندمنظوره،
          برای توسعه نرم‌افزارهای مختلف مانند
          ابزارهای مدیریت پروژه، ابزارهای تحلیل
          داده و نرم‌افزارهای گرافیکی استفاده
          می‌شود.
          <br />
          <br />
          با توجه به این کاربردها، می‌توان درک کرد
          که پایتون یک زبان برنامه‌نویسی بسیار
          گسترده و قدرتمند است که در صنعت فناوری
          اطلاعات و علوم رایانه مورد توجه قرار
          گرفته است.
        </p>
      </section>

      <section className="container mx-auto -mb-32">
        <img
          src={bg2}
          alt=""
          className="w-36 float-left mr-8"
        />
        <br />
        <h2
          id="4"
          className="inline-block px-10"
          ref={top3Ref}
        >
          منابع یادگیری{' '}
        </h2>
        <p className="px-10 text-xs leading-7">
          <a
            className=" text-emerald-400"
            href="https://docs.python.org/3/tutorial/index.html"
          >
            سایت اصلی پایتون
          </a>
          <br />
          <a
            className=" text-emerald-400"
            href="https://www.w3schools.com/python/"
          >
            W3schools
          </a>
          <br />
          <a
            className=" text-emerald-400"
            href="https://www.learnpython.org"
          >
            learnpython
          </a>
          <br />
          <a
            className=" text-emerald-400"
            href="https://www.youtube.com/watch?v=eXBD2bB9-RA&list=PLQVvvaa0QuDeAams7fkdcwOGBpGdHpXln"
          >
            فیلم آموزشی stendex در Youtube
          </a>
          <br />
          <a
            className=" text-emerald-400"
            href="https://www.youtube.com/watch?v=YYXdXT2l-Gg&list=PL-osiE80TeTskrapNbzXhwoFUiLCjGgY7"
          >
            فیلم آموزشی stendex در Youtube
          </a>
          <br />
          <br />
        </p>
        <h2
          className="inline-block px-10 "
          ref={top4Ref}
        >
          ایده پروژه برای تمرین:
        </h2>
        <p className="px-10 text-xs leading-7">
          بهترین راه برای تمرین و پیاده‌سازی
          مهارت‌های پایتون، انجام پروژه‌های عملی
          است. در زیر چند پروژه تمرینی را برای شما
          فراهم کرده‌ام:
          <br />
          • ماشین حساب ساده: یک برنامه ساده
          بنویسید که اعداد را به عنوان ورودی
          دریافت کرده و عملیات‌های اصلی ریاضی
          (جمع، تفریق، ضرب و تقسیم) را انجام دهد.
          <br />
          <br />
          • مدیریت دفترچه تلفن: یک برنامه بنویسید
          که امکان اضافه کردن، حذف و جستجوی
          مخاطبین در دفترچه تلفن را فراهم کند. این
          برنامه باید از لیست یا دیکشنری برای
          ذخیره اطلاعات استفاده کند.
          <br />
          <br />
          • تبدیل درجه سلسیوس به فارنهایت: یک
          برنامه بنویسید که دما را به عنوان ورودی
          دریافت کرده و آن را از واحد سلسیوس به
          فارنهایت تبدیل کند و نتیجه را نمایش دهد.
          <br />
          <br />
          • بازی حدس عدد: یک برنامه بنویسید که یک
          عدد رندم را انتخاب کند و به کاربر اجازه
          دهد عدد را حدس بزند. برنامه باید نشان
          دهد که آیا حدس کاربر بزرگتر یا کوچکتر از
          عدد مورد نظر است.
          <br />
          <br />
          • برنامه‌ای برای محاسبه معکوس یک رشته:
          یک برنامه بنویسید که یک رشته را به عنوان
          ورودی دریافت کرده و معکوس آن را
          برگرداند. این پروژه‌ها تنها نمونه‌هایی
          هستند و می‌توانید با تغییر و توسعه آنها،
          پروژه‌های خود را ایجاد کنید. همچنین،
          منابع آموزشی آنلاین مثل Codecademy و
          Coursera نیز می‌توانند برای شما منابع
          خوبی باشند تا مهارت‌های پایتون خود را
          بهبود دهید.
          <br />
          <br />
        </p>

        <img
          src={bg3}
          alt=""
          className="w-[48%] float-left mb-16 "
        />
      </section>

      <h2
        id="2"
        className="inline-block px-10"
        ref={top5Ref}
      >
        {' '}
        نقشه راه
      </h2>
      <section className="mx-auto w-[96%] flex justify-center">
        <img
          src={pythonR}
          alt=""
          className="w-full mr-8"
        />
      </section>
      <section className="mx-auto w-[96%] ">
        <img
          src={bg4}
          alt=""
          className="inline w-14  float-left"
        />
        <img
          src={bg5}
          alt=""
          className="inline w-16 mr-10 float-right"
        />
      </section>
      <section>
        <h2
          id="1"
          className="inline-block px-10"
          ref={top6Ref}
        >
          پروژه های متن باز معروف:
        </h2>
        <p className="px-10 text-xs leading-7">
          <br /> در محیط توسعه پایتون، پروژه‌های
          متن باز بزرگ و تأثیرگذار زیادی وجود
          دارند که می‌توانید بر روی آنها کار کنید
          و به اهداف خود در حوزه‌های مختلف
          نرم‌افزاری دست یابید. در زیر چند نمونه
          از این پروژه‌ها را برای شما فراهم
          کرده‌ام:
          <br />
          <br /> Django: یک چارچوب توسعه وب
          قدرتمند بر پایه پایتون است که برای ساخت
          وب‌سایت‌ها و برنامه‌های تحت وب استفاده
          می‌شود. می‌توانید با استفاده از Django،
          وب‌سایت‌هایی با ویژگی‌های پیچیده مانند
          سیستم‌های مدیریت محتوا (CMS) و بازار
          آنلاین را پیاده‌سازی کنید.
          <br />
          <br /> TensorFlow: یک کتابخانه محاسبات
          عددی باز برای یادگیری عمیق است.
          TensorFlow به شما امکان می‌دهد
          الگوریتم‌های یادگیری عمیق را بر روی
          داده‌های خود اجرا کنید و مدل‌های هوش
          مصنوعی پیچیده را آموزش دهید. با استفاده
          از TensorFlow، می‌توانید به تحقیقات در
          حوزه هوش مصنوعی، پردازش تصویر، پردازش
          زبان طبیعی و سایر حوزه‌های مرتبط
          بپردازید.
          <br />
          <br /> Pandas: یک کتابخانه پردازش و
          تحلیل داده باز برای پایتون است. با
          استفاده از Pandas، می‌توانید داده‌های
          جدولی را به سرعت و بهره‌وری بالا
          بارگیری، تحلیل و تبدیل کنید. این
          کتابخانه به شما امکان می‌دهد عملیات
          مانند فیلتر کردن و مرتب‌سازی داده‌ها،
          ایجاد نمودارها و پردازش داده‌های بزرگ را
          به راحتی انجام دهید.
          <br />
          <br /> Scikit-learn: یک کتابخانه یادگیری
          ماشینی برای پایتون است. با استفاده از
          Scikit-learn، می‌توانید الگوریتم‌های
          یادگیری ماشینی را بر روی داده‌های خود
          اجرا کنید و به تحلیل داده‌ها، پیش‌بینی و
          تصمیم‌گیری بپردازید. این کتابخانه شامل
          رده‌بندی، خوشه‌بندی، رگرسیون و بسیاری از
          تکنیک‌های دیگر یادگیری ماشینی است.
          <br />
          <br /> Flask: یک چارچوب سبک و ساده برای
          توسعه برنامه توسعه وب با استفاده از
          پایتون. Flask به شما امکان می‌دهد
          برنامه‌های تحت وب ساده و قابل اجرا را با
          حداقل تنظیمات پیاده‌سازی کنید.
          <br />
          <br /> Pygame: یک کتابخانه متن باز برای
          توسعه بازی‌های رایانه‌ای است. با استفاده
          از Pygame، می‌توانید صحنه‌های بازی،
          شخصیت‌ها، صداها و جلوه‌های ویژه را
          پیاده‌سازی کنید و بازی‌های خلاقانه خود
          را بسازید.
          <br />
          <br /> Requests: یک کتابخانه سبک و ساده
          برای درخواست و پاسخ به وب سرویس‌ها است.
          با استفاده از Requests، می‌توانید
          اطلاعات را از APIها دریافت کنید،
          درخواست‌های POST و GET را ارسال کنید و
          با داده‌های JSON و XML کار کنید.
          <br />
          <br /> Matplotlib: یک کتابخانه تصویرسازی
          برای پایتون است. با استفاده از
          Matplotlib، می‌توانید نمودارها،
          نمایش‌های داده‌های آماری و تصاویر دیگر
          را بسازید و به تجزیه و تحلیل داده‌ها کمک
          کنید.
          <br />
          <br />
        </p>
      </section>
      <section>
        <img
          src={bg7}
          alt=""
          className="  -mt-80"
        />
      </section>

      <section className=" -mt-16">
        <h1 className="mr-16">نظرات کاربران</h1>
        <ul className="mt-4 mr-16 font-normal text-sm">
          <li>
            قبل از مطرح کردن هرگونه سوال ، بخش
            سوالات دیگران را مطالعه نمایید.
          </li>
          <li>
            در صورت وجود هرگونه مشکل از طریق بخش
            تیکت ها ، مشکل خود را پیگیری نمایید.
          </li>
          <li>
            کامنت خود را بصورت فارسی تایپ نمایید.
            از به کار بردن کلمات رکیک یا توهین
            آمیز خودداری نمایید.
            <br /> در صورت مشاهده کامنت تایید
            نمیشود.
          </li>
        </ul>
        <div className="w-[90%]">
          <textarea
            name=""
            id=""
            cols="60"
            rows="10"
            className=" mr-44 bg-gray-200"
          ></textarea>
          <br />
          <img
            src={bg8}
            className=" -mt-10 "
            alt=""
          />
          <Button className=" -mt-36 ml-60 float-left">
            ارسال دیدگاه
          </Button>
        </div>
      </section>
    </section>
  );
}

export default Python;
