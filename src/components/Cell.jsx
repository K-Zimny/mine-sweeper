function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function Cell({ onGameUpdate, gameState, id }) {
  const cellValue = gameState[id[0]][id[1]];
  return (
    <td
      id={id}
      className={
        cellValue === 0
          ? "unexplored"
          : cellValue === 1
          ? "empty"
          : cellValue === 2
          ? "flag"
          : cellValue === 3
          ? "hidden-mine"
          : cellValue === 5
          ? "mine"
          : ""
      }
      onClick={onGameUpdate}
    >
      {cellValue === 0
        ? " "
        : cellValue === 1
        ? " "
        : cellValue === 3
        ? "💣"
        : cellValue === 5
        ? "💣"
        : getRandomInt(3) + 1}
    </td>
  );
}
