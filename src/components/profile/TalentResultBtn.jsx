import Button from '../UI/Button';

const TalentResultBtn = ({ talent }) => {
  return (
    <div className="flex bg-gray-600 rounded-r-md">
      <Button
        type="button"
        className="flex justify-center items-center shadow-profile-talent-btn text-xs rounded-md bg-white"
      >
        <Link
          to={`/talent-survey/${talent.value}`}
        >
          {talent.name}
        </Link>
      </Button>
      <button className="px-4 text-xs text-gray-800">
        اعمال تغیرات
      </button>
    </div>
  );
};

export default TalentResultBtn;
