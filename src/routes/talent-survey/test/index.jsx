import React from 'react';
import QuestionSurvey from '../../../components/TalentSurvey/QuestionSurvey';
import TestCard from '../../../components/TalentSurvey/TestCard';
export default function TalentSurveyTest() {
  return (
    <>
      <div>
        <QuestionSurvey />
        <TestCard />
      </div>
    </>
  );
}

const talentSurveyTestLoader = () => {
  return null;
};

export { talentSurveyTestLoader };
