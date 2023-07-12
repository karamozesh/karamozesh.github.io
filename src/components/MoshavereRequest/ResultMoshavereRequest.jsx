import MoshavereRequsetTicket from './MoshavereReuqestTicket';

const ResultMoshavereRequest = () => {
  // status: '1' => در حال بررسی
  // status: '2' => پاسخ داده شده
  // status: '3' => اتمام مشاوره
  const requests = [
    {
      zamine: {
        label: 'هوش مصنوعی',
        value: 'hosh',
      },
      last_date: '1402/04/22',
      status: '1',
    },
    {
      zamine: {
        label: 'فرانت اند',
        value: 'front',
      },
      status: '2',
      last_date: '1402/03/20',
    },
    {
      zamine: {
        label: 'فرانت اند',
        value: 'front',
      },
      status: '2',
      last_date: '1402/03/02',
    },
    {
      zamine: {
        label: 'فرانت اند',
        value: 'front',
      },
      status: '3',
      last_date: '1402/04/22',
    },
  ];

  return (
    <div className="h-[630px] overflow-y-auto scroll pt-5">
      {requests.length > 0 ? (
        requests.map((requset) => (
          <MoshavereRequsetTicket
            request={requset}
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
