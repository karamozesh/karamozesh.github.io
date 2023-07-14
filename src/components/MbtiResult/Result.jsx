import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ENTJ from '../../pages/MbtiTypes/ENTJ';
import INTJ from '../../pages/MbtiTypes/INTJ';
import INTP from '../../pages/MbtiTypes/INTP';
import INFP from '../../pages/MbtiTypes/INFP';
import ENFJ from '../../pages/MbtiTypes/ENFJ';
import INFJ from '../../pages/MbtiTypes/INFJ';
import ENFP from '../../pages/MbtiTypes/ENFP';
import ISTJ from '../../pages/MbtiTypes/ISTJ';
import ISFJ from '../../pages/MbtiTypes/ISFJ';
import ESTJ from '../../pages/MbtiTypes/ESTJ';
import ESFJ from '../../pages/MbtiTypes/ESFJ';
import ISTP from '../../pages/MbtiTypes/ISTP';
import ISFP from '../../pages/MbtiTypes/ISFP';
import ESTP from '../../pages/MbtiTypes/ESTP';
import ESFP from '../../pages/MbtiTypes/ESFP';

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
        T: 0,
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
    console.log(result.E, result.T);
    return personality;
  };

  const myResult = calculateResult();

  if (myResult == 'ENTJ') {
    return <ENTJ />;
  } else if (myResult == 'INTJ') {
    return <INTJ />;
  } else if (myResult == 'INTP') {
    return <INTP />;
  } else if (myResult == 'INFP') {
    return <INFP />;
  } else if (myResult == 'ENFJ') {
    return <ENFJ />;
  } else if (myResult == 'INFJ') {
    return <INFJ />;
  } else if (myResult == 'ENFP') {
    return <ENFP />;
  } else if (myResult == 'ISTJ') {
    return <ISTJ />;
  } else if (myResult == 'ISFJ') {
    return <ISFJ />;
  } else if (myResult == 'ESTJ') {
    return <ESTJ />;
  } else if (myResult == 'ESFJ') {
    return <ESFJ />;
  } else if (myResult == 'ISTP') {
    return <ISTP />;
  } else if (myResult == 'ISFP') {
    return <ISFP />;
  } else if (myResult == 'ESTP') {
    return <ESTP />;
  } else if (myResult == 'ESFP') {
    return <ESFP />;
  }

  return <></>;
}
export default Result;
