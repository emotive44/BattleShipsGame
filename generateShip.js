const generateRightShip = (row, widthOfShip) => {
  let currentWidthOfShip = 0;
  let firstDigit = Math.floor(row / 10);
  let limitNumber;

  if (row % 10 === 0) {
    limitNumber = row;
  } else {
    limitNumber = firstDigit * 10 + 10;
  }

  let currNumber;
  for (let i = 0; i < widthOfShip; i++) {
    currNumber = row + i;

    if (
      row === firstDigit * 10 ||
      currNumber > (firstDigit + 1) * 10 ||
      document.getElementById(`dot-${currNumber}`).dataset.ship === 'ship'
    )
      return false;

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

  let currNumber;
  for (let i = 0; i < widthOfShip; i++) {
    currNumber = row - i;

    if (
      currNumber <= firstDigit * 10 ||
      document.getElementById(`dot-${currNumber}`).dataset.ship === 'ship'
    )
      return false;

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

  let currNumber;
  for (let i = 0; i < widthOfShip; i++) {
    currNumber = row - i * 10;

    if (
      currNumber < 0 ||
      document.getElementById(`dot-${currNumber}`).dataset.ship === 'ship'
    )
      return false;

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

const generateBottomShip = (row, widthOfShip) => {
  let currentWidthOfShip = 0;
  let limitNumber = row + widthOfShip * 10;

  let currNumber;
  for (let i = 0; i < widthOfShip; i++) {
    currNumber = row + i * 10;

    if (
      currNumber > 100 ||
      document.getElementById(`dot-${currNumber}`).dataset.ship === 'ship'
    )
      return false;

    if (
      document.getElementById(`dot-${currNumber}`).dataset.ship === 'empty' &&
      currNumber <= limitNumber
    ) {
      currentWidthOfShip++;
    }
  }

  if (currentWidthOfShip === widthOfShip) {
    for (let i = 0; i < widthOfShip; i++) {
      document.getElementById(`dot-${row + i * 10}`).style.background = 'red';
      document.getElementById(`dot-${row + i * 10}`).dataset.ship = 'ship';
    }
  }

  return true;
};

// generate random number between 0 - max
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max)) || 1;
};

const generateShips = () => {
  let countOfShips = 0;
  let randomNumber;
  do {
    randomNumber = getRandomInt(100);
    console.log(randomNumber);
    if (generateRightShip(randomNumber, countOfShips < 1 ? 5 : 4) !== false) {
      countOfShips++;
      continue;
    }

    if (generateBottomShip(randomNumber, countOfShips < 1 ? 5 : 4) !== false) {
      countOfShips++;
      continue;
    }

    if (generateLeftShip(randomNumber, countOfShips < 1 ? 5 : 4) !== false) {
      countOfShips++;
      continue;
    }

    if (generateTopShip(randomNumber, countOfShips < 1 ? 5 : 4) !== false) {
      countOfShips++;
      continue;
    }
  } while (countOfShips < 3);
};

export default generateShips;
