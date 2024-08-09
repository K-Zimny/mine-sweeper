import React, { useEffect, useState } from "react";
import Cell from "./Cell";
import { taunts } from "../taunts";

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
  genArray(5),
  genArray(5),
  genArray(5),
  genArray(5),
  genArray(5),
  genArray(5),
  genArray(5),
  genArray(5)
);

export default function Board() {
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);
  const [isOver, setIsOver] = useState(false);

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
                  onGameUpdate={() => handleGameUpdate(rowIndex, cellIndex)}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {isOver && (
        <>
          <h2>You Lose</h2>
          <h2>{taunts[getRandomInt(taunts.length)]}</h2>
          <button onClick={handleNewGame}>Play Again?</button>
        </>
      )}
    </>
  );
}
