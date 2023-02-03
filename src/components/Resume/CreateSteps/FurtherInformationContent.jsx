import { Slider, Table, Tabs } from 'antd';
import ResumeInput from '../ResumeInput';
import ButtonAddResume from '../../UI/ButtonAddResume';
import ResumeSkillCard from '../ResumeSkillCard';
import ResumePeyvast from '../ResumePeyvast';

const FurtherInformationContent = () => {
  const heightOfChildren = 'h-[350px]';

  const items = [
    {
      key: 1,
      label: 'مختصری از من',
      children: (
        <div
          className={`flex flex-col w-full h-[350px] p-2 ${heightOfChildren}`}
        >
          <p className="mb-4">
            در این قسمت می‌توانید هر آنچه در قسمت
            های قبل در مورد شما گفته نشده است را
            بگویید
          </p>
          <ResumePeyvast />
        </div>
      ),
    },
    {
      key: 2,
      label: 'زبان ها',
      children: (
        <div
          className={`grid grid-cols-3 gap-12 ${heightOfChildren}`}
        >
          <div className="col-span-2">
            <ResumeInput
              label="زبان"
              type="text"
            />
            <div className="flex flex-col my-8">
              <Slider min={1} max={5} step={1} />
              <span className="self-end">
                25%
              </span>
            </div>
            <ButtonAddResume onClick={null} />
          </div>
          <div className="py-4">
            {/* <ResumeSkillCard
              nameSkill="برنامه نویسی"
              lvlSkill={4}
              id={1}
              className="mb-4"
            />
            <ResumeSkillCard
              nameSkill="برنامه نویسی"
              lvlSkill={4}
              id={1}
            /> */}
          </div>
        </div>
      ),
    },
    {
      key: 3,
      label: 'گواهینامه و دوره ها',
      children: (
        <div
          className={`grid grid-cols-2 gap-20 ${heightOfChildren}`}
        >
          <div className="flex flex-col">
            <ResumeInput
              label="عنوان مدرک"
              type="text"
              onChange={null}
              name="title-madrak"
              className="mb-8"
            />
            <ResumeInput
              label="عنوان مدرک"
              type="text"
              onChange={null}
              name="title-madrak"
              className="mb-8"
            />
            <div className="grid grid-cols-2 gap-12">
              <ResumeInput
                label="تاریخ صدور"
                name="date-sodor"
                onChange={null}
                type="date"
              />
              <ResumeInput
                label="تاریخ انقضا"
                name="date-engheza"
                onChange={null}
                type="date"
              />
            </div>
          </div>
          <ResumePeyvast />
        </div>
      ),
    },
    {
      key: 4,
      label: 'علاقه مندی',
      children: (
        <div className="grid grid-cols-2 gap-20">
          <div>
            <ResumeInput
              label="علاقه مندی"
              name="favorites"
              type="text"
              onChange={null}
              placeholder="مثلا عکاسی"
              className="mb-8"
            />
            <ButtonAddResume onClick={null} />
          </div>
          <div>
            <ResumeSkillCard
              id={1}
              nameSkill="عکاسی"
            />
          </div>
        </div>
      ),
    },
    {
      key: 5,
      label: 'راه های ارتباطی',
      children: (
        <div className="grid grid-cols-2 gap-20">
          <div>
            <ResumeInput
              label="راه های ارتباطی من"
              type="text"
              name="contact-name"
              onChange={null}
              className="mb-8"
            />
            <ResumeInput
              label="لینک مورد نظر "
              type="text"
              name="contant-link"
              onChange={null}
              className="mb-8"
            />
            <ButtonAddResume />
          </div>
          <div></div>
        </div>
      ),
    },
  ];

  return (
    <div className="resume-step-content">
      <h3 className="my-8">
        مواردی که می‌خواهید در رزومه خودتان اضافه
        کنید.
      </h3>
      <div className="w-full">
        <Tabs
          // left is right for fa
          tabPosition="left"
          items={items}
          size="large"
        />
      </div>
    </div>
  );
};

export default FurtherInformationContent;
