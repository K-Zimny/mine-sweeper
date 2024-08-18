function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const determineTopBorderless = ({ value, top }) => {
  if (value == top) return "borderless-top";
};

const determineRightBorderless = ({ value, right }) => {
  if (value == right) return "borderless-right";
};

const determineBottomBorderless = ({ value, bottom }) => {
  if (value == bottom) return "borderless-bottom";
};

const determineLeftBorderless = ({ value, left }) => {
  if (value == left) return "borderless-left";
};

export default function Cell({
  onGameUpdate,
  gameState,
  isOver,
  id,
  currentCell,
}) {
  // console.log("currentCell: ", currentCell);

  const cellValue = gameState[id[0]][id[1]];
  return (
    <td
      id={id}
      // Complexity 2 result in binary board.
      className={
        cellValue === 0 ? "unexplored" : cellValue === 1 ? "empty" : "empty"
      }
      data-top={determineTopBorderless(currentCell)}
      data-right={determineRightBorderless(currentCell)}
      data-left={determineLeftBorderless(currentCell)}
      data-bottom={determineBottomBorderless(currentCell)}
      // className={
      //   !isOver
      //     ? cellValue === 0
      //       ? "unexplored"
      //       : cellValue === 1
      //       ? "empty"
      //       : cellValue === 2
      //       ? "flag"
      //       : cellValue === 3
      //       ? "unexplored"
      //       : cellValue === 4
      //       ? "unexplored"
      //       : cellValue === 5
      //       ? "mine"
      //       : "unexplored"
      //     : cellValue === 0
      //     ? "unexplored"
      //     : cellValue === 1
      //     ? "empty"
      //     : cellValue === 2
      //     ? "flag"
      //     : cellValue === 3
      //     ? "unexplored"
      //     : cellValue === 5
      //     ? "mine"
      //     : "unexplored"
      // }
      onClick={onGameUpdate}
    >
      {/* {cellValue} */}
      {cellValue === 0 ? "" : cellValue === 1 ? "" : ""}
      {/* {!isOver
        ? cellValue === 0
          ? " "
          : cellValue === 1
          ? " "
          : cellValue === 3
          ? ""
          : cellValue === 4
          ? ""
          : cellValue === 5
          ? "💣"
          : // : getRandomInt(3) + 1}
            cellValue
        : cellValue === 3
        ? "💣"
        : cellValue === 5
        ? "💣"
        : cellValue} */}
    </td>
  );
}
