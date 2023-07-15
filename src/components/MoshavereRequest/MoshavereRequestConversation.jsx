import {
  getDateValue,
  isAnotherDay,
} from '../../functions/date';
import Message from './Message';

const MoshavereRequestConversation = ({
  messages,
  small,
}) => {
  let lastDay = new Date(
    messages[0].created_time,
  );

  return messages?.length > 0 ? (
    <div
      className={`min-h-[250px] flex flex-col w-[100%] p-4 bg-[#D0D0D0] ${
        small ? 'text-xs' : 'text-base'
      } overflow-y-auto scroll`}
    >
      {messages.map(
        ({ question, answer, created_time }) => {
          let currentDay = new Date(created_time);
          const needLabelDay = isAnotherDay(
            lastDay,
            currentDay,
          );
          const dateLabeld =
            getDateValue(currentDay);
          lastDay = currentDay;
          return (
            <>
              {needLabelDay && (
                <div className="flex justify-center">
                  <p className="w-fit py-1 px-2 my-8 rounded-3xl bg-white/50 border-4 border-white">
                    {dateLabeld}
                  </p>
                </div>
              )}
              <Message
                key={created_time}
                type={
                  question ? 'question' : 'answer'
                }
                text={question ?? answer}
                date={created_time}
              />
            </>
          );
        },
      )}
    </div>
  ) : null;
};

export default MoshavereRequestConversation;
