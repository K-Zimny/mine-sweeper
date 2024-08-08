export default function Cell({ onGameUpdate, gameState, id }) {
  return (
    <td
      id={id}
      className={gameState[id[0]][id[1]] === 1 ? "active" : ""}
      onClick={onGameUpdate}
    >
      {gameState[id[0]][id[1]] === 1 ? "X" : "  "}
    </td>
  );
}
