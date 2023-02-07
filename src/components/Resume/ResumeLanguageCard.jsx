import penEditIcon from '../../asset/icon/pen-edit_icon.svg';
import trashIcon from '../../asset/icon/trash_icon.svg';

const ResumeLanguageCard = ({
  id,
  name,
  className,
}) => {
  return (
    <div
      className={`flex justify-between items-center h-[50px] bg-gray-700 border-r-secondaryColor rounded-xl shadow-md overflow-hidden ${className}`}
    >
      <div className="flex items-center">
        <div className="flex justify-center items-center min-w-[60px] h-full py-2 px-4 ml-4 bg-secondaryColor text-base">
          {id}
        </div>
        <p className="max-w-[100px] truncate">
          {name}
        </p>
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

export default ResumeLanguageCard;
