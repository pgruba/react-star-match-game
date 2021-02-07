import PlayNumber from "./components/PlayNumber";
import StarsDisplay from "./components/StarsDisplay";
import React, { useEffect, useState } from "react";
import utils from "./../libs/utils";
import PlayAgain from "./components/PlayAgain";

export default function StarMatch() {
  const [starsCount, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setCandidateNums] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(10);

  /*#sideEffectsHooks
  alway clean side effects*/
  useEffect(() => {
    console.log("Rendering...");
    if (secondsLeft > 0) {
      const timeoutId = setTimeout(() => {
        setSecondsLeft(secondsLeft - 1);
      }, 1000);
      /*TODO: it is possible to freeze timer by clicking over and over again on any number
      check jscomplete.com/rgs-hooks to see details */
      return () => clearTimeout(timeoutId);
    }
  });

  const candidatesAreWrong = utils.sum(candidateNums) > starsCount;

  const gameStatus = availableNums.length === 0 ? "won" : secondsLeft === 0 ? "lost" : "active";

  const numberstatus = (number) => {
    if (!availableNums.includes(number)) {
      return "used";
    }

    if (candidateNums.includes(number)) {
      return candidatesAreWrong ? "wrong" : "candidate";
    }

    return "available";
  };

  const onNumberClick = (number, currentStatus) => {
    if (currentStatus == "used" || gameStatus !== "active") {
      return;
    }

    const newCandiateNums =
      currentStatus === "available" ? candidateNums.concat(number) : candidateNums.filter((cn) => cn !== number);

    if (utils.sum(newCandiateNums) !== starsCount) {
      setCandidateNums(newCandiateNums);
    } else {
      const newAvailableNums = availableNums.filter((n) => !newCandiateNums.includes(n));

      console.log(newAvailableNums);
      //redraw stars
      setStars(utils.randomSumIn(newAvailableNums, 9));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
    }
  };

  const resetGame = () => {
    setStars(utils.random(1, 9));
    setAvailableNums(utils.range(1, 9));
    setCandidateNums([]);
    setSecondsLeft(10);
  };

  return (
    <div className="game">
      <div className="help">Pickk 1 or more numbers that sum to the number of stars</div>
      <div className="body">
        <div className="left">
          {gameStatus !== "active" ? (
            <PlayAgain reset={resetGame} gameStatus={gameStatus} />
          ) : (
            <StarsDisplay count={starsCount} />
          )}
        </div>
        <div className="right">
          {utils.range(1, 9).map((o) => (
            <PlayNumber key={o} status={numberstatus(o)} onClick={onNumberClick} number={o} />
          ))}
        </div>
      </div>
      Time Remaining: {secondsLeft}
    </div>
  );
}
