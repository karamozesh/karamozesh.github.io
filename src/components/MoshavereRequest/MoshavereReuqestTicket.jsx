import againPeygiri from '../../asset/icon/entypo_cycle.svg';

import styles from './MoshavereRequest.module.css';

const MoshavereRequsetTicket = ({ request }) => {
  const { zamine, status } = request;

  let ticketContent;

  const peygiriClickHandler = () => {};

  switch (status) {
    case '1':
      ticketContent = (
        <>
          <p>
            زمینه مشاوره :{' '}
            <span
              className=""
              style={{ color: '#00000080' }}
            >
              {zamine.label}
            </span>
          </p>
          <p>
            وضعیت :{' '}
            <span
              className=""
              style={{ color: '#00000080' }}
            >
              در حال بررسی
            </span>
          </p>
          <div className="flex items-center">
            <p className="ml-1">پیگیری مجدد</p>
            <img
              src={againPeygiri}
              alt=""
              className="cursor-pointer"
              onClik={peygiriClickHandler}
            />
          </div>
        </>
      );
      break;
    case '2':
      ticketContent = (
        <>
          <p>
            زمینه مشاوره :{' '}
            <span
              className=""
              style={{ color: '#00000080' }}
            >
              {zamine.label}
            </span>
          </p>
          <p>
            وضعیت :{' '}
            <span
              className=""
              style={{ color: '#00000080' }}
            >
              پاسخ داده شده
            </span>
          </p>
          <div className='flex justify-end'>
            <p className="text-left">
              {request.last_date}
            </p>
          </div>
        </>
      );
      break;
    case '3':
      ticketContent = (
        <>
          <p>
            زمینه مشاوره :{' '}
            <span
              className=""
              style={{ color: '#00000080' }}
            >
              {zamine.label}
            </span>
          </p>
          <p>
            وضعیت :{' '}
            <span
              className=""
              style={{ color: '#00000080' }}
            >
              اتمام مشاوره
            </span>
          </p>
          <div className="flex justify-end">
            <p className='text-left'>{request.last_date}</p>
          </div>
        </>
      );
      break;
    default:
      throw new Error(
        'Invalid status Request Ticket.',
      );
  }

  return (
    <div
      className={`grid grid-cols-ticket items-center mx-4 px-3 py-5 mb-5 shadow-mahdis ${styles.ticket}`}
    >
      {ticketContent}
    </div>
  );
};

export default MoshavereRequsetTicket;
