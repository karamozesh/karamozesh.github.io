import ResumeInput from '../ResumeInput';

const EducationContent = () => {
  return (
    <div className="resume-step-content">
      <div className="grid grid-cols-2 gap-20 pt-8">
        <ResumeInput
          label="مقطع تحصیلی"
          type="text"
          name="grade-education"
          onChange={null}
        />
        <ResumeInput
          label="رشته تحصیلی"
          type="text"
          name="field-of-study"
          onChange={null}
        />
      </div>
      <div className="grid grid-cols-2 gap-20 mt-8 mb-16">
        <div className="grid grid-cols-2 gap-12">
          <ResumeInput
            label="تاریخ شروع"
            type="date"
            name="start-date"
            onChange={null}
          />
          <ResumeInput
            label="تاریخ پایان"
            type="date"
            name="end-date"
            onChange={null}
          />
        </div>
        <ResumeInput
          label="نام دانشگاه"
          type="text"
          name="name-university"
          onChange={null}
        />
      </div>
    </div>
  );
};

export default EducationContent;
