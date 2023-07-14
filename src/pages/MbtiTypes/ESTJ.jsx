import React from 'react';
import estj from '../../images/estj.svg';
import estjSvg from '../../images/estjSvg.svg';
import './style.css';
import PersonTypes from './PersonTypes/PersonTypes';
import HeaderType from './Type/Type';
import baker from '../../images/baker.svg';
import judy from '../../images/judy.svg';
import rockefeller from '../../images/rockefeller.svg';
import sotomayor from '../../images/sotomayor.svg';

function ESTJ() {
  return (
    <main>
      <HeaderType
        typeName={' مجری'}
        type={'ESTJ-A / ESTJ-T'}
        typeImg={estj}
        color={'#4298B4'}
      />

      <section className="container mx-auto  mt-10 p-20 font-medium   ">
        <h1 className="text-4xl text-[#51596A] pb-5">
          شخصیت مجری
        </h1>
        <div className=" p-5 text-[#545C6D] border-4 border-t-0 border-b-0 border-l-[#33A474] border-r-[#33A474] border-5">
          <p className="text-lg">
            نظم خوب پایه و اساس همه چیز است.
          </p>
          <span className="p-3 text-[#B5B5B5]">
            EDMUND BURKE
          </span>
        </div>

        <div className=" p-5 text-[#545C6D] ">
          <p className="text-lg">
            مجریان نمایندگان سنت و نظم هستند و از
            درک خود در مورد امور درست، نادرست و
            قابل قبول اجتماع برای گردهم آوردن
            خانواده‌ها و جوامع استفاده می‌کنند.
            افراد دارای گونه شخصیتی مجری از
            ارزش‌های صداقت، فداکاری و کرامت
            استقبال می‌کنند و دیگران به‌خاطر
            مشاوره‌ها و راهنمایی‌های روشن آنها
            برایشان ارزش قائل هستند، و از اینکه در
            مسیرهای دشوار پیشرو باشند خرسندند.
            مجریان که از گردهم آوردن افراد در کنار
            هم احساس غرور می‌کنند، اغلب نقش
            سازمان‌دهندگان اجتماعی را ایفا می‌کنند
            و با سختکوشی همه افراد را برای شرکت در
            جشن رویدادهای محلی، یا در دفاع از
            ارزش‌های سنتی که خانواده‌ها و جوامع را
            در کنار هم نگه می‌دارد، گردهم
            می‌آورند.
          </p>
        </div>

        <div className=" p-5 text-[#545C6D] mt-5">
          <h2 className="text-4xl text-[#51596A] pb-5">
            هر کسی که ارزشش را دارد باید در دفاع
            از آنچه که به باورش صحیح است به پا
            خیزد ...
          </h2>
          <p className="text-lg">
            تقاضا برای این نوع رهبری در جوامع
            دموکراتیک بالا است و حدود 11% جمعیت را
            تشکیل می‌دهد، جای تعجب نیست که بسیاری
            از رهبران معروف سیاسی و کسب و کار در
            سراسر جهان از جمله مجریان بوده‌اند.
            شخصیت‌های مجری افرادی هستند که عمیقاً
            به حکومت قانون و مشروعیتی که باید کسب
            شود معتقد هستند، آنها سرمشق دیگران
            هستند و تعهد و صداقت هدفمندی را از خود
            نشان داده و تنبلی و تقلب را به‌خصوص در
            مورد کار مطلقاً رد می‌کنند. اگر کسی
            اعلام کند که کار سخت و جسمی راهی عالی
            برای ساختن شخصیت است، گونه شخصیتی مجری
            دارد.
          </p>
        </div>
        <figure className="m-10">
          <img src={estjSvg} alt="" />
        </figure>
        <div className=" p-5 text-[#545C6D]">
          <p className="text-lg">
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
        <div class="description-pullout-b">
          مجریان تصویری کلاسیک از شهروندان سرمشق
          هستند: آن‌ها به همسایگان خود کمک می‌کند،
          به قانون وفادار هستند و سعی می‌کنند
          مطمئن شوند همه در جوامع و سازمان‌هایی که
          تا آن اندازه برایشان عزیز است مشارکت
          می‌کنند.
        </div>

        <div className=" p-5 text-[#545C6D]">
          <p className="text-lg">
            چالش اصلی پیش روی افراد دارای این گونه
            شخصیتی مجری این است که بدانند همه
            افراد از یک مسیر پیروی نمی‌کنند یا به
            شیوه‌ای مشابه یاری نمی‌رسانند. یک رهبر
            واقعی قدرت افراد، و همچنین گروه را به
            رسمیت می‌شناسد، و کمک می‌کند تا نظرات
            آن افراد مطرح گردد. به این ترتیب،
            شخصیت‌های مجری به‌راستی تمام واقعیت‌ها
            را در اختیار دارند، و قادر هستند کارها
            را به شیوه‌ای پیش ببرند که برای همه
            مفید باشد.
          </p>
        </div>

        <div></div>
      </section>
      <PersonTypes
        img1={baker}
        name1={'Ella Baker'}
        img2={judy}
        name2={'Judge Judy'}
        img3={rockefeller}
        name3={'John D. Rockfeller'}
        img4={sotomayor}
        name4={'Sonia Sotomayor'}
      />
    </main>
  );
}

export default ESTJ;
