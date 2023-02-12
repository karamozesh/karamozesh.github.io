import { Outlet } from 'react-router-dom';

export default function TalentSurvey() {
  return (
    <>
      <Outlet />
    </>
  );
}

const talentSurveyLoader = () => {
  return null;
};

export { talentSurveyLoader };
