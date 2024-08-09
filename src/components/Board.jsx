import React, { useEffect, useState } from "react";
import Cell from "./Cell";
import { taunts } from "../taunts";

const COMPLEXITY = 5;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function genArray(complexity) {
  return new Array(
    getRandomInt(complexity),
    getRandomInt(complexity),
    getRandomInt(complexity),
    getRandomInt(complexity),
    getRandomInt(complexity),
    getRandomInt(complexity),
    getRandomInt(complexity),
    getRandomInt(complexity)
  );
}

const INITIAL_GAME_STATE = new Array(
  genArray(COMPLEXITY),
  genArray(COMPLEXITY),
  genArray(COMPLEXITY),
  genArray(COMPLEXITY),
  genArray(COMPLEXITY),
  genArray(COMPLEXITY),
  genArray(COMPLEXITY),
  genArray(COMPLEXITY)
);

export default function Board() {
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);
  const [isOver, setIsOver] = useState(false);
  const [fails, setFails] = useState(0);

  // Map over rows and cells, updating the selected cell.
  const handleGameUpdate = (r, c) => {
    setGameState((prevState) => {
      return prevState.map((row, rowIndex) =>
        rowIndex == r
          ? row.map((cell, cellIndex) => (cellIndex == c ? (cell = 5) : cell))
          : row
      );
    });
    setIsOver(true);
  };

  const handleNewGame = () => {
    if (isOver) {
      setGameState(
        new Array(
          genArray(5),
          genArray(5),
          genArray(5),
          genArray(5),
          genArray(5),
          genArray(5),
          genArray(5),
          genArray(5)
        )
      );
      setIsOver(false);
      setFails((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    if (isOver) {
      setGameState((prevState) => {
        return prevState.map((row) =>
          row.map((cell) => (cell === 0 ? 1 : cell))
        );
      });
    }
  }, [isOver]);

  return (
    <>
      {fails > 2 && (
        <div class="readme">
          <h1>
            Thank you for playing Parody Minesweeper: the Unwinnable Challenge!
          </h1>
          <section>
            <h2>Introduction</h2>
            <p>
              Welcome to the parody version of the classic game{" "}
              <em>Minesweeper</em>. In this twisted take on the original, we've
              flipped the rules on their head. Traditionally, the first move in
              Minesweeper is always a "safe move," ensuring that you can't lose
              right off the bat. However, in this version, you are destined to
              lose on the first turn every single time.
            </p>
          </section>

          <section>
            <h2>The Concept</h2>
            <p>
              The goal of this parody game is simple: make you think you're
              playing a normal game of Minesweeper while secretly ensuring you
              lose from the very beginning. The humor lies in the eventual
              realization that no matter what you do, victory is impossible.
            </p>

            <ul>
              <li>
                <strong>First Move is Always a Loss:</strong> Unlike the
                original game, your first move will always result in a loss.
                Every time. The system is intentionally rigged against you.
              </li>
              <li>
                <strong>Randomly Generated Boards:</strong> Each turn, the board
                is randomly generated to maintain the illusion of fairness. The
                numbers that typically indicate how many mines are nearby are
                purely decorative in this version. They exist solely to confuse
                and mislead.
              </li>
            </ul>
          </section>

          <section>
            <h2>Opportunities for Improvement</h2>
            <p>
              While the current version of the game is entertaining in its own
              right, there are several potential enhancements that could make
              the experience even more enjoyable:
            </p>

            <ul>
              <li>
                <strong>More "Realistic" Board Generation:</strong> Developing
                an algorithm to generate boards that appear more realistic could
                heighten the initial illusion of fairness, making the eventual
                realization of the game's futility even more satisfying.
              </li>
              <li>
                <strong>Improved Number Generation:</strong> Refining the logic
                behind the numbers on the board to better reflect the placement
                of mines could add another layer of complexity to the deception.
              </li>
              <li>
                <strong>Randomized Loss on 2nd or 3rd Turn:</strong> Introducing
                a randomized loss on the 2nd or 3rd turn could further enhance
                the player's belief that the game isn't rigged, prolonging the
                suspense and teasing them into thinking they might actually
                win—only to dash those hopes once again.
              </li>
            </ul>
          </section>

          <section>
            <h2>Conclusion</h2>
            <p>
              This parody version of Minesweeper is designed to entertain and
              frustrate in equal measure. The challenge lies not in winning the
              game, but in recognizing the humor behind its unwinnable nature.
              As you play, we hope you enjoy the journey toward the inevitable
              realization: in this game, you simply cannot win.
            </p>

            <p>
              <strong>Happy losing!</strong>
            </p>
          </section>
        </div>
      )}
      <table className="board">
        <tbody>
          {/*Map over initial game state, generating all rows and cells*/}
          {INITIAL_GAME_STATE.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <Cell
                  key={[rowIndex, cellIndex]}
                  id={[rowIndex, cellIndex]}
                  gameState={gameState}
                  isOver={isOver}
                  onGameUpdate={() => handleGameUpdate(rowIndex, cellIndex)}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="lose-container">
        {isOver && (
          <>
            <h2>You Lose</h2>
            <h2>{taunts[getRandomInt(taunts.length)]}</h2>
            <button onClick={handleNewGame}>Play Again?</button>
          </>
        )}
      </div>
    </>
  );
}
