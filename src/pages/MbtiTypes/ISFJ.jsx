import React from 'react';
import isfj from '../../images/isfj.svg';
import isfjSvg from '../../images/isfjSvg.svg';
import './style.css';
import PersonTypes from './PersonTypes/PersonTypes';
import HeaderType from './Type/Type';
import queen from '../../images/queen.svg';
import disel from '../../images/diesel.svg';
import beyonce from '../../images/beyonce.svg';
import franklin2 from '../../images/franklin2.svg';
import GreatTalk from './GreatTalk/GreatTalk';

function ISFJ() {
  return (
    <main>
      <HeaderType
        typeName={' مدافع'}
        type={'ISFJ-A / ISFJ-T'}
        typeImg={isfj}
        color={'#4298B4'}
      />

      <section className="container mx-auto  mt-10 p-20 font-medium   ">
        <h1 className="text-4xl text-[#51596A] pb-5">
          شخصیت مدافع
        </h1>
        <GreatTalk
          text="عشق تنها وقتی قسمت شود رشد می‌کند. تنها با بخشیدن آن به دیگران است که می‌توانید از آن بیشتر بهره داشته باشید."
          author="BRIAN TRACY"
        />

        <div className=" p-5 text-[#545C6D] ">
          <p className="text-md">
            گونه شخصیتی مدافع کاملاً منحصر به فرد
            است، زیرا بسیاری از کیفیت‌های آن از
            تعریف صفات فردی‌اش سرپیچی می‌کند.
            هرچند مدافعان اهل همدلی هستند، اما
            وقتی به محافظت از خانواده یا دوستان
            نیاز باشد خشن می‌شوند؛ هر چند آرام و
            کم‌حرف هستند، معمولاً افرادی با
            مهارت‌های به‌خوبی توسعه یافته و روابط
            اجتماعی قوی هستند؛ و هر چند به دنبال
            امنیت و ثبات هستند، ممکن است به میزان
            قابل ملاحظه‌ای دست به تغییر بزنند،
            البته تا زمانی که احساس کنند مورد درک
            و احترام هستند. افراد دارای گونه
            شخصیتی مدافع، همانند بسیاری از چیزهای
            دیگر، چیزی بیش از مجموع اجزای خود
            هستند، و شیوه استفاده آنها از این نقاط
            قوت است که تعریف می‌کند چه کسانی
            هستند.
          </p>
        </div>

        <div className=" p-5 text-[#545C6D] mt-5">
          <h2 className="text-lg text-[#51596A] pb-5">
            ما باید دیده شویم تا باور شویم
          </h2>
          <p className="text-md">
            چالش پیش روی افراد دارای گونه شخصیتی
            مدافع این است که مطمئن شوند آنچه که
            انجام می‌دهند مورد توجه قرار گیرد.
            آن‌ها تمایل دارند دستاوردهای خود را
            دست‌کم بگیرند، و اگرچه اغلب به محبت
            آنها احترام گذاشته می‌شود، امکان دارد
            افراد بدبین و خودخواه از فداکاری و
            فروتنی مدافعان سوءاستفاده کنند و کارها
            را به دوش آنها بیندازند و سپس اعتبارش
            را به نام خود ثبت کنند. مدافعان باید
            بدانند چه زمانی نه بگویند و اگر
            می‌خواهند اعتماد به نفس و اشتیاق خود
            را حفظ کنند باید از خود دفاع کنند.
            مدافعان به طور ذاتی اجتماعی هستند - که
            کیفیت عجیبی برای این گونه شخصیتی
            درونگرا است - و از حافظه عالی خود نه
            برای حفظ داده‌ها و چیزهای بی‌اهمیت
            بلکه برای به یاد آوردن افراد و جزئیات
            زندگی آنها استفاده می‌کنند. وقتی پای
            هدیه دادن به میان می‌آید، هیچ‌کس با
            مدافعان برابری نمی‌کند، آنها از تخیل و
            حساسیت طبیعی خود برای بیان سخاوت خویش
            به گونه‌ای استفاده می‌کنند که به قلب
            دریافت‌کنندگان هدایا نفوذ می‌کند.
            ابراز محبت گونه شخصیتی مدافع در
            خانواده به‌طور کامل شکوفا می‌شود،
            اگرچه این مسئله قطعاً در مورد همکاران
            چنین افرادی که آنها را دوستان شخصی
            تلقی می‌کنند نیز صادق است
          </p>
        </div>
        {/* <figure className="m-10">
          <img src={intjSvg} alt="" />
        </figure> */}
        <div className=" p-5 text-[#545C6D]">
          <p className="text-md">
            شخصیت‌های مدافع، به ویژه محتاط، اغلب
            تا سرحد کمال دقیق هستند، و اگرچه گاهی
            تعلل می‌کنند، همیشه می‌توان برای انجام
            به موقع کارها به آنها تکیه کرد.
            مدافعان مسئولیت‌های خود را شخصاً
            عهده‌دار می‌شوند، به طور مداوم فراتر
            می‌روند و هر کاری بتوانند انجام
            می‌دهند تا از انتظارات فراتر بروند و
            دیگران را در محل کار و در خانه شاد
            کنند.
          </p>
        </div>
        <div class="description-pullout-b">
          مدافعان به‌راستی نوع‌دوست هستند و
          مهربانی را با مهربانی بیش از حد و درگیر
          شدن در کار و همکاری با اشتیاق و سخاوت با
          کسانی که به آنها باور دارند پاسخ
          می‌دهند.
        </div>

        <div className=" p-5 text-[#545C6D]">
          <p className="text-md">
            شخصیت‌های مدافع گروه فوق‌العاده‌ای
            هستند و تا زمانی که کار مهمی ناتمام
            مانده باشد، به‌ندرت بیکار می‌نشینند.
            توانایی مدافعان برای برقراری ارتباط با
            دیگران در سطح صمیمی در میان درونگراها
            بی‌نظیر است و لذتی که در استفاده از
            این ارتباطات برای حفظ خانواده‌ای
            حمایتگر و شاد تجربه می‌شود هدیه‌ای است
            که به همه افراد درگیر داده می‌شود.
            ممکن است مدافعان از اینکه در کانون
            توجه هستند واقعاً راحت نباشند و امکان
            دارد از اینکه نتیجه تلاش‌های تیمی به
            پای آنها نوشته شود احساس گناه کنند،
            اما اگر بتوانند مطمئن شوند که تلاش‌های
            آنها به رسمیت شناخته می‌شود، چنان
            احساس رضایتی به آنها دست خواهد داد که
            بسیاری از گونه‌های شخصیتی دیگر تنها
            می‌توانند آن را به خواب ببینند.
          </p>
        </div>

        <div></div>
      </section>
      <PersonTypes
        img1={disel}
        name1={'Vin Disel'}
        img2={franklin2}
        name2={'Aretha Franklin'}
        img3={queen}
        name3={'Queen Elizabeth II'}
        img4={beyonce}
        name4={'Beyoncé'}
      />
    </main>
  );
}

export default ISFJ;
