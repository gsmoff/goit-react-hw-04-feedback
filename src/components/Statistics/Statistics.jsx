import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>positiveFeedback: {Math.round(positiveFeedback)} %</p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
