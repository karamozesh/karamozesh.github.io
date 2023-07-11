import {
    useDispatch,
    useSelector,
  } from 'react-redux';
  import { mbtiActions } from '../../store/mbti-slice';
  
  const MbtiQuestionCard = ({ questionObj }) => {
    const { ansArray } = useSelector(
      (state) => state.mbti
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
  
    const choiceClickHandler = (id, value) => {
      const ans = { id, value };
      dispatch(mbtiActions.addAns(ans));
    };
  
    return (
      <div>
        <h3>
          {id}. {question}
        </h3>
        <div className="grid grid-cols-2 mb-10 grid-rows-1 gap-5 mt-6 text-md text-xs">
          {choices.map((choice, index) => (


            <button
              className={`p-2 rounded-2xl border shadow-md ${
                selectedChoice &&
                selectedChoice.value ===
                  choice.value &&
                classNameActive
              }`}

              onClick={() =>
                choiceClickHandler(id, choice.value)
              }
             >
              {choice.text}
            </button>


          ))}
        </div>

        {!(id % 6 === 5 || id % 6 === 0) && (
          <div className="border-b border-b-black-700 w-3/4 h-2 "></div>
        )}


      </div>
    );
  };
  
  export default MbtiQuestionCard;
  