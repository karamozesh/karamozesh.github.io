import { useRef } from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import ResumePeyvast from '../../ResumePeyvast';

const ALittleAboutMe = ({ heightOfChildren }) => {
  const dispatch = useDispatch();

  const aLittleAboutMeRef = useRef(null);

  const addALittleAboutMeHandler = () => {
    const aLittileAboutMe_value =
      aLittleAboutMeRef.current.value;

    // simple validation
    if (aLittileAboutMe_value.trim().length < 5)
      return;

    dispatch(
      resumeActions.changeFutherInformation({
        prop: 'aLittleAboutMe',
        value: aLittileAboutMe_value,
      }),
    );

    aLittleAboutMeRef.current.value = '';
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
        innerRef={aLittleAboutMeRef}
        onClick={addALittleAboutMeHandler}
      />
    </div>
  );
};

export default ALittleAboutMe;
