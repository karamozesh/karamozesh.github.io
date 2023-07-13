import questionPolygon from '../../asset/images/message-polygon-question.svg';
import answerPolygon from '../../asset/images/message-polygon-answer.svg';
import { dateToMessageTime } from '../../functions/date';

const Message = ({ text, type, date }) => {
  const dateObj = new Date(date);

  return (
    <div
      className={`relative w-[60%] h-max p-2 pb-5 px-[20px] md:px-[90px] mb-2 rounded-[10px] md:rounded-[50px] break-words ${
        type === 'answer'
          ? 'self-end bg-[#D5EEDC] rounded-bl-none md:rounded-bl-none'
          : 'bg-white rounded-br-none md:rounded-br-none'
      }`}
      style={{ whiteSpace: 'initial' }}
    >
      <p style={{ shapeOutside: 'circle(50%)' }}>
        {text}
      </p>
      <span
        className="absolute right-2 -bottom-1 text-gray-500/80"
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
            bottom: '-0.5px',
          }}
          src={questionPolygon}
        />
      ) : (
        <img
          className="absolute -left-[8px]"
          style={{
            bottom: '-0.5px',
          }}
          src={answerPolygon}
        />
      )}
    </div>
  );
};

export default Message;
