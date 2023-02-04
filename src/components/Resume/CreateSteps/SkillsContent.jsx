import { useRef, useState } from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { Slider } from 'antd';

import ResumeInput from '../ResumeInput';
import ResumeSkillCardList from '../ResumeSkillCardList';
import ButtonAddResume from '../../UI/ButtonAddResume';

import { resumeActions } from '../../../store/resume-slice';

const SkillsContent = () => {
  const [lvlSkill, setLvlSkill] = useState(0);
  const dispatch = useDispatch();

  const { skill } = useSelector(
    (state) => state.resume,
  );

  const { skills } = skill;

  const skillRef = useRef(null);

  const skillChangeHandler = (e) => {};

  const skillAddHandler = () => {
    // simple validation for skill item
    const skill_name = skillRef.current.value;
    console.log(skill_name);
    if (skill_name.trim().length < 4) return;

    const skill_lvl = lvlSkill;
    let skill_id = 0;
    if (skills.length > 0) {
      skill_id = skills[skills.length - 1].id + 1;
    }
    const skill_obj = {
      id: skill_id,
      name: skill_name,
      lvl: skill_lvl,
    };
    dispatch(resumeActions.addSkill(skill_obj));
    skillRef.current.value = '';
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
              onChange={skillLvlChangeHandler}
            />
            <span className="self-end">
              {lvlSkill * 20}%
            </span>
          </div>
          <ButtonAddResume
            onClick={skillAddHandler}
          />
        </div>
        {skills.length > 0 && (
          <ResumeSkillCardList skills={skills} />
        )}
      </div>
    </div>
  );
};

export default SkillsContent;
