import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import ResultMoshavereRequest from '../MoshavereRequest/ResultMoshavereRequest';
export default function p2() {
  return (
    <div>
      <div className="rounded-md flex w-full mt-5">
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
          <Button className="bg-indigo-300 rounded-sm text-xs">
            همه درخواست ها
          </Button>
          <Button className=" bg-indigo-300 rounded-sm mr-2 text-xs">
            فیلتر
          </Button>

          <Link
            to="/moshavere-request"
            className="text-lime-600 mr-4 text-xs"
          >
            درخواست جدید
          </Link>
        </div>
      </div>
      <ResultMoshavereRequest />
    </div>
  );
}
