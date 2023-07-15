import React from 'react';
import infj from '../../images/infj.svg';
import infjSvg from '../../images/infjSvg.jpg';
import './style.css';
import PersonTypes from './PersonTypes/PersonTypes';
import HeaderType from './Type/Type';
import teresa from '../../images/teresa.svg';
import kondo from '../../images/kondo.svg';
import luther from '../../images/luther.svg';
import mandela from '../../images/mandela.svg';
import GreatTalk from './GreatTalk/GreatTalk';

function INFJ() {
  return (
    <main>
      <HeaderType
        typeName={' حامی'}
        type={'INFJ-A / INFJ-T'}
        typeImg={infj}
        color={'#33A474'}
      />

      <section className="container mx-auto  mt-10 p-20 font-medium   ">
        <h1 className="text-3xl text-[#51596A] pb-5">
          شخصیت حامی
        </h1>
        <GreatTalk
          text="هر کسی باید تصمیم بگیرد که آیا می‌خواهد در روشنایی نوع‌دوستی خلاقانه گام بردارد یا در تاریکی خودخواهی مخرب."
          author="MARTIN LUTHER KING"
        />

        <div className=" p-5 text-[#545C6D] ">
          <p className="text-md">
            گونه شخصیتی حامی بسیار نادر است و کمتر
            از یک درصد از جمعیت را تشکیل می‌دهد،
            با وجود این، آنها جای پای خود را در
            جهان باقی می‌گذارند. این افراد دارای
            حس ذاتی آرمان‌گرایی و اخلاق هستند، اما
            آنچه آنها را از سایر گونه‌های شخصیتی
            آرمان‌گرایانه جدا می‌کند قاطعیت و
            اراده آنها است - حامیان افرادی
            رؤیاپرداز و منفعل نیستند، بلکه کسانی
            هستند که قادر به برداشتن گام‌هایی عینی
            برای تحقق اهداف خود و ایجاد تأثیر مثبت
            پایدار هستند.
          </p>
        </div>

        <div className=" p-5 text-[#545C6D] mt-5">
          <h2 className="text-lg text-[#51596A] pb-5">
            به من کمک کن و من به تو کمک می‌کنم
          </h2>
          <p className="text-md">
            در واقع حامیان ترکیب بسیار منحصر به
            فردی از صفات را دارند: آنها هرچند نرم
            و ملایم سخن می‌گویند اما عقاید بسیار
            راسخی دارند و به‌طرزی خستگی‌ناپذیر در
            راه اندیشه‌ای که به آن باور دارند
            مبارزه می‌کنند. افراد دارای این گونه
            شخصیتی قاطع و بااراده هستند، اما
            به‌ندرت از این انرژی برای منافع شخصی
            استفاده می‌کنند - حامیان کارهای خود را
            با خلاقیت، ابتکار، اعتقاد راسخ و
            حساسیت انجام می‌دهند اما نه در پی خلق
            مزیت بلکه در پی ایجاد تعادل هستند.
            مساوات‌طلبی و مفهوم کارما فکرات بسیار
            جذابی برای حامیان است و آنها معتقدند
            هیچ چیز همانند استفاده از عشق و شفقت
            برای نرم کردن دل ظالمان به جهان کمک
            نمی‌کند.
          </p>
        </div>
        <figure className="m-10">
          <img src={infjSvg} alt="" />
        </figure>
        <div className=" p-5 text-[#545C6D]">
          <p className="text-md">
            حامیان به‌راحتی می‌توانند با دیگران
            ارتباط برقرار کنند و استعداد زیادی
            برای سخن گفتن با زبانی گرم و حساس با
            استفاده صطلاحات ملموس انسانی دارند تا
            با منطق محض و واقعیت. منطقی است که
            دوستان و همکاران حامیان آنها را
            شخصیت‌هایی نسبتاً اجتماعی بدانند، اما
            بهتر است همگی به یاد داشته باشند که
            حامیان نیاز به تنهایی دارند تا خود را
            از فشار رها کرده و دوباره نیرو بگیرند،
            و وقتی به‌طور ناگهانی پا پس می‌کشند
            بیش از حد نگران نشوند. حامیان به
            احساسات دیگران توجه دارند و انتظار
            دارند در مورد خودشان هم همین اتفاق
            بیفتد - این امر بدان معناست که باید
            گاهی اوقات چند روز فرصتی که نیاز دارند
            به آنها داده شود.
          </p>
        </div>
        <div class="description-pullout-g">
          شاید حامیان کمک به دیگران را هدف خود در
          زندگی بدانند، اما در حالی که افرادی با
          این گونه شخصیتی را می‌توان در کارهایی
          مانند عملیات نجات و انجام امور خیریه
          پیدا کرد، اشتیاق واقعی آنها پرداختن به
          قلب موضوع است تا اساساً نیاز به نجات
          دادن وجود نداشته باشد.
        </div>

        <div className=" p-5 text-[#545C6D]">
          <p className="text-md">
            هر چند واقعاً مهم است که شخصیت‌های
            حامی به یاد داشته باشند که باید از
            خودشان مراقبت کنند. شور و شوق ناشی از
            باورهای راسخشان می‌تواند کاری کند که
            از ظرفیت خود فراتر بروند و اگر مهار
            حمیت‌شان از دست خارج شود، ممکن است در
            نهایت خود را بی‌رمق، بیمار و دچار
            استرس بیابند. این مسئله به‌خصوص هنگامی
            آشکار می‌شود که حامیان در مقابل مجادله
            و انتقاد قرار می‌گیرند - حساسیتشان
            آنها را وادار می‌کند هر کاری که
            می‌توانند انجام دهند تا از این حملات
            به ظاهر شخصی اجتناب کنند، اما وقتی
            شرایط غیرقابل اجتناب باشد، ممکن است به
            شیوه‌هایی بسیار غیر منطقی و غیرسودمند
            به مبارزه بپردازند.
          </p>
        </div>

        <div></div>
      </section>
      <PersonTypes
        img1={kondo}
        name1={'Marie Kondo'}
        img2={teresa}
        name2={'Mother Teresa'}
        img3={mandela}
        name3={'Nelson Mandela'}
        img4={luther}
        name4={'Martin Luther King '}
      />
    </main>
  );
}

export default INFJ;