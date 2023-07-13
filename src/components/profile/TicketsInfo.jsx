import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import ResultMoshavereRequest from '../MoshavereRequest/ResultMoshavereRequest';
import { Tooltip } from 'antd';
import { useSelector } from 'react-redux';
export default function TicketsInfo() {
  const { tickets } = useSelector(
    (state) => state.ticket,
  );

  // status: '1' => در حال بررسی
  // status: '2' => پاسخ داده شده
  // status: '3' => اتمام مشاوره

  // const requests = [
  //   {
  //     zamine: {
  //       label: 'هوش مصنوعی',
  //       value: 'hosh',
  //     },
  //     last_date: '1402/04/22',
  //     status: '1',
  //   },
  //   {
  //     zamine: {
  //       label: 'فرانت اند',
  //       value: 'front',
  //     },
  //     status: '2',
  //     last_date: '1402/03/20',
  //   },
  //   {
  //     zamine: {
  //       label: 'فرانت اند',
  //       value: 'front',
  //     },
  //     status: '2',
  //     last_date: '1402/03/02',
  //   },
  //   {
  //     zamine: {
  //       label: 'فرانت اند',
  //       value: 'front',
  //     },
  //     status: '3',
  //     last_date: '1402/04/22',
  //   },
  // ];



  return (
    <div>
      <div className="rounded-md flex w-full mt-5 mb-10">
        <div>
          <h1 className="text-2xl">
            نتیجه درخواست
          </h1>
          <p className="text-xs mt-4">
            در این بخش می‌توانید وضعیت درخواست‌های
            مشاوره خود را در زمینه مورد نظر مشاهده
            کنید.
          </p>
          <br />
          {/* <Button className="bg-indigo-300 rounded-sm text-xs">
            همه درخواست ها
          </Button> */}
          <Tooltip title="به زودی این قابلیت ایجاد خواهد شد">
            <Button className=" bg-indigo-300 rounded-sm text-xs cursor-not-allowed">
              فیلتر
            </Button>
          </Tooltip>

          <Link
            to="/moshavere-request"
            className="text-lime-600 mr-4 text-xs"
          >
            درخواست جدید
          </Link>
        </div>
      </div>
      <ResultMoshavereRequest tickets={tickets} />
    </div>
  );
}
