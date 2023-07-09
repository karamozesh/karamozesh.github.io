import { useRef, useState } from 'react';
import {
  useSelector,
  useDispatch,
} from 'react-redux';

import { Slider } from 'antd';

import ButtonAddResume from '../../../UI/ButtonAddResume';
import ResumeInput from '../../ResumeInput';
import ResumeSkillCard from '../../ResumeSkillCard';
import { resumeActions } from '../../../../store/resume-slice';
import ResumeSkillCardList from '../../ResumeLanguageCardList';

const Languages = ({ heightOfChildren }) => {
  const [lvl, setLvl] = useState(1);
  const [error, setError] = useState(null);

  const lvlChangeHandler = (lvl) => {
    setLvl(lvl);
  };

  const dispatch = useDispatch();

  const { furtherInformation } = useSelector(
    (state) => state.resume,
  );

  const languages = furtherInformation.languages;

  const languageRef = useRef(null);

  const resetFields = () => {
    languageRef.current.value = '';
    setLvl(1);
    setError(null);
  };

  const addLanguageHandler = () => {
    const language_name =
      languageRef.current.value;
    if (language_name.trim().length < 4) {
      setError(
        'اسم زبان باید حداقل بیشتر از ۳ حرف باشد!',
      );
      return;
    }
    let lastLanguage_id = 1;

    if (languages.length > 0) {
      lastLanguage_id =
        languages[languages.length - 1].id + 1;
    }

    const language_obj = {
      id: lastLanguage_id,
      name: language_name,
    };

    dispatch(
      resumeActions.addLanguageInFurtherInformation(
        language_obj,
      ),
    );

    resetFields();
  };

  return (
    <div
      className={`grid grid-cols-3 gap-12 ${heightOfChildren}`}
    >
      <div className="col-span-2">
        <ResumeInput
          label="زبان"
          type="text"
          placeholder="فرانسوی"
          innerRef={languageRef}
        />
        <div className="flex flex-col my-8">
          <Slider
            min={1}
            max={5}
            step={1}
            value={lvl}
            onChange={lvlChangeHandler}
          />
          <span className="self-end">
            {lvl * 20}%
          </span>
        </div>
        <ButtonAddResume
          onClick={() => addLanguageHandler()}
        />
        <span className="inline-block mt-4 text-sm text-red-500">
          {error ?? ''}
        </span>
      </div>
      <ResumeSkillCardList
        languages={languages}
        className="col-span-1"
      />
    </div>
  );
};

export default Languages;
