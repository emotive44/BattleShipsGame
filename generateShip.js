const generateRightShip = (row, widthOfShip) => {
  let currentWidthOfShip = 0;
  let firstDigit = Math.floor(row / 10);
  let limitNumber;

  if (row % 10 === 0) {
    limitNumber = row;
  } else {
    limitNumber = firstDigit * 10 + 10;
  }

  for (let i = 0; i < widthOfShip; i++) {
    let currNumber = row + i;
    if (
      document.getElementById(`dot-${currNumber}`).dataset.ship === 'empty' &&
      currNumber <= limitNumber
    ) {
      currentWidthOfShip++;
    }
  }

  if (currentWidthOfShip === widthOfShip) {
    for (let i = 0; i < widthOfShip; i++) {
      document.getElementById(`dot-${row + i}`).style.background = 'red';
      document.getElementById(`dot-${row + i}`).dataset.ship = 'ship';
    }
  }

  return true;
};

export { generateRightShip };
