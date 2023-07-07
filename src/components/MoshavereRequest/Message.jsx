import questionPolygon from '../../asset/images/message-polygon-question.svg';
import answerPolygon from '../../asset/images/message-polygon-answer.svg';

const Message = ({ text, type }) => {
  return (
    <div
      className={`relative w-[60%] p-2 mb-2 ${
        type === 'answer'
          ? 'self-end bg-[#D5EEDC]'
          : 'bg-white'
      } rounded-bl-[5px]`}
    >
      {text}
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
