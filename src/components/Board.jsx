import React, { useState } from "react";

const INITIAL_GAME_STATE = [
  [0, 0],
  // [0, 0],
];

const Cell = ({ onGameUpdate }) => {
  return <td onClick={onGameUpdate}>[]</td>;
};

export default function Board() {
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);

  console.log("gameStaate", gameState);

  const handleGameUpdate = (r, c) => {
    console.log(c);
    console.log("handleGameUpdate");
    setGameState((prevState) => {
      const newState = prevState.map((row, rowIndex) =>
        rowIndex == r
          ? row.map((cell, cellIndex) => (cellIndex == c ? (cell = 1) : cell))
          : row
      );
      return newState;
    });
  };

  console.log(gameState);
  return (
    <table className="board">
      <tbody>
        <tr>
          <Cell
            className={gameState[0][0] == 1 ? "active" : ""}
            onGameUpdate={() => handleGameUpdate("0", "0")}
          ></Cell>
          <Cell></Cell>
        </tr>
        {/* <tr>
          <Cell></Cell>
          <Cell></Cell>
        </tr> */}
      </tbody>
    </table>
  );
}
