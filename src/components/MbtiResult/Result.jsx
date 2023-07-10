import React, {
  useEffect,
  useState,
} from 'react';
import check from '/src/images/check.png';
import resultImg from '/src/images/resultLogo.png';
import Cart from '../TalentSurvey/TalentUI/Cart';
import JobItems from '../TalentSurvey/TalentUI/JobItems';
import { useSelector } from 'react-redux';
import ENTJ from '../../pages/MbtiTypes/ENTJ';
import INTJ from '../../pages/MbtiTypes/INTJ';
import INTP from '../../pages/MbtiTypes/INTP';
import INFP from '../../pages/MbtiTypes/INFP';
import ENFJ from '../../pages/MbtiTypes/ENFJ';

function Result() {
  const { ansArray } = useSelector(
    (state) => state.mbti,
  );
  const [type, setType] = useState({
    name: '',
    value: '',
  });

  console.log(ansArray);

  const calculateResult = () => {
    const answer = [...ansArray];
    const result = answer.reduce(
      (previewValue, currentValue) => {
        const key = currentValue.value;
        previewValue[key] = previewValue[key] + 1;

        console.log(key, previewValue);
        return previewValue;
      },
      {
        I: 0,
        E: 0,
        S: 0,
        F: 0,
        J: 0,
        P: 0,
        S: 0,
        N: 0,
      },
    );
    console.log('myresult ', result);
    let personality = '';

    if (result.E > result.I) personality += 'E';
    else personality += 'I';

    if (result.S > result.N) personality += 'S';
    else personality += 'N';

    if (result.T > result.F) personality += 'T';
    else personality += 'F';

    if (result.J > result.P) personality += 'J';
    else personality += 'P';
    console.log(result.E, result.I);
    return personality;
  };

  const myResult = calculateResult();
  console.log('myresult ', myResult);

  if (myResult == 'INFP') {
    return <INTP />;
  }

  return <></>;
}
export default Result;
