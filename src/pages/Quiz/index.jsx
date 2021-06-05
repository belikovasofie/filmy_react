import React from 'react';
import { useHistory } from 'react-router';
import Test from '../../components/Test';

const QuizPage = () => {
  const { push } = useHistory();

  const handleSubmit = (genrePicked) => {
    push(`/quiz-results/${genrePicked}`);
  };

  return (
    <div>
      <h1>Quiz!</h1>
      <Test onSubmit={handleSubmit} />
    </div>
  );
};

export default QuizPage;
