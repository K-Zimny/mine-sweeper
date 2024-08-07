import React, { useState } from "react";
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

  // Map over rows and cells, updating the selected cell.
  const handleGameUpdate = (r, c) => {
    setGameState((prevState) => {
      return prevState.map((row, rowIndex) =>
        rowIndex == r
          ? row.map((cell, cellIndex) => (cellIndex == c ? (cell = 1) : cell))
          : row
      );
    });
  };

  return (
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
  );
}
