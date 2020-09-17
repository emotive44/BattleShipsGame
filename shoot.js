const letterValue = {
  A: 0,
  B: 10,
  C: 20,
  D: 30,
  E: 40,
  F: 50,
  G: 60,
  H: 70,
  I: 80,
  J: 90,
};
// global variables
let sunkCount = 0;
let countOfShoots = 0;
const shootedPlaces = [];

const shoot = () => {
  const coordinates = document.getElementById('coordinates').value;
  let infoMsg = document.getElementById('shots-alert');
  const regex = new RegExp('^[A-J][1-9]?(0|[1-9])$');
  let row, columns;

  infoMsg.style.display = 'block';
  columns = coordinates.charAt(0);

  if (coordinates.length > 2) {
    row = +coordinates.slice(-2);
  } else {
    row = +coordinates.charAt(1);
  }

  // check for correct coordinates
  if (
    row < 1 ||
    row > 10 ||
    coordinates.length < 2 ||
    !coordinates.match(regex)
  ) {
    infoMsg.innerText = 'Please fill correct coordinates.';
    return;
  }
  const dotCount = letterValue[columns] + row;
  const target = document.getElementById(`dot-${dotCount}`);

  if (shootedPlaces.includes(dotCount)) {
    infoMsg.innerText = 'This place was shooted already';
    return;
  }

  countOfShoots++;
  shootedPlaces.push(dotCount);

  // show alert notifications
  if (target.dataset.ship === 'ship') {
    target.innerHTML = 'x';
    infoMsg.innerText = '*** SUNK ***';
    sunkCount++;
  } else {
    infoMsg.innerText = '*** MISS ***';
    target.innerHTML = '&ndash;';
  }

  if (sunkCount === 13) {
    let winAlert = document.getElementById('win-alert');
    winAlert.style.display = 'block';
    winAlert.innerHTML = `Well done! You completed the game in ${countOfShoots} shots.`;

    document.getElementById('shots-alert').style.display = 'none';
  }
};
