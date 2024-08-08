import React, { useEffect, useState } from "react";
import Cell from "./Cell";

const INITIAL_GAME_STATE = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

export default function Board() {
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);
  const [isOver, setIsOver] = useState(false);

  // Map over rows and cells, updating the selected cell.
  const handleGameUpdate = (r, c) => {
    setGameState((prevState) => {
      return prevState.map((row, rowIndex) =>
        rowIndex == r
          ? row.map((cell, cellIndex) => (cellIndex == c ? (cell = 2) : cell))
          : row
      );
    });
    setIsOver(true);
  };

  const handleNewGame = () => {
    if (isOver) {
      setGameState(INITIAL_GAME_STATE);
      setIsOver(false);
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
          <h2>Wow, you're bad at this.</h2>
          <button onClick={handleNewGame}>Play Again?</button>
        </>
      )}
    </>
  );
}
