export default function Cell({ onGameUpdate, gameState, id }) {
  return (
    <td
      id={id}
      className={
        gameState[id[0]][id[1]] === 1
          ? "empty"
          : gameState[id[0]][id[1]] === 2
          ? "mine"
          : ""
      }
      onClick={onGameUpdate}
    >
      {gameState[id[0]][id[1]] === 2 ? "X" : "  "}
    </td>
  );
}
