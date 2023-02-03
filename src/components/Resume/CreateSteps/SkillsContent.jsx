import ButtonAddResume from '../../UI/ButtonAddResume';
import ResumeInput from '../ResumeInput';
import { Slider } from 'antd';
import ResumeSkillCard from '../ResumeSkillCard';

const SkillsContent = () => {
  return (
    <div className="resume-step-content">
      <div className="grid grid-cols-2 gap-20 pt-8">
        <div className="flex flex-col">
          <ResumeInput
            label="وضعیت شغلی"
            type="text"
            name="employment-status"
            onChange={null}
            placeholder="مثال(فن بیان)"
          />
          <div className="flex flex-col my-8">
            <label htmlFor="lvl-skills">
              سطح تسلط
            </label>
            <Slider min={1} max={5} step={1} />
            <span className="self-end">25%</span>
          </div>
          <ButtonAddResume onClick={null} />
        </div>
        <div>
          <ResumeSkillCard
            id={1}
            nameSkill="برنامه نویسی"
            lvlSkill="1"
            className="mb-4"
          />
          <ResumeSkillCard
            id={1}
            nameSkill="پنچرگیری تانک"
            lvlSkill="5"
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsContent;
