import Message from './Message';

const MoshavereRequestConversation = ({
  messages,
  small,
}) => {
  return messages?.length > 0 ? (
    <div
      className={`min-h-[250px] flex flex-col w-[100%] p-4 bg-[#D0D0D0] ${
        small ? 'text-xs' : 'text-base'
      } overflow-y-auto scroll`}
    >
      {messages.map(
        ({ question, answer, created_time }) => (
          <Message
            key={created_time}
            type={
              question ? 'question' : 'answer'
            }
            text={question ?? answer}
            date={created_time}
          />
        ),
      )}
    </div>
  ) : null;
};

export default MoshavereRequestConversation;
