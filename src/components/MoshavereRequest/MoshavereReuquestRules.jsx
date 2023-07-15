const MoshavereRequestRules = ({ activeTab }) => {
  const priceArray = [
    { countMonth: 1, price: '250,000' },
    { countMonth: 2, price: '450,000' },
    { countMonth: 3, price: '600,000' },
  ];

  return (
    <div>
      <div
        className="px-5 rounded-md py-4"
        style={{
          boxShadow: '0px 0px 4px 0px #00000040',
        }}
      >
        <h4 className="text-lg font-bold">
          فرم درخواست مشاوره تخصصی
        </h4>
        <p>
          نتیجه یک مشاوره میتواند انتخاب درست یا
          اشتباه یک مسیر آموزشی طولانی باشد. پس
          همواره بایستی به دنبال متخصصانی بگردیم
          که دریافت مشاوره از آنها سبب پشیمانی ما
          در آینده نشود. آموزشیار مشاورین خود را
          از میان بهترین متخصصان در زمینه های
          برنامه نویسی انتخاب میکند. با پر کردم
          فرم روبه رو، یک مشاوره به صورت کاملا
          رایگان برای شما در نظر گرفته خواهد شد.
        </p>

        <br />
        <p>
          لطفا برای ارسال سوال خود به نکات زیر
          توجه کنید.
        </p>
        <br />

        <ol className="pr-3 list-disc text-sm">
          <li>
            درباره سوال خود توضیحات کافی ارسال
            کنید. در غیر این صورت امکان پاسخگویی
            وجود ندارد.
          </li>
          <li>
            وارد کردن آدرس ایمیل برای اطلاع رسانی
            به شما در زمان پاسخ دادن به پرسش شما و
            یا راه ارتباطی می باشد و اختیاری است.
          </li>
          <li>
            در صورت وارد کردن ادرس ایمیل ، آدرس
            ایمیل شما در هیچ کجای سایت نمایش داده
            نخواهد شد و محرمانه می باشد.
          </li>
          <li>
            در قسمت نام لطفا یک نام برای خود وارد
            کنید. در صورتی که مایل به وارد کردن
            نام واقعی خود نیستید نام مستعار وارد
            نمایید.
          </li>
          <li>
            مدت زمان پاسخ گویی به سوالات از ۱ ساعت
            تا ۱ هفته می باشد.
          </li>
        </ol>
        <br />
        <p>
          برای پیگیری پاسخ سوال خود لطفا مجددا به
          سایت مراجعه نمایید.
        </p>
      </div>
      {activeTab === 1 ? (
        <>
          <EshterakRules
            priceArray={priceArray}
          />
          <p className="mt-9 text-center">
            توضیحات
          </p>
        </>
      ) : null}
    </div>
  );
};

export default MoshavereRequestRules;

const EshterakRules = ({ priceArray }) => {
  return (
    <div className="flex flex-col bg-secondaryColor p-4 mt-9 rounded-[5px] shadow-mahdis">
      <p className="mb-4 text-base">
        قیمت اشتراک
      </p>
      <div className="grid grid-cols-3 justify-end gap-x-4 w-[80%] self-end">
        {priceArray.map((item) => (
          <AccPriceEshterak
            countMonth={item.countMonth}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

const AccPriceEshterak = ({
  countMonth,
  price,
}) => {
  return (
    <div className="w-fit p-4 text-center bg-white rounded-lg shadow-mahdis">
      <p className="text-base">
        اشتراک {countMonth} ماهه{' '}
      </p>
      <span className="text-xs">
        قیمت: {price} تومان
      </span>
    </div>
  );
};
