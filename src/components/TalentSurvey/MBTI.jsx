import React, { useEffect } from 'react';
import { questions_mbti } from '../../Data/MbtiData';
import { useState } from 'react';
import MbtiQuestionCard from './MbtiQuestionCard';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { Link } from 'react-router-dom';
import { mbtiActions } from '../../store/mbti-slice';

function MBTI() {
  const { user_token, isLoggedIn } = useSelector(
    (state) => state.auth,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      const talentObj = JSON.parse(
        localStorage.getItem('talent-survey'),
      );
      if (talentObj)
        dispatch(mbtiActions.setAns(talentObj));
    }
  }, []);

  const { totalQuestions, ansArray } =
    useSelector((state) => state.mbti);
  console.log();

  const [currentPage, setCurrentPage] =
    useState(1);
  const numQuestions = 6;
  const startIndex =
    (currentPage - 1) * numQuestions;

  const endIndex = currentPage * numQuestions;

  const currentQuestions = questions_mbti.slice(
    startIndex,
    endIndex,
  );

  const backHandler = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const prevHandler = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const isLastPage =
    currentPage === Math.ceil(totalQuestions / 6);
  const seeTheResultHandler = () => {
    const result_string =
      JSON.stringify(ansArray);
    localStorage.setItem(
      'talent-survey',
      result_string,
    );
  };
  console.log(ansArray);
  return ansArray.length === totalQuestions ? (
    <div>
      <h2>شما قبلا این آزمون را داده اید</h2>
      <Link to="/talent-survey/result/mbti">
        نتیجه را نمایش بده
      </Link>
    </div>
  ) : (
    <section className="container mx-auto p-7 mt-7">
      <section className="flex flex-col items-center justify-center gap-5">
        <section className="border shadow-lg shadow-blue-500/50 grid  grid-rows-3 grid-cols-2 gap-10 justify-items-center p-10 content-center rounded-3xl">
          {currentQuestions.length > 0 &&
            currentQuestions.map(
              (questionObj, index) => (
                <MbtiQuestionCard
                  key={index}
                  questionObj={{
                    ...questionObj,
                    id:
                      (currentPage - 1) * 6 +
                      index +
                      1,
                  }}
                />
              ),
            )}
        </section>

        <section className="flex self-end gap-5">
          {currentPage > 1 && (
            <button
              onClick={backHandler}
              className="bg-[#F5AF2B] rounded-xl p-2 px-3"
            >
              قبل
            </button>
          )}

          {!isLastPage && (
            <button
              onClick={prevHandler}
              className="bg-[#F5AF2B] rounded-xl p-2 px-3"
            >
              سوالات بعدی
            </button>
          )}
          {isLastPage && (
            <button
              className="text-white bg-primaryColor rounded-3xl"
              onClick={seeTheResultHandler}
            >
              <Link
                to="/talent-survey/result/mbti"
                className="py-3 px-6"
              >
                دیدن نتیجه تست
              </Link>
            </button>
          )}
        </section>
      </section>
    </section>
  );
}

export default MBTI;
