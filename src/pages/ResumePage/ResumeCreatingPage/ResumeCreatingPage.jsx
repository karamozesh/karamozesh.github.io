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

export default function ResumeCreatingPage() {
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
  );
}

/* 

  const { pathname } = useLocation();

  const { user_token } = useSelector(
    (state) => state.auth,
  );

  const resumeStates = useSelector(
    (state) => state.resume,
  );

  const navigate = useNavigate();

  const slug = pathname.split('/')[3];

  let backLink = 'base-information';

  if (slug === 'work-experience')
    backLink = 'education';
  else if (slug === 'skills')
    backLink = 'work-experience';
  else if (slug === 'further-information')
    backLink = 'skills';

  const saveClickHandler = () => {
    if (slug === 'base-information') {
      const { baseInformation } = resumeStates;
      console.log(baseInformation);
      let gender = '';
      if (baseInformation.generic.value === 'men')
        gender = 'M';
      else gender = 'F';

      let martial_status = '';

      if (
        baseInformation.vaziatTaahol.value ===
        'single'
      )
        martial_status = '2';
      else martial_status = '1';

      let duty_system = '';

      if (
        baseInformation.nezamVazife.value ===
        'included'
      )
        duty_system = '3';
      else if (
        baseInformation.nezamVazife.value ===
        'exempt'
      )
        duty_system = '2';
      else if (
        baseInformation.nezamVazife.value ===
        'exempt-education'
      )
        duty_system = '1';
      else duty_system = '4';

      const objResume = {
        firstname: baseInformation.firstName,
        lastname: baseInformation.lastName,
        about_me: 'nakhondam',
        phone_number:
          +baseInformation.phonenumber,
        gender,
        character: '1',
        duty_system,
        martial_status,
        data_of_birth:
          baseInformation.birthdayDate,
        city: baseInformation.city.value,
        address: baseInformation.address,
        suggested_salary: 15000,
        user_id: 4,
      };
      axios
        .post(API_CREATE_CV, objResume, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${user_token}`,
          },
        })
        .then((res) => console.log(res));
      // axios
      //   .post(
      //     API_GET_CVID,
      //     {},
      //     {
      //       headers: {
      //         'Content-Type': 'application/json',
      //         Authorization: user_token,
      //       },
      //     },
      //   )
      //   .then((res) => console.log(res));
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
      <Outlet />
      <div className="flex self-end">
        {slug !== 'base-information' && (
          <button className="max-w-[200px] ml-4 mt-6 rounded-xl shadow-xl bg-secondaryColor">
            <Link
              to={backLink}
              className="w-full h-full px-8 py-2"
            >
              بازگشت
            </Link>
          </button>
        )}

        <button
          className="max-w-[200px] px-8 py-2 mt-6 rounded-xl shadow-xl bg-secondaryColor"
          onClick={saveClickHandler}
        >
          ذخیره و ادامه
        </button>
      </div>
    </div>
  );
*/
