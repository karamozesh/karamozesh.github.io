import ResumeInput from '../ResumeInput';

const WorkExperienceContent = () => {
  return (
    <div className="resume-step-content">
      <div className="grid grid-cols-2 gap-20 pt-8">
        <ResumeInput
          label="وضعیت شغلی"
          type="text"
          name="employment-status"
          onChange={null}
        />
        <ResumeInput
          label="عنوان شغلی"
          type="text"
          name="employment-title"
          onChange={null}
        />
      </div>
      <div className="grid grid-cols-2 gap-20 pt-8">
        <ResumeInput
          label="گروه شغلی"
          type="text"
          name="occupational-group"
          onChange={null}
        />
        <ResumeInput
          label="نام شرکت"
          type="text"
          name="company-name"
          onChange={null}
        />
      </div>
      <div className="grid grid-cols-2 gap-20 pt-8">
        <div className="grid grid-cols-2 gap-12">
          <ResumeInput
            label="تاریخ شروع"
            type="date"
            name="start-date-work"
            onChange={null}
          />
          <ResumeInput
            label="تاریخ پایان"
            type="date"
            name="end-date-work"
            onChange={null}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceContent;
