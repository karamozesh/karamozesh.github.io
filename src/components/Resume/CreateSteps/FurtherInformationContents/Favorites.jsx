const Favorites = ({ heightOfChildren }) => {
  return (
    <div className="grid grid-cols-2 gap-20">
      <div>
        <ResumeInput
          label="علاقه مندی"
          name="favorites"
          type="text"
          onChange={null}
          placeholder="مثلا عکاسی"
          className="mb-8"
        />
        <ButtonAddResume onClick={null} />
      </div>
      <div>
        <ResumeSkillCard
          id={1}
          nameSkill="عکاسی"
        />
      </div>
    </div>
  );
};

export default Favorites;
