import React, { useRef, useEffect } from 'react';
import SkillSection from './UI/SkiilSection';
import SkillRoad from './UI/SkillRoad';
import bg from '../../asset/images/bg.png';
import roadmap from '../../asset/images/jsssssss 1.png';
import bg2 from '../../asset/images/bg2.png';
import bg3 from '../../asset/images/Group 444.png';
import bg4 from '../../asset/images/Teleportation-pana 3.png';
import bg5 from '../../asset/images/Teleportation-pana 2.png';
import bg6 from '../../asset/images/Group 445.png';
import bg7 from '../../asset/images/Group 446.png';
import bg8 from '../../asset/images/Group 447.png';
import Button from '../../components/UI/Button';
import bg9 from '../../asset/images/Group 372.png';
import Title from '../../components/Title';
import useObserver from '../../hooks/use-observer';

function Js() {
  const navbarRef = useRef(null);
  const observeLineRef = useRef(null);
  const top1Ref = useRef(null);
  const top2Ref = useRef(null);
  const top3Ref = useRef(null);
  const top4Ref = useRef(null);
  const top5Ref = useRef(null);
  const top6Ref = useRef(null);
  const top7Ref = useRef(null);

  useObserver(navbarRef, observeLineRef);

  return (
    <section className="mx-auto flex flex-col">
      <div className="bg-line bg-no-repeat">
        <h1 className="inline-block p-10 ">
          جاوا اسکریپت
        </h1>
      </div>
      <SkillSection
        explain={
          'جاوا اسکریپت یک زبان برنامه نویسی محبوب است که برای ایجاد صفحات وب پویا و تعاملی استفاده می شود. این به توسعه دهندگان اجازه می دهد تا عملکرد و تعامل را به وب سایت های خود اضافه کنند و آنها را جذاب تر و کاربر پسندتر کند.این زبان دارای کتابخانه‌ها و فریمورک‌های گسترده و متنوعی است که علاوه بر طراحی صفحات وب تعاملی، در ساخت نرم افزار‌های دسکتاپ، اپلیکیشن‌ها، برنامه نویسی سمت کاربر ،برنامه نویسی سمت سرور ، بازی‌ها و … نیز کاربرد دارد.برای مبتدیان، مهم است که با اصول اولیه جاوا اسکریپت مانند متغیرها، انواع داده ها، عملگرها و ساختارهای کنترل شروع کنند. هنگامی که یک پایه قوی در این مفاهیم دارید، می توانید به موضوعات پیشرفته تری مانند توابع، اشیا و آرایه ها بروید.'
        }
      ></SkillSection>
      <div
        className="mt-8"
        ref={observeLineRef}
      ></div>
      <section
        className="flex sticky top-0 gap-5 justify-center mx-auto w-full z-20 py-5 bg-white/80"
        ref={navbarRef}
      >
        <div className="bg-dotted bg-no-repeat bg-center flex sticky top-0 gap-5 justify-center mx-auto w-full">
          <SkillRoad
            refTitle={top1Ref}
            title={
              'کاربرد جاوا اسکریپت در دنیای برنامه نویسی'
            }
          />
          <SkillRoad
            refTitle={top2Ref}
            title={'شروع کار با جاوا اسکریپت'}
          />
          <SkillRoad
            refTitle={top3Ref}
            title={'نقشه راه'}
          />
          <SkillRoad
            refTitle={top4Ref}
            title={'آینده جاوا اسکریپت'}
          />
          <SkillRoad
            refTitle={top5Ref}
            title={
              'دلیل برای یادگیری جاوا اسکریپت'
            }
          />
          <SkillRoad
            refTitle={top6Ref}
            title={'نقاط ضعف جاوا اسکریپت'}
          />

          <SkillRoad
            refTitle={top7Ref}
            title={'نتیجه'}
          />
        </div>
      </section>
      <div className="relative mb-[150px]">
        <img
          src={bg}
          className="absolute left-0 w-[10%] -mt-7"
          alt=""
        />
      </div>
      <section className="container mx-auto ">
        <h2
          id="1"
          className="inline-block px-10 "
          ref={top1Ref}
        >
          کاربرد جاوا اسکریپت در دنیای برنامه
          نویسی چیست؟
        </h2>
        <p className="px-10 text-xs leading-7">
          نسخه های اولیه زبان اسکریپت فقط برای
          استفاده داخلی بود. پس از اینکه نت اسکیپ
          آن را به عنوان یک مشخصات استاندارد برای
          مرورگرهای وب به ECMA International ارائه
          کرد، جاوا اسکریپت پیشگام انتشار
          ECMAScript بود. یک زبان برنامه نویسی همه
          منظوره برای اطمینان از قابلیت همکاری
          صفحات وب در مرورگرها و دستگاه های مختلف.
          پیش‌تر به محبوبیت زبان جاوا اسکریپت
          اشاره کردیم. این محبوبیت بی دلیل نیست
          چرا که با این زبانِ شی گرا شما قادر
          خواهید بود تا سایت‌های بی‌روح خود را جان
          بخشی کنید و با کاربران خود تعامل داشته
          باشید. یعنی می‌توانید فایل‌های انیمیشنی،
          صوتی و تصویری را روی سایت خود به نمایش
          بگذارید. همچنین می‌توانید روی سایت‌تان
          تایمر قرار دهید، رنگ‌ها را با حرکت موس
          تغییر دهید و بسیاری کارهای دیگر که باعث
          جذابیت بیشتر صفحات وب می‌شوند. اما این
          تمام چیزی نیست که جاوا اسکریپت در اختیار
          شما قرار می‌دهد. شما با استفاده از این
          زبان می‌توانید شروع به ساخت برنامه‌های
          وب و موبایل و دسکتاپ کنید. برای این
          منظور می‌توانید از فریم‌ورک‌های مختلف
          JavaScript که مجموعه‌ای از کتابخانه‌ها
          را در اختیار شما قرار می‌دهند استفاده
          کنید. امروزه جاوا اسکریپت دارای چارچوب
          ها و کتابخانه های زیادی برای ساده سازی
          پروژه های پیچیده مانند AngularJS، jQuery
          و ReactJS است. در حالی که بیشتر به
          برنامه های مبتنی بر وب پاسخ می دهد،
          ویژگی های برنامه نویسی جاوا اسکریپت
          پیاده سازی های دیگری در زمینه های مختلف
          دارد. در زیر چندین کاربرد اساسی جاوا
          اسکریپت آورده شده است.
          <br />
          <br />
          1. برنامه های وب و موبایل توسعه چارچوب
          های جاوا اسکریپت، متشکل از کتابخانه های
          کد جاوا اسکریپت، به توسعه دهندگان اجازه
          می دهد تا از کدهای جاوا اسکریپت از پیش
          نوشته شده در پروژه های خود استفاده کنند.
          این باعث صرفه جویی در زمان و تلاش آنها
          می شود تا مجبور باشند ویژگی های برنامه
          نویسی را از ابتدا کدنویسی کنند. هر فریم
          ورک جاوا اسکریپت دارای ویژگی هایی است که
          هدف آن ساده سازی فرآیند توسعه و اشکال
          زدایی است. به عنوان مثال، فریم‌ورک‌های
          جاوا اسکریپت جلویی مانند jQuery و
          ReactJS کارایی طراحی را بهبود می‌بخشند.
          آنها به توسعه دهندگان این امکان را می
          دهند تا بدون تأثیر بر یکدیگر، عملکرد یا
          ارزش، مجدداً از مؤلفه های کد استفاده
          کرده و به روز کنند. در همین حال،
          فریمورک‌های توسعه اپلیکیشن موبایل مانند
          Cordova و Titanium امکان ایجاد
          اپلیکیشن‌های بومی یا ترکیبی را فراهم
          می‌کنند. پیاده سازی کد جاوا اسکریپت در
          Node.js نیز نقش مهمی در توسعه وب دارد.
          Node.js به دلیل ماهیت تک رشته ای و
          معماری غیر مسدود کننده می تواند زمان
          پاسخگویی سرور را کاهش دهد و تاخیرها را
          حذف کند. Node.js همچنین به اندازه کافی
          سبک است تا به عنوان یک ابزار مقیاس پذیر
          برای میکروسرویس ها عمل کند و به شما
          امکان می دهد یک برنامه واحد شامل سرویس
          های کوچک با فرآیندهای جداگانه توسعه
          دهید.
          <br />
          <br />
          2. ساختن وب سرورها و برنامه های کاربردی
          سرور از طریق Node.js، جاوا اسکریپت به
          توسعه‌دهندگان اجازه می‌دهد تا سرورهای وب
          و زیرساخت‌های بک‌اند بسازند و در زمان و
          تلاش شما در ایجاد وب سرور صرفه‌جویی
          کنند. ماژول HTTP داخلی به شما امکان می
          دهد یک سرور HTTP پایه ایجاد کنید که متن
          ساده را هنگام دسترسی کاربران به یک صفحه
          وب نمایش می دهد. می‌توانید از وب سرور
          Node.js، Node-OS یا سرورهای شخص ثالث
          مانند Microsoft Internet Information
          Services (IIS) و Apache برای رسیدگی به
          درخواست‌های HTTP استفاده کنید. به خاطر
          داشته باشید که Node-OS بر روی سیستم عامل
          های لینوکس بهترین عملکرد را دارد زیرا بر
          روی هسته لینوکس ساخته شده است.
          <br />
          <br />
          3. رفتار تعاملی در وب سایت ها یکی از
          عملکردهای اصلی جاوا اسکریپت افزودن
          پویایی به صفحات وب است. این شامل نمایش
          انیمیشن ها، تغییر قابلیت مشاهده متن و
          ایجاد منوهای کشویی است.در حالی که شما می
          توانید تنها از کدهای HTML و CSS برای
          ساخت یک وب سایت استفاده کنید، اما فقط یک
          صفحه نمایش ثابت خواهد داشت. با جاوا
          اسکریپت، کاربر می تواند با صفحات وب
          تعامل داشته باشد و تجربه مرور بهتری
          داشته باشد.علاوه بر این، جاوا اسکریپت به
          شما امکان می دهد محتوای HTML و مقادیر
          ویژگی ها را بدون بارگیری مجدد صفحه وب
          تغییر دهید. با جاوا اسکریپت، می توانید
          تجربه مرور وب کاربران را با استفاده از
          کوکی ها نیز بهبود بخشید. ایجاد، خواندن و
          حذف کوکی ها در جاوا اسکریپت به ویژگی
          document.cookie نیاز دارد که به عنوان
          گیرنده و تنظیم کننده مقادیر کوکی ها عمل
          می کند.
          <br />
          <br />
          4. توسعه بازی جاوا اسکریپت اگر با HTML5
          و یک رابط برنامه نویسی کاربردی (API)
          مانند WebGL استفاده شود، می تواند به شما
          در ساخت یک بازی کمک کند. بسیاری از
          موتورهای بازی مبتنی بر جاوا اسکریپت
          مانند Phaser، GDevelop و Kiwi.js برای
          رندر کردن گرافیک، بازیافت کد و
          برنامه‌های چند پلتفرمی در دسترس هستند.
          برخی از بازی های ساخته شده با موتورهای
          بازی جاوا اسکریپت عبارتند از Angry
          Birds، The Wizard و 2048. به صورت کلی
          می‌توان کاربردهای زبان جاوا اسکریپت را
          به صورت زیر بیان کرد : · برنامه نویسی
          فرانت اند · برنامه نویسی بک اند با جاوا
          اسکریپت · برنامه نویسی نرم افزارهای
          موبایل · برنامه نویسی نرم افزارهای
          دسکتاپ
        </p>
      </section>
      <section className=""></section>
      <section className="container mx-auto ">
        <img
          src={bg2}
          className="w-[15%] float-left"
          alt=""
        />
        <br />
        <br /> <br />
        <h2
          id="2"
          className="inline-block px-10 "
          ref={top2Ref}
        >
          شروع کار با جاوا اسکریپت
        </h2>
        <p className="px-10 text-xs leading-7">
          برای شروع یادگیری جاوا اسکریپت، باید درک
          اولیه ای از HTML و CSS داشته باشید.
          هنگامی که به درک خوبی رسیدید، می توانید
          به جاوا اسکریپت بروید و شروع به نوشتن
          اسکریپت های خود کنید. منابع زیادی به
          صورت آنلاین برای کمک به یادگیری جاوا
          اسکریپت موجود است، از جمله آموزش ها،
          فیلم ها و دوره های آنلاین. مهم است که به
          طور منظم تمرین کنید و تکنیک های مختلف
          کدنویسی را برای بهبود مهارت های خود
          آزمایش کنید. بهترین سایت‌های آموزش جاوا
          اسکریپت عبارتند از:
          <br />
          <a
            className=" text-emerald-400"
            href=""
          >
            JavaScript.com
          </a>
          <br />
          <a
            className=" text-emerald-400"
            href=""
          >
            W3schools
          </a>
          <br />
          <a
            className=" text-emerald-400"
            href=""
          >
            {' '}
            Mozilla Developer Network
          </a>
          <br />
          بهترین سایت‌های آموزش جاوا اسکریپت به
          زبان فارسی عبارتند از:
          <br />
          <a
            className=" text-emerald-400"
            href=""
          >
            آکادمی آموزش برنامه‌نویسی سبزلرن
          </a>
          <br />
          <a
            className=" text-emerald-400"
            href=""
          >
            آموزش جاوا اسکریپت موزیلا
          </a>
        </p>
      </section>
      <h2
        id="3"
        className="inline-block px-10 "
        ref={top3Ref}
      >
        نقشه راه
      </h2>
      <section className="-mt-36">
        <img
          src={bg3}
          alt=""
          className="w-[53%] float-left "
        />
      </section>
      <section className="mx-auto  w-full flex justify-center">
        <img
          src={roadmap}
          alt=""
          className="w-[80%] mr-8"
        />
      </section>
      <section>
        <img
          src={bg4}
          alt=""
          className="inline w-10  float-left"
        />
        <img
          src={bg5}
          alt=""
          className="inline w-12 mr-10 float-right"
        />
      </section>
      <br />
      <h2
        id="4"
        className="inline-block px-10 "
        ref={top4Ref}
      >
        آینده جاوا اسکریپت
      </h2>
      <p className="px-10 text-xs leading-7">
        جاوا اسکریپت به طور مداوم در حال تکامل است
        و ویژگی ها و به روز رسانی های جدید به طور
        منظم منتشر می شود. برخی از آخرین پیشرفت
        های جاوا اسکریپت شامل پشتیبانی از
        WebAssembly است که به توسعه دهندگان اجازه
        می دهد تا کد را به زبان های دیگر مانند C++
        و Rust بنویسند و آن را در مرورگر اجرا
        کنند. <br />
        علاوه بر این، روند رو به رشدی به سمت
        استفاده از جاوا اسکریپت برای برنامه نویسی
        سمت سرور وجود دارد و ابزارهایی مانند
        Node.js به طور فزاینده ای محبوب می شوند.
        این به توسعه دهندگان اجازه می دهد تا از یک
        زبان برای توسعه سمت کلاینت و سمت سرور
        استفاده کنند و ساخت برنامه های کاربردی وب
        مقیاس پذیر و کارآمد را آسان تر می کند و به
        عنوان یکی از زبان‌های برنامه‌نویسی اصلی در
        توسعه وب، همچنان محبوب و پرکاربرد خواهد
        بود.
      </p>
      <div>
        <img
          src={bg6}
          alt=""
          className=" w-32 float-left"
        />
      </div>
      <h2
        id="5"
        className="inline-block px-10  -mt-36 "
        ref={top5Ref}
      >
        دلیل برای یادگیری جاوا اسکریپت
      </h2>
      <br />
      <p className="px-10 text-xs leading-7">
        جاوا اسکریپت دارای چندین مزیت است که آن را
        به انتخاب بهتری نسبت به رقبای خود تبدیل می
        کند. چندین مزیت استفاده از جاوا اسکریپت به
        شرح زیر است:
        <br />
        1. مشاغل جاوا اسکریپت تقاضای بالایی دارند.
        طبق نظرسنجی توسعه دهندگان StackOverflow در
        سال 2022، Statista، دانشگاه کالیفرنیا
        برکلی، و devjobsscanner.com، جاوا اسکریپت
        پرتقاضاترین زبان برنامه نویسی در حال حاضر
        است.
        <br />
        2. جاوا اسکریپت ساده است. جاوا اسکریپت یکی
        از ساده ترین زبان های برنامه نویسی با
        آموزش های آنلاین رایگان است. می توانید
        اصول اولیه را درک کنید و سپس HTML و CSS را
        اضافه کنید تا شروع به ساختن برنامه ها و وب
        سایت کنید. داشتن ساختار ساده یادگیری و
        پیاده‌سازی جاوا اسکریپت را آسان‌تر می‌کند
        و همچنین سریع‌تر از برخی از زبان‌های دیگر
        اجرا می‌شود. خطاها نیز به راحتی قابل تشخیص
        و تصحیح هستند.
        <br />
        3. سرعت جاوا اسکریپت اسکریپت ها را
        مستقیماً در مرورگر وب بدون اتصال به سرور
        یا نیاز به کامپایلر اجرا می کند. علاوه بر
        این، اکثر مرورگرهای اصلی به جاوا اسکریپت
        اجازه می دهند تا کد را در طول اجرای برنامه
        کامپایل کند.
        <br />
        4. تطبیق پذیری جاوا اسکریپت با زبان های
        دیگر مانند PHP، Perl و جاوا سازگار است.
        همچنین علم داده و یادگیری ماشین را برای
        توسعه دهندگان قابل دسترس می کند.
        <br />
        5. محبوبیت منابع و انجمن های زیادی برای
        کمک به مبتدیان با مهارت های فنی محدود و
        دانش جاوا اسکریپت در دسترس هستند.
        <br />
        6. بار سرور یکی دیگر از مزیت های عملکرد در
        سمت کلاینت این است که جاوا اسکریپت درخواست
        های ارسال شده به سرور را کاهش می دهد.
        اعتبار سنجی داده ها را می توان از طریق
        مرورگر وب انجام داد و به روز رسانی ها فقط
        برای بخش های خاصی از صفحه وب اعمال می شود.
        <br />
        7. به‌روزرسانی‌ها تیم توسعه جاوا اسکریپت و
        ECMA International به‌طور مداوم چارچوب‌ها
        و کتابخانه‌های جدید را به‌روزرسانی و ایجاد
        می‌کنند و از ارتباط آن در صنعت اطمینان
        می‌دهند.
        <br />
        8 . توسعه دهندگان جاوا اسکریپت حقوق بالایی
        دارند. در نظر بگیرید که میانگین حقوق یک
        توسعه دهنده جاوا اسکریپت در 20 سال گذشته
        تقریباً 35 درصد افزایش یافته است. علاوه بر
        این، افزایش دستمزد همچنان در حال افزایش
        سالانه است، به طوری که میانگین توسعه‌دهنده
        جاوا اسکریپت در حال حاضر حدود 97577 دلار
        تا 119839 دلار در سال درآمد دارد.
        <br />
        9 . جاوا اسکریپت را می توان در همه جا
        استفاده کرد فقط یک زبان را یاد بگیرید و از
        آن در همه جا استفاده کنید. جاوا اسکریپت را
        می توان برای کدهای front-end و back-end
        (Full Stack) استفاده کرد. هنگامی که اصول
        جاوا اسکریپت را به پایان رساندید، می
        توانید React، Next، Nust، React Native،
        Node.js، Express.js و موارد دیگر را
        بیاموزید. می تواند درفرانت اند استفاده
        شود: React Js و Next Js به عنوان معروف
        ترین فریمورک زبان جاوا اسکریپت، کل دنیای
        توسعه برنامه های وب را پوشش داده اند. برخی
        از برترین محصولات تعیین کننده بازار
        (اینستاگرام، ردیت و فیس بوک واضح ترین
        نمونه ها هستند). می تواند در برنامه های
        تلفن همراه Frontend استفاده شود:: React
        Native بهترین بخش های توسعه بومی را با
        React ترکیب می کند، بهترین کتابخانه جاوا
        اسکریپت در کلاس برای ساخت رابط های کاربری.
        ما می‌توانیم با استفاده از جاوا اسکریپت،
        برنامه‌های بومی برای Android، iOS و موارد
        دیگر ایجاد کنیم می تواند در Backend
        استفاده شود: در همین حال، توسعه بک اند روی
        سمت وب سایتی تمرکز می کند که کاربران نمی
        توانند ببینند (سمت سرور). به عنوان مثال
        مدیریت پایگاه داده و پاسخ به تماس های
        frontend. متداول‌ترین فریم ورک‌هایی که
        امروزه استفاده می‌شوند Node JS، Express
        Js، NUST js و GraphQL برای توسعه Backend
        هستند. با یادگیری تنها یک زبان جاوا
        اسکریپت (React + Node) شما به یک
        "توسعه‌دهنده فول استک" تبدیل می‌شوید. با
        رشد روزافزون اینترنت اشیاء، نیاز به
        برنامه‌های کاربردی و پویا در این زمینه
        افزایش یافته است. جاوا اسکریپت به عنوان یک
        زبان برنامه‌نویسی چندمنظوره، در توسعه
        برنامه‌های کاربردی برای اینترنت اشیاء نیز
        مورد استفاده قرار می‌گیرد. با توجه به
        اینکه اینترنت اشیاء در آینده رشد قابل
        توجهی خواهد داشت، یادگیری جاوا اسکریپت به
        عنوان یکی از زبان‌های برنامه‌نویسی اصلی در
        این حوزه، برای توسعه دهندگان بسیار مفید و
        ضروری است.
        <br />
        10 . بخش جدیدی از مغز خود را فعال کنید.
        ممکن است برنامه نویسی چیزی نباشد که با آن
        آشنا هستید و یادگیری یک مهارت جدید راهی
        عالی برای تحریک مغز شماست.
      </p>
      <div className="inline -mb-96">
        <img
          src={bg9}
          className="w-[15%] float-left "
          alt=""
        />
      </div>
      <h2
        id="6"
        className="inline-block px-10   "
        ref={top6Ref}
      >
        نقاط ضعف جاوا اسکریپت
      </h2>
      <p className="px-10 text-xs leading-7">
        مانند هر زبان برنامه نویسی دیگری، جاوا
        اسکریپت محدودیت های زیادی دارد که باید در
        نظر بگیرید. برخی از معایب استفاده از جاوا
        اسکریپت به شرح زیر است: <br />
        1. سازگاری مرورگر مرورگرهای وب مختلف کد
        جاوا اسکریپت را به طور متفاوتی تفسیر می
        کنند که باعث ناسازگاری می شود. بنابراین،
        باید اسکریپت جاوا اسکریپت خود را در همه
        مرورگرهای وب محبوب، از جمله نسخه‌های
        قدیمی‌تر، آزمایش کنید تا به تجربه کاربر
        آسیب نرسانید. <br />
        2. امنیت کد جاوا اسکریپت که در سمت کلاینت
        اجرا می شود در برابر سوء استفاده توسط
        کاربران غیرمسئول آسیب پذیر است. <br />
        3. اشکال زدایی در حالی که برخی از
        ویرایشگرهای HTML از اشکال زدایی پشتیبانی
        می کنند، نسبت به سایر ویرایشگرها کارایی
        کمتری دارند. از آنجایی که مرورگرها <br />{' '}
        هیچ هشداری برای خطا نشان نمی دهند، پیدا
        کردن مشکل ممکن است چالش برانگیز باشد.
      </p>
      <br /> <br />
      <h2
        id="7"
        className="inline-block px-10  "
        ref={top7Ref}
      >
        نتیجه
      </h2>{' '}
      <br />
      <p className="px-10 text-xs leading-7">
        جاوا اسکریپت به عنوان یکی از محبوب‌ترین و
        پرکاربرد‌ترین زبان‌های برنامه‌نویسی در حال
        حاضر، برای توسعه دهندگان وب امری ضروری
        است. با توجه به رشد روزافزون فناوری وب و
        نیازهای جدید کاربران، یادگیری جاوا اسکریپت
        برای توسعه دهندگان انتخاب مناسبی است.{' '}
        <br />
        فریم‌ورک‌های مدرن، اینترنت اشیاء و
        فناوری‌های جدید مانند 5G و هوش مصنوعی نیز
        نشان می‌دهد که جاوا اسکریپت در آینده
        همچنان پرکاربرد خواهد بود و توسعه دهندگان
        با یادگیری این زبان برنامه‌نویسی،
        می‌توانند به راحتی با نیازهای جدید کاربران
        همراه شوند.
      </p>
      <img src={bg7} className="-mt-44 " alt="" />
      <section className=" ">
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

export default Js;
