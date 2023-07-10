import { useRef, useState } from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { Slider } from 'antd';

import ResumeInput from '../ResumeInput';
import ResumeSkillCardList from '../ResumeSkillCardList';
import ButtonAddResume from '../../UI/ButtonAddResume';

import {
  resumeActions,
  sendSkills,
} from '../../../store/resume-slice';

const SkillsContent = () => {
  const [lvlSkill, setLvlSkill] = useState(1);
  const [error, setError] = useState(null);
  const { user_token } = useSelector(
    (state) => state.auth,
  );
  const dispatch = useDispatch();

  const { skill } = useSelector(
    (state) => state.resume,
  );

  const { skills } = skill;

  const skillRef = useRef(null);

  const resetFields = () => {
    setLvlSkill(1);
    skillRef.current.value = '';
    setError(null);
  };

  const skillAddHandler = () => {
    // simple validation for skill item
    const skill_name = skillRef.current.value;
    if (skill_name.trim().length < 4) {
      setError(
        'اسم مهارت باید حداقل بیشتر از ۳ حرف باشد!',
      );
      return;
    }

    const skill_lvl = lvlSkill;

    const skill_obj = {
      title: skill_name,
      // lvl: skill_lvl,
    };
    dispatch(
      sendSkills({ data: skill_obj, user_token }),
    );
    // dispatch(resumeActions.addSkill(skill_obj));
    resetFields();
  };

  const skillLvlChangeHandler = (lvl) => {
    setLvlSkill(lvl);
  };

  return (
    <div className="resume-step-content">
      <div className="grid grid-cols-2 gap-20 pt-8">
        <div className="flex flex-col">
          <ResumeInput
            label="مهارت"
            type="text"
            name="skill"
            onChange={null}
            placeholder="فن بیان"
            innerRef={skillRef}
          />
          <div className="flex flex-col my-8">
            <label htmlFor="lvl-skills">
              سطح تسلط
            </label>
            <Slider
              min={1}
              max={5}
              step={1}
              value={lvlSkill}
              onChange={skillLvlChangeHandler}
            />
            <span className="self-end">
              {lvlSkill * 20}%
            </span>
          </div>
          <ButtonAddResume
            onClick={skillAddHandler}
          />
          <span className="mt-4 text-sm text-red-500">
            {error ?? ''}
          </span>
        </div>
        {skills.length > 0 && (
          <ResumeSkillCardList skills={skills} />
        )}
      </div>
    </div>
  );
};

export default SkillsContent;
