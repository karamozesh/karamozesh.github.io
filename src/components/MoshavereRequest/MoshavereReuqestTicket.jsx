import styles from './MoshavereRequest.module.css';
import MoshavereRequestConversation from './MoshavereRequestConversation';

import messageSendIcon from '../../asset/icon/send-message-icon.png';

import caretBottom from '../../asset/icon/caret-bottom_icon.svg';

import { useRef, useState } from 'react';
import { getDateLabelJalaali } from '../../functions/date';
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button';

import trashIcon from '../../asset/icon/trash.svg';
import { Tooltip } from 'antd';

const MoshavereRequsetTicket = ({ request }) => {
  const { tags, status } = request;
  const [showMessages, setShowMessages] =
    useState(false);

  const navigate = useNavigate();

  const navigateToTicketPage = () => {
    navigate(`/moshavere-request/${request.id}`);
  };

  const messages = request.messages;

  const last_date = getDateLabelJalaali(
    new Date(
      messages[messages.length - 1].created_time,
    ),
  );

  let ticketContent;

  const messageRef = useRef('');

  const sendMessageHandler = (e) => {
    e.preventDefault();

    if (messageRef.current.value.trim() !== '') {
      messageRef.current.value = '';
      console.log('message send...');
    }
  };

  const showMessageToggle = () => {
    setShowMessages((prev) => !prev);
  };

  switch (status) {
    case '1':
      ticketContent = (
        <>
          <div className="flex items-center">
            <p className="whitespace-nowrap">
              زمینه مشاوره :{' '}
            </p>
            <div className="flex flex-wrap w-[90%]">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="mr-4"
                  style={{ color: '#00000080' }}
                >
                  {index > 0 ? ',' : ''}
                  {tag.name}{' '}
                </span>
              ))}
            </div>
          </div>
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
              {last_date}
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
                {/* {zamine.map(item => item)} */}
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
                {last_date}
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
              {/* {zamine.label} */}
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
              {last_date}
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
      className={`flex flex-col ml-2 ${
        status !== '2' ? 'px-3 py-4' : ''
      } border-[1px] border-gray-500/30 `}
    >
      <div className="w-full flex items-center justify-between">
        <div className="w-[70%] flex">
          <p className="w-[50%] flex flex-col text-lg">
            موضوع:{' '}
            <span
              style={{ color: '#00000080' }}
              className="text-sm"
            >
              {request.title}
            </span>
          </p>
          <p
            className={`w-[50%] flex flex-col text-lg`}
          >
            سوال:{' '}
            <span
              style={{ color: '#00000080' }}
              className="text-sm"
            >
              {messages[0].question}
            </span>
          </p>
        </div>
        <div className="flex w-[40%] justify-end">
          <Button
            onClick={navigateToTicketPage}
            className="w-fit ml-4 bg-primaryColor text-white"
          >
            بریم به چتا
          </Button>
          <Tooltip title="این قابلیت به زودی اضافه خواهد شد">
            <Button className="flex items-center w-fit whitespace-nowrap mr-2 bg-red-500 text-white cursor-not-allowed">
              حذف تیکت
              <img
                src={trashIcon}
                alt=""
                className="mr-1"
              />
            </Button>
          </Tooltip>
        </div>
      </div>
      <div
        className={`${
          status !== '2'
            ? 'grid grid-cols-ticket items-center px-3 py-4'
            : 'flex flex-col'
        }`}
      >
        {ticketContent}
      </div>
    </div>
  );
};

export default MoshavereRequsetTicket;
