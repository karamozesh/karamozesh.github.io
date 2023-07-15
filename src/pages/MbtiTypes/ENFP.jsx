import React from 'react';
import enfp from '../../images/enfp.svg';
import enfpSvg from '../../images/enfpSvg.svg';
import './style.css';
import PersonTypes from './PersonTypes/PersonTypes';
import HeaderType from './Type/Type';
import joon from '../../images/joon.svg';
import tarantino from '../../images/tarantino.svg';
import downey from '../../images/downey.svg';
import williams from '../../images/williams.svg';
import GreatTalk from './GreatTalk/GreatTalk';

function ENFP() {
  return (
    <main>
      <HeaderType
        typeName={' پیکارگر'}
        type={'ENFP-A / ENFP-T'}
        typeImg={enfp}
        color={'#33A474'}
      />

      <section className="container mx-auto  mt-10 p-20 font-medium   ">
        <h1 className="text-3xl text-[#51596A] pb-5">
          شخصیت پیکارگر
        </h1>
        <GreatTalk
          text="            برایم مهم نیست برای گذران زندگی چه کاری انجام می‌دهید. می‌خواهم بدانم چه چیزی را با تمام وجود می‌خواهید - و آیا جرأت آن را دارید که رؤیای برآورده کردن اشتیاق قلبی خود را در سر بپرورانید. برایم مهم نیست چند ساله هستید. می‌خواهم بدانم آیا این خطر را می‌پذیرید که مثل یک احمق به نظر برسید - برای عشقتان - برای رؤیاهایتان - برای ماجراجویی زنده بودن."
          author="ORIAH MOUNTAIN DREAMER"
        />

        <div className=" p-5 text-[#545C6D] ">
          <p className="text-md">
            شخصیت پیکارگر یک روح به‌راستی آزاد
            است. آن‌ها اغلب به مهمانی‌ها جان
            می‌بخشند، اما کمتر به هیجان محض و لذت
            بردن از لحظه علاقه‌مند هستند تا
            بهره‌گیری از ارتباطات اجتماعی و عاطفی
            که با دیگران دارند. این افراد جذاب،
            مستقل، پرانرژی و دلسوز را که 7% درصد
            جمعیت را تشکیل می‌دهند مطمئناً می‌توان
            در هر جمعیتی شناخت.
          </p>
        </div>

        <div className=" p-5 text-[#545C6D] mt-5">
          <h2 className="text-4xl text-[#51596A] pb-5">
            می‌توانید جهان را با فقط یک ایده تغییر
            دهید
          </h2>
          <p className="text-md">
            پیکارگران تنها افرادی خوش مشرب نیستند
            که به دنبال خشنود کردن مردم باشند،
            بلکه ماهیت رؤیاپردازشان آنها را شکل
            داده و به آنها اجازه می‌دهد با کنجکاوی
            و انرژی به دنبال ناگفته‌ها باشند.
            آن‌ها معمولاً زندگی را مثل یک پازل
            بزرگ و پیچیده می‌بینند که در آن همه
            چیز با هم مرتبط است، اما پیکارگران -
            بر خلاف شخصیت های گروه نقش تحلیلگر که
            معمولاً چنین پازلی را مجموعه‌ای از
            سازوکارهای نظام‌مند تلقی می‌کنند - آن
            را از طریق منشوری از احساسات، شفقت و
            رمز و راز می‌بینند و همیشه به دنبال
            معنایی عمیق‌تر هستند.
          </p>
        </div>
        <figure className="m-10">
          <img src={enfpSvg} alt="" />
        </figure>
        <div className=" p-5 text-[#545C6D]">
          <p className="text-md">
            بسیاری از گونه ‌های شخصیتی دیگر به
            احتمال زیاد قادر به مقاومت در برای
            چنین ویژگی‌هایی نیستند، و اگر
            پیکارگران علتی برای روشن کردن چراغ
            تخیل خود بیابند، آنقدر انرژی صرف آن
            می‌کنند که اغلب در کانون توجه قرار
            می‌گیرند و همتایانشان آنها را به‌
            استقلال‌دوست نمی‌خواهند همیشه در چنین
            موقعیت‌هایی قرار بگیرند. بدتر از آن
            وقتی است که این شخصیت‌ها ببینند درگیر
            کارهای اداری و رویه‌های معمول شده‌اند
            که ممکن است با جایگاه رهبری همراه
            باشد. عزت نفس پیکارگران به توانایی
            آنها برای دستیابی به راه حل‌های اصیل
            وابسته است، و آنها باید بدانند که این
            آزادی را دارند که دست به نوآوری بزنند
            - اگر در نقشی خسته‌کننده گیر بیفتند
            ممکن است به‌سرعت صبر خود را از دست
            بدهند یا افسرده شوند.
          </p>
        </div>
        <div class="description-pullout-g">
          پیکارگران شدیداً مستقل هستند و بسیار
          بیشتر از ثبات و امنیت در پی خلاقیت و
          آزادی هستند.
        </div>

        <div className=" p-5 text-[#545C6D]">
          <p className="text-md">
            خوشبختانه افراد گونه شخصیتی پیکارگر
            می‌دانند چگونه به آرامش برسند و کاملاً
            قادر به تبدیل کردن خود از آرمانگرایی
            پرشور در محل کار به روحی آزاد و
            خیال‌پرداز و مشتاق در هنگام رقص هستند،
            و این امر اغلب چنان به‌طور ناگهانی رخ
            می‌دهد که حتی می‌تواند نزدیکترین
            دوستانشان را متعجب کند. بودن در جمع به
            آنها فرصت برقراری روابط عاطفی با
            دیگران را نیز می‌دهد و باعث می‌شود
            انگیزه دوستان و همکاران خود را درک
            کنند. آن‌ها بر این باورند که هر کس
            باید زمان صرف کند تا احساسات خود را
            بشناسد و ابراز نماید و همدلی و اجتماعی
            بودن آنها باعث می‌شود به‌طور طبیعی این
            مسئله به موضوع گفتگویشان تبدیل شود.
          </p>
        </div>

        <div></div>
      </section>
      <PersonTypes
        img1={tarantino}
        name1={' Quentin Tarantino'}
        img2={williams}
        name2={'Robin Williams'}
        img3={downey}
        name3={'Robert Downey, Jr.'}
        img4={joon}
        name4={'RM (Kim Nam-joon)'}
      />
    </main>
  );
}

export default ENFP;
