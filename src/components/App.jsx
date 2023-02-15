import { useState } from 'react';
import { FeedbackOptions } from './Feedback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = e => {
    const { name } = e.target;
    setFeedback(prevFeetback => ({
      ...prevFeetback,
      [name]: prevFeetback[name] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return (feedback.good * 100) / countTotalFeedback();
  };

  const { good, neutral, bad } = feedback;
  console.log(feedback);
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveFeedback={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
