import { Space } from 'antd';
import ResumeSection from '../../../components/Resume/ResumeSection';
import { Link } from 'react-router-dom';

export default function ResumeCreatingHomePage() {
  return (
    <div className="main">
      <h1 className="inline-block pb-2 mb-4 border-b-2">
        ساختن رزومه
      </h1>
      <ResumeSection
        title="چرا بهتر است از رزومه ساز استفاده کنم؟"
        text={
          <p>
            استفاده از رزومه ساز، فرآیند ایجاد
            رزومه را به طور قابل توجهی سریعتر و
            آسان‌تر می کند. آیا تا به حال سعی
            کرده‌اید رزومه خود را با Word بسازید؟
            معمولا کار کردن با وُرد کم دردسر نیست
            - شما یک تغییر کوچک در رزومه خود ایجاد
            می کنید و طرح رزومه شما به هم می خورد.
            <br />
            با یک نرم افزار ساخت رزومه، شما بدون
            نگرانی نسبت به مشکلات ایجاد رزومه
            مانند انتخاب فونت، طرح‌بندی، قالب‌بندی
            و غیره به محتوای رزومه فکر می‌کنید.
            تنها کاری که باید انجام دهید این است
            که یک قالب رزومه انتخاب کرده، فرم
            اطلاعات رزومه را پر کنید و فایل رزومه
            شما آماده دانلود است!
          </p>
        }
      />
      <Space>
        <Link to="/resume-creating-app/base-information">
          <button className="text-base py-2 px-8 rounded-2xl shadow-2xl text-white bg-secondaryColor">
            ساخت رزومه
          </button>
        </Link>
      </Space>
    </div>
  );
}

const resumeCretingHomePageLoader = () => {
  return null;
};

export { resumeCretingHomePageLoader };
