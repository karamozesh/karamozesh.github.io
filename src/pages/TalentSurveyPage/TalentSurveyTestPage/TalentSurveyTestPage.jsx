import { useEffect, useState } from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { questions_holland } from '../../../Data/HalandData';
import QuestionCard from '../../../components/TalentSurvey/QuestionCard';
import {
  Link,
  useNavigate,
} from 'react-router-dom';
import {
  halandActions,
  sendTestResult,
} from '../../../store/haland-slice';

export default function TalentSurveyTestPage() {
  const { user_token, isLoggedIn } = useSelector(
    (state) => state.auth,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(halandActions.setAns([]));
  }, []);

  const { totalQuestions, ansArray } =
    useSelector((state) => state.haland);
  const [currentPage, setCurrentPage] =
    useState(1);

  const numQuestions = 6;
  const startIndex =
    (currentPage - 1) * numQuestions;

  const endIndex = currentPage * numQuestions;

  const currentQuestions =
    questions_holland.slice(startIndex, endIndex);

  const backHandler = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const prevHandler = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const isLastPage =
    currentPage ===
    Math.floor(totalQuestions / 6);

  const navigate = useNavigate();

  const callbackHandler = () => {
    navigate('/talent-survey/result/haland');
    window.scrollTo(0, 0);
  };

  const seeTheResultHandler = () => {
    if (+ansArray.length !== totalQuestions)
      return;
    dispatch(
      sendTestResult({
        user_token,
        name: 'haland',
        result: 'https://haland.ir',
        cb: callbackHandler,
      }),
    );
  };

  return (
    <section className="container mx-auto p-7 mt-7">
      <section className="flex flex-col items-center justify-center gap-5">
        <section className="border shadow-lg shadow-blue-500/50 grid  grid-rows-3 grid-cols-2 gap-10 justify-items-center p-10 content-center rounded-3xl">
          {currentQuestions.length > 0 &&
            currentQuestions.map(
              (questionObj, index) => {
                const id =
                  (currentPage - 1) * 6 +
                  index +
                  1;
                return (
                  <QuestionCard
                    key={id}
                    questionObj={{
                      ...questionObj,
                      id,
                    }}
                  />
                );
              },
            )}
        </section>
        <section className="flex self-end gap-5">
          {currentPage > 1 && (
            <button
              onClick={backHandler}
              className="bg-[#F5AF2B] rounded-xl p-2 px-3 text-base"
            >
              قبل
            </button>
          )}

          {!isLastPage && (
            <button
              onClick={prevHandler}
              className="bg-[#F5AF2B] rounded-xl p-2 px-3 text-base"
            >
              سوالات بعدی
            </button>
          )}
          {isLastPage && (
            <button
              className="text-white bg-primaryColor rounded-3xl text-base py-3 px-6"
              onClick={seeTheResultHandler}
            >
              دیدن نتیجه تست
            </button>
          )}
        </section>
      </section>
    </section>
  );
}
