import { Component } from 'react';
import Statistics from './Componenets/Statistics/Statistics';
import FeedbackOptions from './Componenets/FeedbackOptions/FeedbackOptions';
import Section from './Componenets/Section/Section';
import Notification from './Componenets/Notification/Notification';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback = () => Object.values(this.state).reduce((acc, value) => acc + value);

  countPositiveFeedbackPercentage = () => {
    const total = Object.values(this.state).reduce((acc, value) => acc + value);
    const percentage = Math.round(this.state.good / total * 100);
    return percentage;
  };

  handleCounterFeedBack = (name) => this.setState(prevState => ({ [name]: prevState[name] + 1 }));

  render() {
    const { good, neutral, bad } = this.state;
    const nameButtons = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions nameButtons={nameButtons} onLeaveFeedback={this.handleCounterFeedBack} />
        </Section>
        <Section title={'Statistics'}>
          <Statistics good={good} neutral={neutral} bad={bad} total={total} percentage={positivePercentage} />
          <Notification message={'No feedback given'} total={total} />
        </Section>
      </>
    );
  }
}

export default App
