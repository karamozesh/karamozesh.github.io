import {
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  useNavigate,
  useParams,
} from 'react-router-dom';
import MoshavereRequestConversation from '../../components/MoshavereRequest/MoshavereRequestConversation';

import messageSendIcon from '../../asset/icon/send-message-icon.png';
import { useRef } from 'react';
import { ticketSendMessage } from '../../store/ticket-slice';
import { getDateLabelJalaali } from '../../functions/date';

const UserTicketPage = () => {
  const { tickets } = useSelector(
    (state) => state.ticket,
  );
  const { user_token } = useSelector(
    (state) => state.auth,
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { ticketId } = useParams();

  const ticketSelected = tickets.find(
    (ticket) => +ticket.id === +ticketId,
  );

  const messageRef = useRef(null);

  const sendMessageHandler = async (e) => {
    e.preventDefault();

    const message = messageRef.current.value;

    if (message.trim() === '') return;

    const data = { message, ticketId };

    dispatch(
      ticketSendMessage({
        user_token,
        data,
      }),
    );

    messageRef.current.value = '';
  };

  return (
    <div className="w-[90%] mx-auto my-10 pb-10">
      <div className="flex flex-col gap-y-4 mb-8">
        <p className="pr-2 border-r-[10px] border-secondaryColor">
          تاپیک تیکت:{' '}
          <span className="text-xs mr-2 text-gray-500">
            {ticketSelected.messages[0].question}
          </span>
        </p>
        <p className="pr-2 border-r-[10px] border-primaryColor">
          شماره تیکت :{' '}
          <span className="text-xs mr-2 text-gray-500">
            {ticketId}
          </span>
        </p>
        <p className="pr-2 border-r-[10px] border-greenColor">
          ساخته شده در
          <span className="text-xs mr-2 text-gray-500">
            {getDateLabelJalaali(
              new Date(
                ticketSelected.meeting_date,
              ),
            )}
          </span>
        </p>
      </div>
      <MoshavereRequestConversation
        messages={ticketSelected.messages}
      />
      <form
        className="sticky bottom-0 flex items-center w-full border-[1px] border-t-0 bg-white"
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
    </div>
  );
};

export default UserTicketPage;
