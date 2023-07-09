import axios from 'axios';
import penEditIcon from '../../asset/icon/pen-edit_icon.svg';
import trashIcon from '../../asset/icon/trash_icon.svg';
import { API_DELETE_SKILL_CV } from '../../api/configAPI';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { notificationActions } from '../../store/notification-slice';
import { resumeActions } from '../../store/resume-slice';

const ResumeSkillCard = ({
  id,
  name,
  lvl,
  className,
}) => {
  const { user_token } = useSelector(
    (state) => state.auth,
  );
  const dispatch = useDispatch();

  const deleteHandler = async () => {
    try {
      await axios.delete(
        API_DELETE_SKILL_CV(1, id),
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${user_token}`,
          },
        },
      );
      dispatch(
        notificationActions.changeSuccess({
          message:
            'مهارتو پاکش کردیم خیالت راحت.',
          exist: true,
        }),
      );
      dispatch(resumeActions.deleteSkill(id));
    } catch (error) {
      dispatch(
        notificationActions.changeError({
          exist: true,
          message:
            'پاک کردن مهارت به مشکل خورد دوست عزیز.',
        }),
      );
    }
  };

  return (
    <div
      className={`flex justify-between items-center h-[50px] bg-gray-700 border-r-secondaryColor rounded-xl shadow-md overflow-hidden ${className}`}
    >
      <div className="flex items-center">
        <div className="flex justify-center items-center min-w-[60px] h-full py-2 px-4 ml-4 bg-secondaryColor text-base">
          {id}
        </div>
        <div>{name}</div>
      </div>
      <div className="flex ml-4">
        <img
          src={trashIcon}
          alt=""
          className="w-4 ml-2 cursor-pointer"
          onClick={deleteHandler}
        />
        {/* <img
          src={penEditIcon}
          alt=""
          className="w-4 cursor-pointer"
        /> */}
      </div>
    </div>
  );
};

export default ResumeSkillCard;
