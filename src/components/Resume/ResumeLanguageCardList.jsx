import ResumeLanguageCard from './ResumeLanguageCard';

const ResumeSkillCardList = ({
  languages,
  className,
}) => {
  return (
    <div
      className={`max-h-[70%] mt-8 overflow-scroll ${className}`}
    >
      {languages.map((languages) => (
        <ResumeLanguageCard
          key={languages.id}
          id={languages.id}
          name={languages.name}
          className="mb-2"
        />
      ))}
    </div>
  );
};

export default ResumeSkillCardList;
