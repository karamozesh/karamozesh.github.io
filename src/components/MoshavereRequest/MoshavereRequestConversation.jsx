import Message from './Message';

const MoshavereRequestConversation = ({
  messages,
  small,
}) => {
  return messages?.length > 0 ? (
    <div
      className={`min-h-[250px] flex flex-col  w-[100%] p-4 bg-[#D0D0D0] ${
        small ? 'text-xs' : 'text-base'
      } overflow-y-auto scroll`}
    >
      {messages.map(({ type, text }) => (
        <Message type={type} text={text} />
      ))}
    </div>
  ) : null;
};

export default MoshavereRequestConversation;
