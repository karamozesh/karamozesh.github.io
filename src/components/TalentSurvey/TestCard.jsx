import { Link } from 'react-router-dom';

import haland from '/src/images/Haland.png';
import disk from '/src/images/Disk.png';
import mbti from '/src/images/Mbti.png';
import '../../index.css';
export default function TestCard() {
  // component for show test img with little explanation
  // has 2 prop: img, description
  return (
    <>
      <section className="container mx-auto p-7">
        <section className="flex flex-col gap-5">
          <h1 className="">نمونه تست</h1>
          <div className="border float-right p-4  ">
            <p className="">
              <img
                src={disk}
                alt=""
                className="test-sec border"
              />
              <h1 className="p-3">
                تست دیسک (DISC)
              </h1>
              تست دیسک (تست DISC) یکی از قوی‌ترین
              نوع تست شخصیت شناسی است. آزمون دیسک
              به شما کمک می‌کند در درجه اول نسبت
              به ویژگی‌های شخصیتی، اولویت‌ها و
              انگیزه‌های خود آگاهی یابید. آزمون
              دیسک زبان مشترکی بوجود می آورد که به
              درک بهتر خود و تعامل بهتر با دیگران
              منجر می‌شود. بهبود روابط می‌تواند در
              قالب تیم‌های کاری، رابطه با همکاران
              و سرپرستان و دیگر روابط درون و برون
              سازمانی صورت گیرد. سالانه بیش از یک
              میلیون نفر در سطح جهان، از این آزمون
              بهره می‌برند تفسیر کامل ارائه شده در
              این تست ضمن ارائه راهکارهایی عملی
              برای بهبود فرایند رشد حرفه‌ای، حاوی
              نکات بسیار ارزشمند رفتاری در بهبود
              مهارت‌های زندگی فردی است.
              <Link to="/talent-survey/disk">
                <button className="float-left bg-secondaryColor px-7 p-2 rounded-3xl m-3">
                  شروع
                </button>
              </Link>
            </p>
          </div>
          <div className="border float-right p-4  ">
            <p className="">
              <img
                src={mbti}
                alt=""
                className="test-sec border"
              />
              <h1 className="p-3">
                تست MBTI (مایرز بریگز)
              </h1>
              تست MBTI، یک پرسش‌نامه روان‌سنجی
              فردی است که برای شناسایی نوع شخصیت،
              نقاط قوت و اولویت‌های افراد طراحی
              شده است. ه‌طور مشخص، تست شخصیت شناسی
              به افراد کمک می‌کند تا شناخت بهتری
              از خود و دیگران پیدا کند. این شناخت
              یکی از باارزش‌ترین خصیصه‌هایی است که
              افراد در هر سازمان یا مجموعه‌ای
              می‌توانند در اختیار داشته باشند.
              اهمیت شناخت صحیح از شخصیت، هم برای
              سازمان و هم برای افراد، از چنان
              اهمیتی برای موفقیت فردی و سازمانی
              برخورد است که به‌هیچ ‌عنوان نمی‌توان
              آن را دست‌کم گرفت.
              <Link to="/talent-survey/mbti">
                <button className="float-left bg-secondaryColor px-7 p-2 rounded-3xl m-3">
                  شروع
                </button>
              </Link>
            </p>
          </div>
          <div className="border float-right p-4  ">
            <p className="">
              <img
                src={haland}
                alt=""
                className="test-sec border"
              />
              <h1 className="p-3">تست هالند</h1>
              تست رغبت سنجی شغلی هالند، یکی از
              معتبرترین آزمون‌ها برای کشف علایق و
              تمایلات شغلی هر فرد است. نام این
              آزمون از نام نظریه‌پرداز آن جان
              هالند برگرفته شده است که معتقد بود
              همخوانی بین شغل و تمایلات و علایق
              فرد، بازدهی فرد در آن شغل را به‌شدت
              افزایش می‌دهد. در مدل نظری جان
              هالند، ۶ تیپ اصلی شغلی وجود دارد که
              با پاسخ دادن به سؤالات این تست،
              میزان علاقه و تمایل افراد به هریک از
              این تیپ‌های شغلی مورد سنجش قرار
              می‌گیرد. خروجی این آزمون لیستی از
              مشاغل و رشته‌های تحصیلی را پیشنهاد
              خواهد کرد که بیشترین تناسب را با
              علایق و تمایلات شما دارد و احتمال
              موفقیتتان در آن‌ها بیشتر است.
              <Link to="/talent-survey/haland">
                <button className="float-left bg-secondaryColor px-7 p-2 rounded-3xl m-3">
                  شروع
                </button>
              </Link>
            </p>
          </div>
          <div></div>
          <div></div>
        </section>
      </section>
    </>
  );
}
