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
};

const generateLeftShip = (row, widthOfShip) => {
  let currentWidthOfShip = 0;
  let firstDigit = Math.floor(row / 10);
  let limitNumber = firstDigit * 10 + 1;

  if (row % 10 === 0) {
    limitNumber = row;
  } else {
    limitNumber = firstDigit * 10 + 1;
  }

  for (let i = 0; i < widthOfShip; i++) {
    let currNumber = row - i;
    if (
      document.getElementById(`dot-${currNumber}`).dataset.ship === 'empty' &&
      currNumber >= limitNumber
    ) {
      currentWidthOfShip++;
    }
  }

  if (currentWidthOfShip === widthOfShip) {
    for (let i = 0; i < widthOfShip; i++) {
      document.getElementById(`dot-${row - i}`).style.background = 'red';
      document.getElementById(`dot-${row - i}`).dataset.ship = 'ship';
    }
  }
};

const generateTopShip = (row, widthOfShip) => {
  let currentWidthOfShip = 0;
  let limitNumber = row - widthOfShip * 10;

  for (let i = 0; i < widthOfShip; i++) {
    let currNumber = row - i * 10;
    if (
      document.getElementById(`dot-${currNumber}`).dataset.ship === 'empty' &&
      limitNumber >= 1 &&
      currNumber >= limitNumber
    ) {
      currentWidthOfShip++;
    }
  }

  if (currentWidthOfShip === widthOfShip) {
    for (let i = 0; i < widthOfShip; i++) {
      document.getElementById(`dot-${row - i * 10}`).style.background = 'red';
      document.getElementById(`dot-${row - i * 10}`).dataset.ship = 'ship';
    }
  }
};

export { generateRightShip, generateLeftShip, generateTopShip };
