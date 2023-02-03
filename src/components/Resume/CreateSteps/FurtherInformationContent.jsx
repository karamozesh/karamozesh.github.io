import { Slider, Table, Tabs } from 'antd';
import ResumeInput from '../ResumeInput';
import ButtonAddResume from '../../UI/ButtonAddResume';

const FurtherInformationContent = () => {
  const heightOfChildren = 'h-[350px]';

  const items = [
    {
      key: 1,
      label: 'مختصری از من',
      children: (
        <div
          className={`flex flex-col w-full h-[350px] p-4 ${heightOfChildren}`}
        >
          در این قسمت می‌توانید هر آنچه در قسمت
          های قبل در مورد شما گفته نشده است را
          بگویید
          <textarea
            type="text"
            className="flex h-full p-4 mt-4 border border-gray-600 rounded-md shadow-md"
          />
        </div>
      ),
    },
    {
      key: 2,
      label: 'زبان ها',
      children: (
        <div
          className={`grid grid-cols-2 gap-20 ${heightOfChildren}`}
        >
          <div>
            <ResumeInput
              label="زبان"
              type="text"
            />
            <div className="flex flex-col my-4">
              <Slider min={1} max={5} step={1} />
              <span className="self-end">
                25%
              </span>
            </div>
            <ButtonAddResume onClick={null} />
          </div>
        </div>
      ),
    },
    {
      key: 3,
      label: 'گواهینامه و دوره ها',
      children: '',
    },
    { key: 4, label: 'علاقه مندی', children: '' },
    {
      key: 5,
      label: 'راه های ارتباطی',
      children: '',
    },
  ];

  return (
    <div className="resume-step-content">
      <h3 className="mb-4">
        مواردی که می‌خواهید در رزومه خودتان اضافه
        کنید.
      </h3>
      <Tabs
        tabPosition="left"
        items={items}
        size="large"
      />
    </div>
  );
};

export default FurtherInformationContent;
