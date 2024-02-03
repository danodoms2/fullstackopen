import { useState } from "react";
import MostVoted from "./MostVoted";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const copy = [...votes];

  const [selected, setSelected] = useState(0);

  const handleNext = () => {
    //const nextIndex = (index + 1) % anecdotes.length;
    const nextIndex = Math.floor(Math.random() * anecdotes.length);
    console.log("nextIndex: ", nextIndex);
    setSelected(nextIndex);
  };

  return (
    <>
      <div>
        <h1>Anecdote of the day</h1>
        {anecdotes[selected]}
      </div>

      <div>
        <button onClick={handleNext}>next anecdote</button>
        <p>votes {votes[selected]}</p>
        {console.log(votes)}
        <button
          onClick={() => {
            copy[selected] += 1;
            setVotes(copy);
          }}
        >
          vote
        </button>
      </div>

      <MostVoted anecdotes={anecdotes} selected={selected} votes={votes} />
    </>
  );
};

export default App;