import React, {
  useEffect,
  useState,
} from 'react';
import check from '/src/images/check.png';
import resultImg from '/src/images/resultLogo.png';
import Cart from '../TalentSurvey/TalentUI/Cart';
import JobItems from '../TalentSurvey/TalentUI/JobItems';
import { useSelector } from 'react-redux';
import CustomPieChart from './CustomPieChart';

import lump from '../../asset/images/lump.png';

function Result() {
  const { ansArray } = useSelector(
    (state) => state.haland,
  );
  const [type, setType] = useState({
    name: '',
    point: 0,
  });

  const results = [
    {
      num: 1,
      point: 0,
      name: 'قاعده‌مند و قراردادی',
      color: '#A89ADF',
    },
    {
      num: 2,
      point: 0,
      name: 'جستجوگر',
      color: '#22CBFF',
    },
    {
      num: 3,
      point: 0,
      name: 'هنری',
      color: '#FCC22F',
    },
    {
      num: 4,
      point: 0,
      name: 'اجتماعی',
      color: '#2DDAB0',
    },
    {
      num: 5,
      point: 0,
      name: 'مدیر و جسور',
      color: '#20D050',
    },
    {
      num: 6,
      point: 0,
      name: 'عمل‌گرا',
      color: '#717171',
    },
  ];
  useEffect(() => {
    let sortedAns = [...ansArray];
    sortedAns.sort((a, b) => {
      if (+a.id - +b.id > 0) return 1;
      else return -1;
    });
    sortedAns.forEach((ans) => {
      switch (ans.id % 6) {
        case 1:
          results[0].point += ans.point;
          break;
        case 2:
          results[1].point += ans.point;
          break;
        case 3:
          results[2].point += ans.point;
          break;
        case 4:
          results[3].point += ans.point;
          break;
        case 5:
          results[4].point += ans.point;
          break;
        case 0:
          results[5].point += ans.point;
          break;
      }
    });
  }, []);

  return (
    <>
      <section className="container mx-auto p-10 flex flex-col gap-7 justify-center items-center">
        <h2 className=" border-yellow-300 border-2 p-3 rounded-3xl text-center inline-block ">
          آزمون شخصیت شناسی holland
        </h2>
        <h2 className="text-center">
          نتیجه تست هالند شما
        </h2>
        <section className="">
          <div>
            <h3>تیپ شخصیی آزمون هالند</h3>
            <p>
              در حال حاضر شما به سوالات تست هالند
              پاسخ داده اید و در پایان تست از 6
              تیپ شخصیتی موجود درصدهایی را دریافت
              کرده اید که متعلق به شما است. اکنون
              می توانید به بهترین نحو تحلیل شخصیت
              خود را بررسی کنید و متوجه استعداد و
              مسیر توانایی های خود شوید. در
              استعداد یابی هالند 6 تیپ شخصیتی وجود
              دارد این تیپ ها عبارتند از:
            </p>
          </div>
          <div className="flex lg:flex-row-reverse gap-5 flex-col justify-between items-center">
            <img src={resultImg} alt="" />
            <ul className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <img src={check} alt="" />
                <li>جسور و سازنده</li>
              </div>
              <div className="flex items-center gap-4">
                <img src={check} alt="" />
                <li>جستجوگر</li>
              </div>
              <div className="flex items-center gap-4">
                <img src={check} alt="" />
                <li>هنری</li>
              </div>
              <div className="flex items-center gap-4">
                <img src={check} alt="" />
                <li> اجتماعی </li>
              </div>
              <div className="flex items-center gap-4">
                <img src={check} alt="" />
                <li>قاعده‌مند و قراردادی</li>
              </div>
            </ul>
          </div>
          <p className="m-5">
            در ادامه به توضیح هر یک از موارد بالا
            خواهیم پرداخت.
          </p>
        </section>
        <h2>تیپ‌های شخصیتی تست هالند</h2>

        <section className=" grid grid-cols-2 grid-rows-3 gap-7 rounded-xl">
          <div className="flex flex-col gap-3 bg-[#ffc25944] border  rounded-xl p-4">
            <Cart
              title={
                '  قاعده‌مند و قراردادی (Conventional) '
              }
              content={
                '  افرادی مقرراتی هستند که به شکل بسیار خوبی با تغییر شرایط و محیط خودشان را سازگار می‌کنند.این تیپ افراد به موقعیت‌های بحرانی علاقه‌ای ندارند ودر انجام وظایفشان نظم بالایی دارند.به فعالیت‌های بدنی علاقه زیادی ندراند.'
              }
            />
            <div className="flex gap-3 flex-wrap">
              <Cart Items item={' حسابدار'} />
              <JobItems item={'امور اداری'} />
            </div>
          </div>
          <div className="flex flex-col gap-3 bg-[#ffc25944] border  rounded-xl p-4">
            <Cart
              title={'  جستجوگر(Investigative)'}
              content={
                ' تحلیل‌گر،علمی و متفکرداشتن توانایی و مهارت‌های فردی و انجام دادن صفر تا صد یک کار بصورت انفرادی را به انجام کار بصورت تیمی ترجیح می‌دهند.'
              }
            />
            <div className="flex gap-3 flex-wrap">
              <JobItems item={' حسابدار'} />
              <JobItems item={'امور اداری'} />
              <JobItems item={'  پزشک'} />
              <JobItems item={'  فیزیکدان'} />
              <JobItems item={'  جراح'} />
              <JobItems item={' دندان پزشک'} />
            </div>
          </div>

          <div className="flex flex-col gap-3 bg-[#ffc25944] border  rounded-xl p-4">
            <Cart
              title={'هنری (Artistic)'}
              content={
                'خلاق، مبتکر و مستقلبرخلاف ضعف در مهارت‌های محاسباتی و ریاضی در مهارت ‌های کلامی و ارتباطی توان بالایی دارند.آن‌ها در درک و بیان ویژگی‌های خود مهارت زیادی دارند اما نمی‌توانند احساساتشان را کنترل کنند.'
              }
            />
            <div className="flex gap-3 flex-wrap">
              <JobItems item={' معماری'} />
              <JobItems item={'  بازیگری'} />
              <JobItems item={'  طراحی'} />
            </div>
          </div>

          <div className="flex flex-col gap-3 bg-[#ffc25944] border  rounded-xl p-4">
            <Cart
              title={'اجتماعی(Social) '}
              content={
                'حمایتگر و مربیدر فعالیت‌های اجتماعی و کمک کردن به دیگران پیش قدم هستند. آن‌ها علاقه زیادی به کارهای بدنی و فعالیت‌های سازمان یافته ندارند'
              }
            />
            <div className="flex gap-3 flex-wrap">
              <JobItems item={' معلمی'} />
              <JobItems item={'  پزشک'} />
              <JobItems item={'  مشاوره'} />
            </div>
          </div>

          <div className="flex flex-col gap-3 bg-[#ffc25944] border  rounded-xl p-4">
            <Cart
              title={' مدیر و جسور(Enterprising)'}
              content={
                'حمایتگر و مربیدر فعالیت‌های اجتماعی و کمک کردن به دیگران پیش قدم هستند. آن‌ها علاقه زیادی به کارهای بدنی و فعالیت‌های سازمان یافته ندارند'
              }
            />
            <div className="flex gap-3 flex-wrap">
              <JobItems item={' مدیریتی'} />
              <JobItems item={'  تجاری'} />
              <JobItems item={'  مالی'} />
            </div>
          </div>
          <div className="flex flex-col gap-3 bg-[#ffc25944] border  rounded-xl p-4">
            <Cart
              title={' عمل‌گرا (Realistic)'}
              content={
                'ابزارگرا، کنشی و فیزیکیواقع‌گرایان یا به عبارتی عمل‌گرایان، کارهای عملیاتی را نسبت به تئوری ترجیح می‌دهند. او دوست دارد نتیجه‌ی فعالیت‌هایش را واضح ببیند.'
              }
            />
            <div className="flex gap-3 flex-wrap">
              <JobItems
                item={
                  ' انواع شغل های فنی مهندسی , کشاورزی و خدماتی'
                }
              />
            </div>
          </div>
        </section>
        <div className="flex items-center">
          <img
            src={lump}
            alt=""
            className="w-[76px] ml-3 aspect-square"
          />
          <p>
            پاسخ های شما به سوالات مطرح شده در
            ازمون هالند در کنار یکدیگر مشخص میکند
            که شخصیت و علایق شغلی و کاریشما تا چه
            حد به هر یک از تیپ های شخصیتی نزدیک تر
            است.3 تیپ شغلی که بالاترین امتیاز را
            کسب میکند نشان میدهند{' '}
          </p>
        </div>
        {results && (
          <CustomPieChart results={results} />
        )}
      </section>
    </>
  );
}
export default Result;
