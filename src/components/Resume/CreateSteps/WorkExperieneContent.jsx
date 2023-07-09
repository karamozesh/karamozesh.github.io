import { useRef, useEffect } from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import ResumeInput from '../ResumeInput';
import { resumeActions } from '../../../store/resume-slice';

const WorkExperienceContent = () => {
  const dispatch = useDispatch();

  // initialize
  const { workExperience } = useSelector(
    (state) => state.resume,
  );

  const {
    employmentStatus,
    employmentTitle,
    occupationalGroup,
    companyName,
    startDate,
    endDate,
  } = workExperience;

  const employmentStatusRef = useRef(null);
  const employmentTitleRef = useRef(null);
  const occupationalGroupRef = useRef(null);
  const companyNameRef = useRef(null);
  // const startDateRef = useRef(null);
  // const endDateRef = useRef(null);

  useEffect(() => {
    employmentStatusRef.current.value =
      employmentStatus;
    employmentTitleRef.current.value =
      employmentTitle;
    // startDateRef.current.value = startDate;
    // endDateRef.current.value = endDate;
    occupationalGroupRef.current.value =
      occupationalGroup;
    companyNameRef.current.value = companyName;
  }, []);

  const employmentStatusChangeHandler = (e) => {
    const employmentStatus_value = e.target.value;

    dispatch(
      resumeActions.changeWorkExperience({
        prop: 'employmentStatus',
        value: employmentStatus_value,
      }),
    );
  };

  const employmentTitleChangeHandler = (e) => {
    const employmentTitle_value = e.target.value;

    dispatch(
      resumeActions.changeWorkExperience({
        prop: 'employmentTitle',
        value: employmentTitle_value,
      }),
    );
  };

  const occupationalGroupChangeHandler = (e) => {
    const occupationalGroup_value =
      e.target.value;

    dispatch(
      resumeActions.changeWorkExperience({
        prop: 'occupationalGroup',
        value: occupationalGroup_value,
      }),
    );
  };

  const companyNameChangeHandler = (e) => {
    const companyName_value = e.target.value;

    dispatch(
      resumeActions.changeWorkExperience({
        prop: 'companyName',
        value: companyName_value,
      }),
    );
  };

  const startDateChangeHandler = (
    date,
    dateString,
  ) => {
    dispatch(
      resumeActions.changeWorkExperience({
        prop: 'startDate',
        value: dateString,
      }),
    );
  };

  const endDateChangeHandler = (
    date,
    dateString,
  ) => {
    dispatch(
      resumeActions.changeWorkExperience({
        prop: 'endDate',
        value: dateString,
      }),
    );
  };

  return (
    <div className="resume-step-content">
      <div className="grid grid-cols-2 gap-20 pt-8">
        <ResumeInput
          label="وضعیت شغلی"
          type="text"
          name="employment-status"
          onChange={employmentStatusChangeHandler}
          placeholder="به دنبال کار خوب"
          innerRef={employmentStatusRef}
        />
        <ResumeInput
          label="عنوان شغلی"
          type="text"
          name="employment-title"
          onChange={employmentTitleChangeHandler}
          placeholder="جونیور"
          innerRef={employmentTitleRef}
        />
      </div>
      <div className="grid grid-cols-2 gap-20 pt-8">
        <ResumeInput
          label="گروه شغلی"
          type="text"
          name="occupational-group"
          onChange={
            occupationalGroupChangeHandler
          }
          placeholder="AB+"
          innerRef={occupationalGroupRef}
        />
        <ResumeInput
          label="نام شرکت"
          type="text"
          name="company-name"
          onChange={companyNameChangeHandler}
          placeholder="اسنپ"
          innerRef={companyNameRef}
        />
      </div>
      <div className="grid grid-cols-2 gap-20 pt-8">
        <div className="grid grid-cols-2 gap-12">
          <ResumeInput
            label="تاریخ شروع"
            type="date"
            name="start-date-work"
            onChange={startDateChangeHandler}
            // innerRef={startDateRef}
          />
          <ResumeInput
            label="تاریخ پایان"
            type="date"
            name="end-date-work"
            onChange={endDateChangeHandler}
            // innerRef={endDateRef}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceContent;
