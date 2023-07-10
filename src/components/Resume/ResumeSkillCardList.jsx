import ResumeSkillCard from './ResumeSkillCard';

const ResumeSkillCardList = ({ skills }) => {
  return (
    <div className="max-h-[400px] scroll mt-8 overflow-scroll">
      {skills.map((skill) => (
        <ResumeSkillCard
          key={skill.id}
          id={skill.id}
          name={skill.name}
          lvl={skill.lvl}
          className="mb-2"
        />
      ))}
    </div>
  );
};

export default ResumeSkillCardList;
