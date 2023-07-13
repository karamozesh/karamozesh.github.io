import MoshavereRequsetTicket from './MoshavereReuqestTicket';

const ResultMoshavereRequest = ({ tickets }) => {
  return (
    <div className="h-[630px] overflow-hidden overflow-y-auto scroll pt-5">
      {tickets.length > 0 ? (
        tickets.map((ticket) => (
          <MoshavereRequsetTicket
            request={ticket}
          />
        ))
      ) : (
        <span
          style={{ color: '#000000A1' }}
          className="flex justify-center items-center h-full w-full text-base"
        >
          شما درخواستی ثبت نکرده اید!
        </span>
      )}
    </div>
  );
};

export default ResultMoshavereRequest;
