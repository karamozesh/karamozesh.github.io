import React, { useRef, useEffect } from 'react';
import SkillSection from './UI/SkiilSection';
import SkillRoad from './UI/SkillRoad';
import bg from '../../asset/images/bg.png';
import road from '../../asset/images/Group 448.png';
import bg2 from '../../asset/images/bg2.png';
import bg3 from '../../asset/images/Group 444.png';
import bg4 from '../../asset/images/Teleportation-pana 3.png';
import bg5 from '../../asset/images/Teleportation-pana 2.png';
import bg6 from '../../asset/images/Group 445.png';
import bg7 from '../../asset/images/Group 446.png';
import bg8 from '../../asset/images/Group 447.png';
import Button from '../../components/UI/Button';
import useObserver from '../../hooks/use-observer';

function NLP() {
  const navbarRef = useRef(null);
  const observeLineRef = useRef(null);
  const top1Ref = useRef(null);
  const top2Ref = useRef(null);
  const top3Ref = useRef(null);
  const top4Ref = useRef(null);
  const top5Ref = useRef(null);

  useObserver(navbarRef, observeLineRef);

  return (
    <section className="  mx-auto flex flex-col  ">
      <div className="bg-line bg-no-repeat">
        <h1 className="inline-block p-10 ">
          پردازش زبان طبیعی{' '}
        </h1>
      </div>

      <SkillSection
        explain={
          'پردازش زبان طبیعی (Natural Language Processing) به شاخه‌ای از علوم رایانه (Computer Science)‌ و به‌طور خاص، شاخه‌ای از هوش مصنوعی (AI) مربوط می‌شود. این شاخه به کامپیوترها این امکان را می‌دهد تا متن و کلمه‌های گفتاری را به‌همان شیوه‌ای درک کنند که انسان می‌تواند بفهمد. '
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
        <div className=" bg-dotted bg-no-repeat bg-center flex sticky top-0 gap-5 justify-center mx-auto w-full">
          <SkillRoad
            refTitle={top1Ref}
            title={'کاربرد NLP'}
          />
          <SkillRoad
            refTitle={top2Ref}
            title={'اهمیت یادگیری و کاربرد ها'}
          />
          <SkillRoad
            refTitle={top3Ref}
            title={'منابع یادگیری'}
          />
          <SkillRoad
            refTitle={top4Ref}
            title={'نقشه راه'}
          />
          <SkillRoad
            refTitle={top5Ref}
            title={'پروژه های تمرینی'}
          />
        </div>
      </section>

      <div className="relative mb-[150px]">
        {' '}
        <img
          src={bg}
          className="absolute left-0 w-[10%] -mt-7"
          alt=""
        />
      </div>

      <section className="container mx-auto">
        <h2
          id="5"
          className="inline-block px-10"
          ref={top1Ref}
        >
          {' '}
          کاربرد NLP در دنیای برنامه نویسی چیست؟
        </h2>
        <p className="px-10 text-xs leading-7">
          پردازش زبان طبیعی (NLP) زبان‌شناسی
          محاسباتی (Computational Linguistics) را
          با مدل‌های (Statistical Models)، یادگیری
          ماشین (Machine Learning) و یادگیری عمیق
          (Deep Leaning) ترکیب می‌کند که همان
          زیرشاخه یادگیری ماشین است. در کنار هم
          این فناوری‌ها کامپیوترها را قادر می‌کنند
          تا زبان انسان را در قالب متن یا داده‌های
          صوتی پردازش و معنای کامل آن را درک کنند.
          <br />
          <br />
          <img
            src={bg6}
            alt=""
            className="-ml-4 w-32 float-left"
          />
          <h2
            id="4"
            className="inline-block  "
            ref={top2Ref}
          >
            اهمیت یادگیری و کاربردها:{' '}
          </h2>
          <br />
          یکی از دلایل اهمیت پردازش زبان طبیعی
          برای مشاغل این است که می‌توان از آن برای
          تجزیه‌وتحلیل حجم زیادی از داده‌های متنی،
          مانند نظرات کاربران رسانه‌های اجتماعی،
          نقدهای آنلاین، گزارش‌های خبری و غیره،
          استفاده کرد. همه‌ی این داده‌های تجاری
          حاوی تعداد زیادی اطلاعات ارزشمند هستند و
          پردازش زبان طبیعی می‌تواند به مشاغل کمک
          کند به‌سرعت به این اطلاعات دست یابند. از
          کاربرد‌های این مهارت می‌توان به موارد
          زیر اشاره کرد: <br />
          تحلیل احساسات (Sentiment Analysis){' '}
          <br />
          طبقه‌بندی متن (Text Classification)
          <br />
          چت‌بات‌ها و دستیاران مجازی (Chatbots &
          Virtual Assistants)
          <br />
          استخراج متن (Text Extraction)
          <br />
          ترجمه‌ی ماشینی (Machine Translation)
          <br />
          خلاصه‌سازی متن (Text Summarization)
          <br />
          هوش اقتصادی (Market Intelligence)
          <br />
          تصحیح خودکار (Auto-Correct)
          <br />
          طبقه‌بندی قصد یا نیت (Intent
          Classification)
          <br />
          تشخیص شرایط اضطراری (Urgency Detection)
          <br />
          تشخیص گفتار(Speech Recognition)
          <br />
        </p>
      </section>

      <section className="container mx-auto">
        <img
          src={bg2}
          alt=""
          className="w-36 float-left mr-8"
        />
        <br />
        <h2
          id="3"
          className="inline-block px-10 "
          ref={top3Ref}
        >
          منابع یادگیری NLP{' '}
        </h2>
        <br />
        <p className="px-10 text-xs leading-7">
          یکی از قوی‌ترین دانشگاه‌ها در حوزه NLP
          دانشگاه استنفورد است که پیشرفت در این
          حوزه را مدیون عملکرد تیم‌های تحقیقاتی در
          آن هستیم. همچنین قوی‌ترین کتاب‌ها و
          منابع آموزشی در این حوزه را اساتید این
          دانشگاه به ارمغان آورده‌اند. کلاس‌های
          درس این این اساتید در دانشگاه استنفورد
          به لطف اینترنت ضبط شده و در اختیار عموم
          قرار گرفته است و به یکی از بهترین
          دوره‌ها برای شروع پردازش زبان طبیعی
          تبدیل شده‌است.
          <br />
          از{' '}
          <a
            className=" text-emerald-400"
            href="https://web.stanford.edu/class/cs224n/"
          >
            این سایت
          </a>{' '}
          می‌توانید به منابع مخلف از جمله کتاب‌ها،
          سرفصل دروس، ویدئو‌ها، اسلاید‌ها و تمارین
          این درس بهره‌مند شوید. <br />
          <br />
          دن ژورافسکی و کریس مانینگ از اساتید بزرگ
          این حوزه در دوره‌ای در کورسرا به تدریس
          NLP پرداختند که ویدئو جلسات در یوتیوب،
          تمارین، اسلایدهای آن را می‌توانید از{' '}
          <a
            className=" text-emerald-400"
            href="https://github.com/Anwarvic/Dan-Jurafsky--Chris-Manning--NLP"
          >
            این لینک
          </a>{' '}
          مشاهده کنید.
          <br />
          <br />
          همچنین{' '}
          <a
            className=" text-emerald-400"
            href="https://www.coursera.org/learn/classification-vector-spaces-in-nlp/home/"
          >
            کورسرا
          </a>{' '}
          دوره‌ای برای پردازش زبان‌ طبیعی به تدریس
          اندرو ‌ان‌جی تدارک دیده که امکان دریافت
          رایگان آن نیز وجود دارد.
        </p>
        <br /> <br />
        <img
          src={bg3}
          alt=""
          className="w-[45%]  -ml-48 float-left "
        />{' '}
        <br />
        <br /> <br />
        <h2
          id="2"
          className="inline-block px-10"
          ref={top4Ref}
        >
          نقشه راه{' '}
        </h2>
        <div className="mx-auto w-[60%] flex justify-center">
          <img src={road} alt="" />
        </div>
        <div className="mx-auto w-[96%] ">
          <img
            src={bg5}
            alt=""
            className=" -mt-32 inline w-16 mr-10 float-right"
          />
        </div>
        <br /> <br /> <br /> <br />
        <div className="nlp-bg h-[700px]">
          <h2
            id="1"
            ref={top5Ref}
            className="inline-block px-10"
          >
            پروژه هایی برای تمرین NLP :{' '}
          </h2>
          <p className="px-10 text-xs leading-7">
            پروژه‌ها و تمارین: همه ما میدانیم برای
            تسلط و یادگیری واقعی یک مهارت نیاز به
            تمرین و تکرار زیاد است. به‌ قول لینوس
            توروالدز خالق هسته لینوکس : "حرف زدن
            بی‌فایده است، کدت را نشان بده"
            <br />
            پس به سراغ پروژه‌های تمرینی می‌رویم که
            مهارت‌های پردازش زبان طبیعی را تقویت
            کنیم.
            <br />1 –
            <a
              className=" text-emerald-400"
              href="https://neptune.ai/blog/10-nlp-projects"
            >
              Neptune.ai
            </a>{' '}
            <br />
            ده پروژه در سطح‌های مختلف برای تقویت
            رزومه
            <br /> <br />2 -{' '}
            <a
              className=" text-emerald-400"
              href="https://www.projectpro.io/article/nlp-projects-ideas-/452"
            >
              projectpro
            </a>
            <br /> بیست پروژه NLP به همراه سورس
            کد. <br />
            <br /> 3 -{' '}
            <a
              className=" text-emerald-400"
              href="https://medium.com/coders-camp/20-machine-learning-projects-on-nlp-582effe73b9c"
            >
              medium
            </a>
            <br /> بیست پروژه یادگیری ماشین در
            حوزه NLP به همراه توضیحات کد و مفاهیم
          </p>
        </div>
      </section>

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

export default NLP;
