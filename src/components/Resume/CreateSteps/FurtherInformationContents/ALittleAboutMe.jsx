import { useDispatch } from 'react-redux';
import ResumePeyvast from '../../ResumePeyvast';
import { resumeActions } from '../../../../store/resume-slice';

const ALittleAboutMe = ({ heightOfChildren }) => {
  const dispatch = useDispatch();

  const addALittleAboutMeHandler = (value) => {
    dispatch(
      resumeActions.changeFutherInformation({
        prop: 'aLittleAboutMe',
        value,
      }),
    );
  };

  return (
    <div
      className={`flex flex-col w-full h-[350px] p-2 ${heightOfChildren}`}
    >
      <p className="mb-4">
        در این قسمت می‌توانید هر آنچه در قسمت های
        قبل در مورد شما گفته نشده است را بگویید
      </p>
      <ResumePeyvast
        onClick={addALittleAboutMeHandler}
      />
    </div>
  );
};

export default ALittleAboutMe;
