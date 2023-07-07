import Message from './Message';

const MoshavereRequestConversation = ({
  messages,
  small,
}) => {
  // let messages = [...ansArray, ...qusetionArray];

  // messages = messages.sort(
  //   (message1, message2) => {
  //     const messageDate1 = new Date(
  //       message1.date,
  //     );
  //     const messageDate2 = new Date(
  //       message2.date,
  //     );
  //     return messageDate1 - messageDate2;
  //   },
  // );

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
