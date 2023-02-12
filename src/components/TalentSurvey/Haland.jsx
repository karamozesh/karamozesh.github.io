import React from 'react';
import { data } from '../../Data/data';
import { useState } from 'react';

function Haland() {
  const [currentPage, setCurrentPage] =
    useState(1);
  console.log(data);

  const numQuestions = 6;
  const startIndex =
    (currentPage - 1) * numQuestions;

  const endIndex = currentPage * numQuestions;

  const currentQuestions = data.slice(
    startIndex,
    endIndex,
  );

  const backHandler = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const prevHandler = () => {
    setCurrentPage((prev) => prev + 1);
  };
  return (
    <section className="container mx-auto p-7 mt-7">
      <section className="flex flex-col items-center justify-center gap-5">
        <section className="border shadow-lg shadow-blue-500/50 grid  grid-rows-3 grid-cols-2 gap-10 justify-items-center p-10 content-center rounded-3xl">
          {currentQuestions.length > 2 &&
            currentQuestions.map(
              (question, index) => {
                return (
                  <>
                    <div>
                      <p>{question.question}</p>

                      <div className="grid grid-cols-5 mb-10 grid-rows-1 gap-2 mt-5 text-md text-xs">
                        <button className=" rounded-xl border shadow-lg">
                          {question.answer1.label}
                        </button>
                        <button className=" rounded-xl border shadow-lg">
                          {question.answer2.label}
                        </button>
                        <button className=" rounded-xl border shadow-lg">
                          {question.answer3.label}
                        </button>
                        <button className=" rounded-xl border shadow-lg">
                          {question.answer4.label}
                        </button>

                        <div className="relative rounded-xl border shadow-lg">
                          <label
                            htmlFor=""
                            className="absolute"
                          >
                            {
                              question.answer5
                                .label
                            }
                          </label>
                          <input
                            type="checkbox"
                            className="absolute w-full opacity-0"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                );
              },
            )}
        </section>
        <section className=" flex gap-5">
          {currentPage > 1 && (
            <button
              onClick={backHandler}
              className="bg-[#F5AF2B] rounded-xl p-2 px-3"
            >
              قبل
            </button>
          )}

          <button
            onClick={prevHandler}
            className="bg-[#F5AF2B] rounded-xl p-2 px-3"
          >
            سوالات بعدی
          </button>
        </section>
      </section>
    </section>
  );
}

export default Haland;
