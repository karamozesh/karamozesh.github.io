import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { halandActions } from '../../store/haland-slice';

const QuestionCard = ({ questionObj }) => {
  const { ansArray } = useSelector(
    (state) => state.haland,
  );

  const dispatch = useDispatch();

  const question = questionObj.question;
  const choices = questionObj.choices;
  const id = questionObj.id;

  const selectedChoice = ansArray.find(
    (ans) => ans.id === id,
  );

  const classNameActive =
    'bg-primaryColor text-white';

  const choiceClickHandler = (id, point) => {
    const ans = { id, point };
    dispatch(halandActions.addAns(ans));
  };

  return (
    <div>
      <h3>
        {id}. {question}
      </h3>
      <div className="grid grid-cols-5 mb-10 grid-rows-1 gap-2 mt-5 text-md text-xs">
        {choices.map((choice, index) => (
          <button
            className={`px-2 rounded-xl border shadow-md ${
              selectedChoice &&
              selectedChoice.point ===
                choice.point &&
              classNameActive
            }`}
            onClick={() =>
              choiceClickHandler(id, choice.point)
            }
          >
            {choice.text}
          </button>
        ))}
      </div>
      {!(id % 6 === 5 || id % 6 === 0) && (
        <div className="border-b border-b-black-700 w-1/2 h-2 m-auto"></div>
      )}
    </div>
  );
};

export default QuestionCard;
