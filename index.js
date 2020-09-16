// const letterValue = {
//   A: 0,
//   B: 10,
//   C: 20,
//   D: 30,
//   E: 40,
//   F: 50,
//   G: 60,
//   H: 70,
//   I: 80,
//   J: 90,
// };
// // global variables
// let countOfShoots = 0;
// const shootedPlaces = [];

// create a initial grid
(() => {
  const battleGrid = document.getElementById('battle-board');

  for (let i = 1; i <= 100; i++) {
    const span = document.createElement('span');
    span.innerHTML = '&middot';
    span.id = `dot-${i}`;

    battleGrid.appendChild(span);
  }
})();

// const shoot = () => {
//   const coordinates = document.getElementById('coordinates').value;
//   let infoMsg = document.getElementById('shots-alert');
//   const regex = new RegExp('^[A-J][1-9]+$');
//   let row, columns;

//   infoMsg.style.display = 'block';
//   columns = coordinates.charAt(0);

//   if (coordinates.length > 2) {
//     row = +coordinates.slice(-2);
//   } else {
//     row = +coordinates.charAt(1);
//   }

//   // check for correct coordinates
//   if (row > 10 || coordinates.length < 2 || !coordinates.match(regex)) {
//     infoMsg.innerText = 'Please fill correct coordinates.';
//     return;
//   }
//   const dotCount = letterValue[columns] + row;
//   const target = document.getElementById(`dot-${dotCount}`);

//   if (shootedPlaces.includes(dotCount)) {
//     infoMsg.innerText = 'This place was shooted already';
//     return;
//   }

//   countOfShoots++;
//   shootedPlaces.push(dotCount);

//   infoMsg.innerText = '*** MISS ***';
//   target.innerHTML = '&ndash;';
// };
