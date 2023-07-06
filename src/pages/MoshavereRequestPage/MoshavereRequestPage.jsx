import MoshavereRequestForm from '../../components/MoshavereRequest/MoshavereReuqestForm';
import MoshavereRequestRules from '../../components/MoshavereRequest/MoshavereReuquestRules';

export default function MoshavereRequestPage() {
  return (
    <div className="px-11 py-7">
      <h2>
        دریافت مشاوره حرفه ای از متخصصین آموزشیار
      </h2>
      <p>
        این روزها در بستر اینترنت با حجم انبوهی از
        اطلاعات متنوع و مختلف سر و کار داریم. مشکل
        ما دیگر کمبود اطلاعات نیست، بلکه عدم وجود
        ترتیب، هماهنگی و ارتباط درست میان داده
        هاست. تنها راه خلاص شدن از این سردرگمی و
        پیدا کردن مسیر درست آموزشی، دریافت مشاوره
        از متخصصین خواهد بود. پس آموزشیار بستری
        برای دریافت مشاوره آن هم به صورت رایگان و
        تخصصی برای شما فراهم کرده است.
      </p>
      <div className="grid grid-cols-2 gap-x-5 mt-20">
        <MoshavereRequestRules />
        <MoshavereRequestForm />
      </div>
    </div>
  );
}
