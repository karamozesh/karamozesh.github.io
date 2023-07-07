import MoshavereRequestForm from '../../components/MoshavereRequest/MoshavereReuqestForm';
import MoshavereRequestRules from '../../components/MoshavereRequest/MoshavereReuquestRules';

import { useState } from 'react';

export default function MoshavereRequestPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="px-4 py-4 md:py-7 md:px-11">
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
      <div className="grid grid-cols-1 gap-x-4 gap-y-10 mt-20 items-start lg:grid-cols-2 lg:gap-y-0">
        <MoshavereRequestRules
          activeTab={activeTab}
        />
        <MoshavereRequestForm
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
    </div>
  );
}
