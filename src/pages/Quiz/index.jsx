import React from 'react';
import { useHistory } from 'react-router';

import GenrePicker from '../../components/GenrePicker';

const QuizPage = () => {
  const { push } = useHistory();

  const handleSubmit = (genrePicked) => {
    push(`/quiz-results/${genrePicked}`);
  };

  return (
    <div>
      <h1>Quiz!</h1>
      <GenrePicker onSubmit={handleSubmit} />
    </div>
  );
};

export default QuizPage;
