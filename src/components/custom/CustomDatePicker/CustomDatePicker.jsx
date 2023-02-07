import {
  DatePicker as DatePickerJalali,
  JalaliLocaleListener,
} from 'antd-jalali';
import fa_IR from 'antd/locale/fa_IR';
import { ConfigProvider } from 'antd';

const CustomDatePicker = ({
  value,
  onChange,
}) => {
  const currentDate = new Date();

  const current_year = Intl.DateTimeFormat(
    'fa-IR-u-nu-latn',
    { year: 'numeric' },
  ).format(currentDate);

  const current_month = Intl.DateTimeFormat(
    'en-US-u-ca-persian',
    { month: 'numeric' },
  ).format(currentDate);

  const current_day = Intl.DateTimeFormat(
    'en-US-u-ca-persian',
    { day: 'numeric' },
  ).format(currentDate);

  const maximumDate = {
    year: current_year,
    month: current_month,
    day: current_day,
  };

  return (
    <ConfigProvider
      locale={fa_IR}
      direction="rtl"
    >
      <JalaliLocaleListener />
      <DatePickerJalali
        value={value}
        placement="topRight"
        onChange={onChange}
        className="py-2 px-4 rounded-xl bg-gray-400 border-0 text-base"
      />
    </ConfigProvider>
  );
};

export default CustomDatePicker;
