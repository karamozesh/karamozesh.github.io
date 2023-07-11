export const getLabelFromDate = (date) => {
  const day = new Intl.DateTimeFormat(
    'fa-IR-u-nu-latn',
    { day: '2-digit' },
  ).format(date);

  const month = new Intl.DateTimeFormat(
    'fa-IR-u-nu-latn',
    { month: 'long' },
  ).format(date);

  const year = new Intl.DateTimeFormat(
    'fa-IR-u-nu-latn',
    { year: 'numeric' },
  ).format(date);

  const dayLong = new Intl.DateTimeFormat(
    'fa-IR-u-nu-latn',
    { weekday: 'long' },
  ).format(date);

  const label =
    day +
    ' ' +
    month +
    ' ' +
    year +
    ' - ' +
    dayLong;

  return label;
};

export const getDateValue = (date) => {
  const day = date.getDate();
  const month =
    date.getMonth().toString().length > 1
      ? date.getMonth()
      : '0' + date.getMonth();
  const year = date.getFullYear();

  const dateString =
    year + '-' + month + '-' + day;

  return dateString;
};
