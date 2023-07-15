import MoshavereRequsetTicket from './MoshavereReuqestTicket';

const reverseArray = (array) => {
  const reversedArray = [];
  for (let i = array.length - 1; i > -1; i--) {
    const ticket = array[i];

    reversedArray.push(ticket);
  }

  return reversedArray;
};

const ResultMoshavereRequest = ({ tickets }) => {
  let reverseTickets = reverseArray(tickets);

  return (
    <div className="h-[630px] overflow-hidden overflow-y-auto scroll pt-5">
      {reverseTickets.length > 0 ? (
        reverseTickets.map((ticket) => (
          <MoshavereRequsetTicket
            request={ticket}
          />
        ))
      ) : (
        <span
          style={{ color: '#000000A1' }}
          className="flex w-full text-base"
        >
          شما درخواستی ثبت نکرده اید!
        </span>
      )}
    </div>
  );
};

export default ResultMoshavereRequest;
