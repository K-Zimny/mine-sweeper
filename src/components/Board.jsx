import React, { useState } from "react";

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

const Cell = ({ onGameUpdate, gameState, id }) => {
  return (
    <td
      className={gameState[id[0]][id[1]] === 1 ? "active" : ""}
      onClick={onGameUpdate}
    >
      {gameState[id[0]][id[1]] === 1 ? "X" : "[ ]"}
    </td>
  );
};

export default function Board() {
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);

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
        {INITIAL_GAME_STATE.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <Cell
                key={cellIndex}
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
