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
  const { ansArray, type } = useSelector(
    (state) => state.mbti,
  );

  if (type == 'ENTJ') {
    return <ENTJ />;
  } else if (type == 'INTJ') {
    return <INTJ />;
  } else if (type == 'INTP') {
    return <INTP />;
  } else if (type == 'INFP') {
    return <INFP />;
  } else if (type == 'ENFJ') {
    return <ENFJ />;
  } else if (type == 'INFJ') {
    return <INFJ />;
  } else if (type == 'ENFP') {
    return <ENFP />;
  } else if (type == 'ISTJ') {
    return <ISTJ />;
  } else if (type == 'ISFJ') {
    return <ISFJ />;
  } else if (type == 'ESTJ') {
    return <ESTJ />;
  } else if (type == 'ESFJ') {
    return <ESFJ />;
  } else if (type == 'ISTP') {
    return <ISTP />;
  } else if (type == 'ISFP') {
    return <ISFP />;
  } else if (type == 'ESTP') {
    return <ESTP />;
  } else if (type == 'ESFP') {
    return <ESFP />;
  } else
    throw new Error('Invalid Type Personality');
}
export default Result;
