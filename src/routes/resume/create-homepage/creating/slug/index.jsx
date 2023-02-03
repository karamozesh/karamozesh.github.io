import { useEffect } from 'react';
import {
  Link,
  useNavigate,
  useParams,
} from 'react-router-dom';

import BaseInformationContent from '../../../../../components/Resume/CreateSteps/BaseInformationContent';
import EducationContent from '../../../../../components/Resume/CreateSteps/EducationContent';
import WorkExperienceContent from '../../../../../components/Resume/CreateSteps/WorkExperieneContent';
import SkillsContent from '../../../../../components/Resume/CreateSteps/SkillsContent';
import FurtherInformationContent from '../../../../../components/Resume/CreateSteps/FurtherInformationContent';

const stepObjs = [
  {
    path: 'base-information',
    name: 'اطلاعات پایه',
  },
  { path: 'education', name: 'تحصیللات' },
  { path: 'work-experience', name: 'سابقه شغلی' },
  { path: 'skills', name: 'مهارت ها' },
  {
    path: 'further-information',
    name: 'اطلاعات تکمیلی',
  },
  { path: 'recommendation', name: 'توصیه نامه' },
  { path: 'tests', name: 'تست ها' },
];

const baseURL = '/resume/creating/';

export default function ResumeStep() {
  const params = useParams();
  const navigator = useNavigate();

  const { stepPath } = params;

  const stepFind = stepObjs.find(
    (stepObj) => stepPath === stepObj.path,
  );

  useEffect(() => {
    if (!stepFind) {
      navigator('/');
    }
  }, []);

  let content = <BaseInformationContent />;

  switch (stepPath) {
    case 'education':
      content = <EducationContent />;
      break;

    case 'work-experience':
      content = <WorkExperienceContent />;
      break;
    case 'skills':
      content = <SkillsContent />;
      break;
    case 'further-information':
      content = <FurtherInformationContent />;
      break;
    case 'recommendation':
      content = (
        <div className="resume-step-content items-center justify-center">
          این بخش هنوز طراحی نشده است
        </div>
      );
      break;
    case 'tests':
      content = (
        <div className="resume-step-content items-center justify-center">
          این بخش هنوز طراحی نشده است
        </div>
      );
      break;
  }

  return (
    <div className="flex flex-col justify-between min-h-[40vh] w-full">
      {/* steps */}
      <div className="flex justify-between items-end sections">
        {stepObjs.map((stepObj) => (
          <Link
            to={baseURL + stepObj.path}
            kye={stepObj.path}
            className={`flex items-center justify-center w-[calc(100%/7-1px)] h-[50px] py-4 px-2 text-center bg-gray-600 rounded-t-2xl shadow-lg`}
            style={
              stepObj.path === stepFind.path
                ? {
                    backgroundColor: '#F5AF2B',
                    height: '75px',
                  }
                : null
            }
          >
            {stepObj.name}
          </Link>
        ))}
      </div>
      {/* content */}
      {content}
    </div>
  );
}

const resumeStepLoader = () => {
  return null;
};

export { resumeStepLoader };
