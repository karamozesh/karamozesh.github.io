import ResumeInput from '../../ResumeInput';
import ResumePeyvast from '../../ResumePeyvast';

const Certification = ({ heightOfChildren }) => {
  return (
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
  );
};

export default Certification;
