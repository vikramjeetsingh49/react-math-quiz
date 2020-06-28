import React from 'react';

const Score = props => {
 const { correctAnswers, numOfQuestions } = props;
  return (
    <p className="text">
            Your Score: {correctAnswers}/{numOfQuestions}
    </p>
  )
}

export default Score