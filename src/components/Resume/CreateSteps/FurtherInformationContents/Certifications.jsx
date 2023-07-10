import { useRef, useState } from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import ResumeInput from '../../ResumeInput';
import ResumePeyvast from '../../ResumePeyvast';
import { resumeActions } from '../../../../store/resume-slice';

const Certifications = ({ heightOfChildren }) => {
  const [certificationInfo, setCertifactionInfo] =
    useState({
      title: '',
      marja: '',
      dateSodor: '',
      dateEngheza: '',
      zamime: '',
    });
  const dispatch = useDispatch();
  // const { furtherInformation } = useSelector(
  //   (state) => state.resuem,
  // );
  // const { certificatesAndCourses } =
  //   furtherInformation;

  // const titleMadrakRef = useRef(null);
  // const issuingInstitutionRef = useRef(null);

  const titleMadrakChangeHandler = (e) => {
    const titleMadrak_value = e.target.value;
    setCertifactionInfo((prev) => ({
      ...prev,
      title: titleMadrak_value,
    }));
  };

  const issuingInstitutionChangeHandler = (e) => {
    const value = e.target.value;
    setCertifactionInfo((prev) => ({
      ...prev,
      marja: value,
    }));
  };

  const dateSodorChangeHandler = (
    date,
    dateString,
  ) => {
    const value = dateString;
    setCertifactionInfo((prev) => ({
      ...prev,
      dateSodor: value,
    }));
  };

  const dateEnghezaChangeHandler = (
    date,
    dateString,
  ) => {
    const value = dateString;
    setCertifactionInfo((prev) => ({
      ...prev,
      dateEngheza: value,
    }));
  };

  const zamimeChangeHandler = (value) => {
    setCertifactionInfo((prev) => ({
      ...prev,
      zamime: value,
    }));
  };

  return (
    <div
      className={`grid grid-cols-2 gap-20 ${heightOfChildren}`}
    >
      <div className="flex flex-col">
        <ResumeInput
          label="عنوان مدرک"
          type="text"
          onChange={titleMadrakChangeHandler}
          name="title-madrak"
          className="mb-8"
        />
        <ResumeInput
          label="موسسه صادرکننده"
          type="text"
          onChange={
            issuingInstitutionChangeHandler
          }
          name="issuing-institution"
          className="mb-8"
        />
        <div className="grid grid-cols-2 gap-12">
          <ResumeInput
            label="تاریخ صدور"
            name="date-sodor"
            onChange={dateSodorChangeHandler}
            type="date"
          />
          <ResumeInput
            label="تاریخ انقضا"
            name="date-engheza"
            onChange={dateEnghezaChangeHandler}
            type="date"
          />
        </div>
      </div>
      <ResumePeyvast
        onClick={zamimeChangeHandler}
      />
    </div>
  );
};

export default Certifications;
