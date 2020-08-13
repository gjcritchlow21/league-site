import React, { Component } from "react";
import Poll from "react-polls";

// Declaring poll question and answers
const pollQuestion1 = "Add a 3rd WR slot?";
const pollAnswers1 = [
  { option: "Yes", votes: 0 },
  { option: "No", votes: 0 },
  { option: "Extra Flex", votes: 0 },
];

const pollStyles1 = {
  questionSeparator: true,
  questionSeparatorWidth: "question",
  questionBold: true,
  questionColor: "#002A5E",
  align: "center",
  theme: "blue",
};

const pollQuestion2 = "Remove the kicker?";
const pollAnswers2 = [
  { option: "Yes", votes: 0 },
  { option: "No", votes: 0 },
];

const pollStyles2 = {
  questionSeparator: true,
  questionSeparatorWidth: "question",
  questionBold: true,
  questionColor: "#002A5E",
  align: "center",
  theme: "blue",
};

const pollQuestion3 = "Yearly PPR attempt";
const pollAnswers3 = [
  { option: "Full", votes: 0 },
  { option: "Half", votes: 0 },
  { option: "None", votes: 0 },
];

const pollStyles3 = {
  questionSeparator: true,
  questionSeparatorWidth: "question",
  questionBold: true,
  questionColor: "#002A5E",
  align: "center",
  theme: "blue",
};

const pollQuestion4 = "COVID-19 IR Spot";
const pollAnswers4 = [
  { option: "Yes", votes: 0 },
  { option: "No", votes: 0 },
];

const pollStyles4 = {
  questionSeparator: true,
  questionSeparatorWidth: "question",
  questionBold: true,
  questionColor: "#002A5E",
  align: "center",
  theme: "blue",
};

const pollQuestion5 = "IR-Spot";
const pollAnswers5 = [
  { option: "Yes", votes: 0 },
  { option: "No", votes: 0 },
];

const pollStyles5 = {
  questionSeparator: true,
  questionSeparatorWidth: "question",
  questionBold: true,
  questionColor: "#002A5E",
  align: "center",
  theme: "blue",
};

const pollQuestion6 = "Missed Kicks";
const pollAnswers6 = [
  { option: "-1 Points", votes: 0 },
  { option: "0 Points", votes: 0 },
];

const pollStyles6 = {
  questionSeparator: true,
  questionSeparatorWidth: "question",
  questionBold: true,
  questionColor: "#002A5E",
  align: "center",
  theme: "blue",
};

const pollQuestion7 = "QB Maximum";
const pollAnswers7 = [
  { option: "2", votes: 0 },
  { option: "3", votes: 0 },
  { option: "4", votes: 0},
];

const pollStyles7 = {
  questionSeparator: true,
  questionSeparatorWidth: "question",
  questionBold: true,
  questionColor: "#002A5E",
  align: "center",
  theme: "blue",
};

//creating Poll class
class PollQuestion extends Component {
  // Setting answers to state to reload the component with each vote
  state = {
    pollAnswers1: [...pollAnswers1],
    pollAnswers2: [...pollAnswers2],
    pollAnswers3: [...pollAnswers3],
    pollAnswers4: [...pollAnswers4],
    pollAnswers5: [...pollAnswers5],
    pollAnswers6: [...pollAnswers6],
    pollAnswers7: [...pollAnswers7]
  };

  handleVote = (voteAnswer, pollAnswers, pollNumber) => {
    const newPollAnswers = pollAnswers.map((answer) => {
      if (answer.option === voteAnswer) answer.votes++;
      return answer;
    });

    if (pollNumber === 1) {
      this.setState({
        pollAnswers1: newPollAnswers,
      });
    } else if (pollNumber === 2) {
      this.setState({
        pollAnswers2: newPollAnswers,
      });
    } else if (pollNumber === 3) {
      this.setState({
        pollAnswers3: newPollAnswers,
      })
    } else if (pollNumber === 4) {
      this.setState({
        pollAnswers4: newPollAnswers,
      })
    } else if (pollNumber === 5) {
      this.setState({
        pollAnswers5: newPollAnswers,
      })
    } else if (pollNumber === 6) {
      this.setState({
        pollAnswers6: newPollAnswers,
      })
    } else {
      this.setState({
        pollAnswers7: newPollAnswers,
      });
    }
  };

  render() {
    const { pollAnswers1, pollAnswers2, pollAnswers3, pollAnswers4, pollAnswers5 } = this.state;
    return (
      <div className="poll-wrapper">
        <h2>2020-21 Purposed Changes</h2>
        <div className="poll-container">
          <div className="poll">
            <Poll
              question={pollQuestion1}
              answers={pollAnswers1}
              onVote={(voteAnswer) =>
                this.handleVote(voteAnswer, pollAnswers1, 1)
              }
              customStyles={pollStyles1}
            />
          </div>
          <div className="poll">
            <Poll
              question={pollQuestion2}
              answers={pollAnswers2}
              onVote={(voteAnswer) =>
                this.handleVote(voteAnswer, pollAnswers2, 2)
              }
              customStyles={pollStyles2}
            />
          </div>
          <div className="poll">
            <Poll
              question={pollQuestion3}
              answers={pollAnswers3}
              onVote={(voteAnswer) =>
                this.handleVote(voteAnswer, pollAnswers3, 3)
              }
              customStyles={pollStyles3}
            />
          </div>
          <div className="poll">
          <Poll
              question={pollQuestion4}
              answers={pollAnswers4}
              onVote={(voteAnswer) =>
                this.handleVote(voteAnswer, pollAnswers4, 4)
              }
              customStyles={pollStyles4}
            />
          </div>
          <div className="poll">
          <Poll
              question={pollQuestion5}
              answers={pollAnswers5}
              onVote={(voteAnswer) =>
                this.handleVote(voteAnswer, pollAnswers5, 5)
              }
              customStyles={pollStyles5}
            />
          </div>
          <div className="poll">
          <Poll
              question={pollQuestion6}
              answers={pollAnswers6}
              onVote={(voteAnswer) =>
                this.handleVote(voteAnswer, pollAnswers6, 6)
              }
              customStyles={pollStyles6}
            />
          </div>
          <div className="poll">
          <Poll
              question={pollQuestion7}
              answers={pollAnswers7}
              onVote={(voteAnswer) =>
                this.handleVote(voteAnswer, pollAnswers6, 7)
              }
              customStyles={pollStyles7}
            />
          </div>
          </div>
        </div>
    );
  }
}
export default PollQuestion;
