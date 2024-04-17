import React, { useEffect, useState } from "react";

const FrequentlyQuestions = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch("/frequentlyQuestions.json")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);
  return (
    <div className="lg:w-[85%] w-[95%] mx-auto mt-12 md:mt-24">
      <div className="mt-12 md:mt-24 text-center space-y-4 md:w-1/2 mx-auto">
        <h2
          className="text-2xl md:text-4xl font-bold font-exo "
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Frequently Ask Question
        </h2>
        <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">
          Explore common queries in our FAQ section, providing quick answers to
          your inquiries, simplifying your real estate experience.
        </p>
      </div>
      <div className="join join-vertical w-full mt-12">
        {questions.map((question) => (
          <div
            key={question.id}
            className="collapse collapse-arrow join-item border border-base-300"
          >
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-lg font-bold">
              {question.question}
            </div>
            <div className="collapse-content">
              <p>{question.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrequentlyQuestions;
