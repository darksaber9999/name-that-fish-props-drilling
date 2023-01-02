import "./styles/game-board.css";

export const GameBoard = ({ answersLeft, fishGuess, setFishGuess, testFishGuess }) => {
  const nextFishToName = answersLeft[0];

  const onChange = (e) => {
    const value = e.target.value.toLowerCase().trim();
    setFishGuess(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    testFishGuess();
    setFishGuess('');
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onSubmit={onSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input type="text" name="fish-guess" value={fishGuess} onChange={onChange} />
        <input type="submit" />
      </form>
    </div>
  );
};
