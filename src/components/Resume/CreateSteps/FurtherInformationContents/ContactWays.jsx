import { useRef, useState } from 'react';
import ButtonAddResume from '../../../UI/ButtonAddResume';
import ResumeInput from '../../ResumeInput';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { resumeActions } from '../../../../store/resume-slice';
import ResumeLanguageCardList from '../../ResumeLanguageCardList';

const ContactWays = ({ heightOfChildren }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState({
    name: null,
    link: null,
  });
  const { furtherInformation } = useSelector(
    (state) => state.resume,
  );

  const { contact } = furtherInformation;
  const [contactWay, setContactWay] = useState({
    name: '',
    link: '',
  });

  const nameContactWayRef = useRef(null);
  const linkContactWayRef = useRef(null);

  const nameContactWayChangeHandler = (e) => {
    const value = e.target.value;
    setContactWay((prev) => ({
      ...prev,
      name: value,
    }));
  };

  const linkContactWayChangeHandler = (e) => {
    const value = e.target.value;

    setContactWay((prev) => ({
      ...prev,
      link: value,
    }));
  };

  const resetFields = () => {
    nameContactWayRef.current.value = '';
    linkContactWayRef.current.value = '';
    setError(null);
  };

  const addContactWayHandler = () => {
    // simple validation
    if (
      contactWay.name.trim().length < 5 &&
      contactWay.link.trim().length < 5
    ) {
      setError({
        name: 'راه ارتباطی و لینک ارتباطی باید حداقل بیشتر از 4 حرف باشد!',
        link: null,
      });
      return;
    }

    if (contactWay.name.trim().length < 5) {
      setError({
        name: 'راه ارتباطی باید حداقل بیشتر از 4 حرف باشد!',
        link: null,
      });
      return;
    }

    if (contactWay.link.trim().length < 5) {
      setError({
        link: 'لینک ارتباطی باید حداقل بیشتر از 4 حرف باشد!',
        name: null,
      });
      return;
    }

    let contactWay_id = 1;

    if (contact.length > 0) {
      contactWay_id =
        contact[contact.length - 1].id + 1;
    }

    const contact_obj = {
      ...contactWay,
      id: contactWay_id,
    };

    dispatch(
      resumeActions.addContactInFurtherInformation(
        contact_obj,
      ),
    );
    resetFields();
  };

  return (
    <div className={`grid grid-cols-2 gap-20`}>
      <div>
        <ResumeInput
          label="راه های ارتباطی من"
          type="text"
          name="contact-name"
          onChange={nameContactWayChangeHandler}
          className="mb-8"
          innerRef={nameContactWayRef}
        />
        <ResumeInput
          label="لینک مورد نظر "
          type="text"
          name="contant-link"
          onChange={linkContactWayChangeHandler}
          className="mb-8"
          innerRef={linkContactWayRef}
        />
        <ButtonAddResume
          onClick={addContactWayHandler}
        />
        {error && (
          <>
            <span className="inline-block mt-4 text-sm text-red-500">
              {error.name ?? ''}
            </span>
            <span className="inline-block mt-4 text-sm text-red-500">
              {error.link ?? ''}
            </span>
          </>
        )}
      </div>
      <ResumeLanguageCardList
        languages={contact}
      />
    </div>
  );
};

export default ContactWays;
