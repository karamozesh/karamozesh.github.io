import talentLogo from '/src/images/talent-survey.png';
export default function QuestionSurvey() {
  // component for show question of talentSurvey
  // has 2 prop: question, choices
  // question is a string
  // choices is a list of objs, obj: { text: string, point: number }
  return (
    <>
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
    </>
  );
}
