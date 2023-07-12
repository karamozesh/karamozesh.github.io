import againPeygiri from '../../asset/icon/entypo_cycle.svg';

import styles from './MoshavereRequest.module.css';
import MoshavereRequestConversation from './MoshavereRequestConversation';

import messageSendIcon from '../../asset/icon/send-message-icon.png';

import caretBottom from '../../asset/icon/caret-bottom_icon.svg';

import { useRef, useState } from 'react';

const MoshavereRequsetTicket = ({ request }) => {
  const { zamine, status } = request;
  const [showMessages, setShowMessages] =
    useState(false);

  let ticketContent;

  const peygiriClickHandler = () => {};

  const messageRef = useRef('');

  const sendMessageHandler = (e) => {
    e.preventDefault();

    if (messageRef.current.value.trim() !== '') {
      messageRef.current.value = '';
      console.log('message send...');
    }
  };

  const question1 =
    'من نمیدونم چیجوری میشه از زبان برنامه نویسی سی اس اس استفاده کنم';

  const question2 = 'منابع را یادتون رفت بگید';

  const answer1 =
    'خب ببین کار خاصی نداره. اول از همه این یک زبان برنامه نویسی نیست. دوم میتونی با استفاده از منابعی که میدم ازش استفاده کنی';

  const answer2 = 'منابعی وجود نداره!';

  const messages = [
    { id: 1, text: question1, type: 'question' },
    { id: 2, text: answer1, type: 'answer' },
    { id: 3, text: question2, type: 'question' },
    { id: 4, text: question1, type: 'question' },
    { id: 5, text: answer2, type: 'answer' },
    { id: 6, text: question2, type: 'question' },
    { id: 7, text: answer1, type: 'answer' },
    { id: 8, text: answer2, type: 'answer' },
  ];

  const showMessageToggle = () => {
    setShowMessages((prev) => !prev);
  };

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
          <div className="flex justify-end">
            <p className="text-left">
              {request.last_date}
            </p>
          </div>
        </>
      );

      break;
    case '2':
      ticketContent = (
        <>
          <div className="w-full grid grid-cols-ticket items-center px-3 py-5">
            <p>
              زمینه مشاوره :{' '}
              <span
                className=""
                style={{ color: '#00000080' }}
              >
                {zamine.label}
              </span>
            </p>
            <div className="flex items-center whitespace-nowrap">
              وضعیت :{' '}
              <div
                className="flex items-center w-full mr-2 cursor-pointer"
                onClick={showMessageToggle}
              >
                <span
                  className="text-sm"
                  style={{ color: '#00000080' }}
                >
                  پاسخ داده شده
                </span>
                <img
                  src={caretBottom}
                  alt=""
                  className={`w-[10px] h-[7px] mr-2 transition-transform duration-300 ${
                    showMessages
                      ? 'rotate-180'
                      : ''
                  }`}
                />
              </div>
            </div>
            <div className="flex justify-end">
              <p className="text-left">
                {request.last_date}
              </p>
            </div>
          </div>
          <div className="h-[2px] bg-black-500"></div>
          {showMessages ? (
            <div className="max-h-[250px] inner-scroll overflow-y-auto">
              <MoshavereRequestConversation
                messages={messages}
                small={true}
              />
            </div>
          ) : null}
          <form
            className="flex items-center w-full"
            onSubmit={sendMessageHandler}
          >
            <button type="submit">
              <img
                className="w-[20px] h-[20px] mr-3 cursor-pointer"
                src={messageSendIcon}
                alt=""
              />
            </button>
            <input
              type="text"
              ref={messageRef}
              placeholder="متن خود را وارد کنید ..."
              className="w-full translate-y-100 my-2 mx-3 text-xs placeholder:text-[#0000008F] outline-none"
            />
          </form>
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
            <p className="text-left">
              {request.last_date}
            </p>
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
      className={`${
        status !== '2'
          ? 'grid grid-cols-ticket items-center px-3 py-4'
          : 'flex flex-col'
      } ml-4 mb-5 border-[1px] border-gray-500/30 ${
        styles.ticket
      } `}
    >
      {ticketContent}
    </div>
  );
};

export default MoshavereRequsetTicket;
