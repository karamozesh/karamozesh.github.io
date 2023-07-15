import {
  Link,
  useNavigate,
} from 'react-router-dom';
import Button from '../UI/Button';

const TalentResultBtn = ({ talent }) => {
  const navigate = useNavigate();

  const customNavigator = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex bg-primaryColor rounded-xl">
      <button
        type="button"
        className="flex justify-center px-2 items-center shadow-profile-talent-btn text-xs bg-white rounded-xl"
        onClick={() =>
          customNavigator(
            `/talent-survey/${talent.value}`,
          )
        }
      >
        {talent.label}
      </button>
      <button
        className="px-4 text-xs bg-primaryColor text-white rounded-xl overflow-hidden"
        onClick={() =>
          customNavigator(
            `/talent-survey/${talent.name}`,
          )
        }
      >
        اعمال تغیرات
      </button>
    </div>
  );
};

export default TalentResultBtn;
