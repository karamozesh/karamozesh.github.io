import axios from 'axios';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import {
  API_CREATE_CV,
  API_GET_CVID,
} from '../../../../api/configAPI';
import { useSelector } from 'react-redux';

export default function ResumeCreating() {
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
    }
    if (slug === 'education') {
      // const
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
}

const resumeCretingLoader = () => {
  return null;
};

export { resumeCretingLoader };
