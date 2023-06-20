import { useEffect } from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';

import BaseInformationContent from '../../../components/Resume/CreateSteps/BaseInformationContent';
import EducationContent from '../../../components/Resume/CreateSteps/EducationContent';
import WorkExperienceContent from '../../../components/Resume/CreateSteps/WorkExperieneContent';
import SkillsContent from '../../../components/Resume/CreateSteps/SkillsContent';
import FurtherInformationContent from '../../../components/Resume/CreateSteps/FurtherInformationContent';
import { saveInformationResume } from '../../../store/resumeActions';

export default function ResumeCreatingPage() {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const slug = pathname.split('/')[2];
  const dispatch = useDispatch();

  const resumeStates = useSelector(
    (state) => state.resume,
  );

  const stepObjs = [
    {
      path: 'base-information',
      name: 'اطلاعات پایه',
    },
    { path: 'education', name: 'تحصیلات' },
    {
      path: 'work-experience',
      name: 'سوابق شغلی',
    },
    { path: 'skills', name: 'مهارت ها' },
    {
      path: 'further-information',
      name: 'اطلاعات تکمیلی',
    },
  ];

  const { stepPath } = params;
  const baseURL = '/resume-creating-app/';

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
  }

  const saveClickHandler = () => {
    if (slug === 'base-information') {
      const { baseInformation } = resumeStates;
      dispatch(saveInformationResume());

      navigate('education');
    } else if (slug === 'education') {
      navigate('work-experience');
    } else if (slug === 'work-experience') {
      navigate('skills');
    } else if (slug === 'skills') {
      navigate('further-information');
    } else {
      navigate('/profile');
    }
  };

  return (
    <div className="flex flex-col main resume">
      <h1 className="mb-4">رزومه جدید</h1>
      <div className="flex flex-col justify-between min-h-[40vh] w-full">
        {/* steps */}
        <div className="flex justify-between items-end sections">
          {stepObjs.map((stepObj) => (
            <Link
              to={baseURL + stepObj.path}
              kye={stepObj.path}
              className={`flex items-center justify-center w-[calc(100%/5-2px)] h-[50px] py-4 px-2 text-center bg-gray-600 rounded-t-2xl shadow-lg`}
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
      <div className="flex self-end">
        <button className="max-w-[200px] ml-4 mt-6 rounded-xl shadow-xl bg-secondaryColor">
          <Link
            to={'backLink'}
            // to={backLink}
            className="w-full h-full px-8 py-2"
          >
            بازگشت
          </Link>
        </button>

        <button
          className="max-w-[200px] px-8 py-2 mt-6 rounded-xl shadow-xl bg-secondaryColor"
          // onClick={saveClickHandler}
        >
          ذخیره و ادامه
        </button>
      </div>
    </div>
  );
}
