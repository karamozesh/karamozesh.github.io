import penEditIcon from '../../asset/icon/pen-edit_icon.svg';
import trashIcon from '../../asset/icon/trash_icon.svg';

const ResumeSkillCard = ({
  id,
  nameSkill,
  lvlSkill,
  className,
}) => {
  return (
    <div
      className={`flex justify-between items-center h-[50px] bg-gray-700 border-r-secondaryColor rounded-xl shadow-md overflow-hidden ${className}`}
    >
      <div className="flex items-center">
        <div className="flex items-center w-[40px] h-full px-4 py-2 ml-4 bg-secondaryColor text-base">
          {id}
        </div>
        <div>{nameSkill}</div>
      </div>
      <div className="flex ml-4">
        <img
          src={trashIcon}
          alt=""
          className="w-4 ml-2 cursor-pointer"
        />
        <img
          src={penEditIcon}
          alt=""
          className="w-4 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ResumeSkillCard;
