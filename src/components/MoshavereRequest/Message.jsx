import questionPolygon from '../../asset/images/message-polygon-question.svg';
import answerPolygon from '../../asset/images/message-polygon-answer.svg';
import { dateToMessageTime } from '../../functions/date';

const Message = ({ text, type, date }) => {
  const dateObj = new Date(date);

  return (
    <div
      className={`relative w-[60%] h-max p-2 px-[90px] mb-2 rounded-full break-words ${
        type === 'answer'
          ? 'self-end bg-[#D5EEDC] rounded-bl-none'
          : 'bg-white rounded-br-none'
      }`}
      style={{ whiteSpace: 'initial' }}
    >
      {text}
      <span
        className="absolute right-2 -bottom-1"
        style={{
          fontSize: '14px',
          direction: 'ltr',
        }}
      >
        {dateToMessageTime(dateObj)}
      </span>
      {type === 'question' ? (
        <img
          className="absolute -right-[8px]"
          style={{
            bottom: '-1px',
            fill: '#D5EEDC',
          }}
          src={questionPolygon}
        />
      ) : (
        <img
          className="absolute -left-[8px]"
          style={{
            bottom: '-1px',
          }}
          src={answerPolygon}
        />
      )}
    </div>
  );
};

export default Message;
