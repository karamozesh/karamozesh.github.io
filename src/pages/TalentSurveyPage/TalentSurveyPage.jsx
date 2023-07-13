import TalentTestCard from '../../components/TalentSurvey/TalentTestCard';

import talentLogo from '/src/images/talent-survey.png';
import halandImage from '/src/images/Haland.png';
import diskImage from '/src/images/Disk.png';
import mbtiImage from '/src/images/Mbti.png';
import { useSelector } from 'react-redux';

export default function TalentSurveyPage() {
  const { talent_result: talentArrayResult } =
    useSelector((state) => state.profile);

  let mbtiIsDone, halandIsDone;

  talentArrayResult?.forEach((item) => {
    if (item.name === 'haland')
      halandIsDone = true;
    else if (item.name === 'mbti')
      mbtiIsDone = true;
  });

  const talentSurvey_list = [
    {
      id: 2,
      name: 'mbti',
      title: 'MBTI (مایرز بریگز)',
      description:
        ' تست MBTI، یک پرسش‌نامه روان‌سنجی فردی است که برای شناسایی نوع شخصیت، نقاط قوت و اولویت‌های افراد طراحی شده است. ه‌طور مشخص، تست شخصیت شناسی به افراد کمک می‌کند تا شناخت بهتری از خود و دیگران پیدا کند. این شناخت یکی از باارزش‌ترین خصیصه‌هایی است که افراد در هر سازمان یا مجموعه‌ای می‌توانند در اختیار داشته باشند. اهمیت شناخت صحیح از شخصیت، هم برای سازمان و هم برای افراد، از چنان اهمیتی برای موفقیت فردی و سازمانی برخورد است که به‌هیچ ‌عنوان نمی‌توان آن را دست‌کم گرفت.',
      image: mbtiImage,
      doneBefore: mbtiIsDone,
    },
    {
      id: 3,
      name: 'haland',
      title: 'هالند',
      description:
        ' تست رغبت سنجی شغلی هالند، یکی از معتبرترین آزمون‌ها برای کشف علایق و تمایلات شغلی هر فرد است. نام این آزمون از نام نظریه‌پرداز آن جان هالند برگرفته شده است که معتقد بود همخوانی بین شغل و تمایلات و علایق فرد، بازدهی فرد در آن شغل را به‌شدت افزایش می‌دهد. در مدل نظری جان هالند، ۶ تیپ اصلی شغلی وجود دارد که با پاسخ دادن به سؤالات این تست، میزان علاقه و تمایل افراد به هریک از این تیپ‌های شغلی مورد سنجش قرار می‌گیرد. خروجی این آزمون لیستی از مشاغل و رشته‌های تحصیلی را پیشنهاد خواهد کرد که بیشترین تناسب را با علایق و تمایلات شما دارد و احتمال موفقیتتان در آن‌ها بیشتر است.',
      image: halandImage,
      doneBefore: halandIsDone,
    },
  ];

  return (
    <div>
      <section className="container mx-auto p-7 mt-7">
        <section className="flex  gap-5   items-center">
          <div className="lg:w-1/2 w-full ">
            <h1>چرا استعداد سنجی؟</h1>
            <p>
              تست استعدادیابی شغلی به شما کمک
              میکند تا متناسب با پارامترهای خاص
              مهارتهای دارای تخصص و علاقه خود را
              بشناسید. قبل از هر چیز بدانید در
              دنیای ما واژه استعداد بد جا
              افتاده.استعداد به معنای این نیست که
              من چه توانایی ها دارم و چه شغلی برای
              من مناسب است. استعداد از ذهن شما و
              تصوراتتان نسبت به من برتر بدست می
              آید. استعداد ازباورهای ذهنی، علایق،
              تجربیات و محیط فرهنگی تولید میشود.
              تست استعدادیابی شغلی به شما و مشاور
              کمک میکند تا درک بهتری از داده های
              ذهنی داشته باشیم و متناسب با آن به
              هدف بزنیم.
            </p>
          </div>
          <div className="lg:block h-full hidden ">
            <figure className="h-full ">
              <img src={talentLogo} alt="" />
            </figure>
          </div>
        </section>
      </section>
      <section className="container mx-auto p-7">
        <section className="flex flex-col gap-5">
          <h1 className="">نمونه تست</h1>
          {talentSurvey_list.map((item) => (
            <TalentTestCard
              key={item.id}
              name={item.name}
              title={item.title}
              description={item.description}
              image={item.image}
              doneBefore={item.doneBefore}
            />
          ))}
        </section>
      </section>
    </div>
  );
}
