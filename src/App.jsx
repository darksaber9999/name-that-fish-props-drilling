import "./App.css";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import { Images } from "./assets/images";
import "./Components/styles/final-score.css";
import { useState } from "react";
import { FinalScore } from "./Components/FinalScore";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

function App() {
  const [answersLeft, setAnswersLeft] = useState(initialFishes);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [fishGuess, setFishGuess] = useState('');

  const removeCurrentFish = () => {
    answersLeft.length > 1 ?
      setAnswersLeft(answersLeft.slice(1)) :
      setAnswersLeft([]);
  };

  const gradeGuess = (isGuessCorrect) => {
    isGuessCorrect ?
      setCorrectCount(correctCount + 1) :
      setIncorrectCount(incorrectCount + 1);
    removeCurrentFish();
  };

  const testFishGuess = () => {
    return fishGuess === answersLeft[0].name ?
      gradeGuess(true) :
      gradeGuess(false);
  };

  return (
    <div className="App">
      <header>
        <ScoreBoard
          incorrectCount={incorrectCount}
          correctCount={correctCount}
          answersLeft={answersLeft}
        />
        {answersLeft.length ?
          <GameBoard
            answersLeft={answersLeft}
            fishGuess={fishGuess}
            setFishGuess={setFishGuess}
            testFishGuess={testFishGuess}
          /> :
          <FinalScore
            correctCount={correctCount}
            totalCount={initialFishes.length}
          />}
      </header>
    </div>
  );
}

export default App;
