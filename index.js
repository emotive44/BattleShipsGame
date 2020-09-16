import { generateRightShip, generateLeftShip } from './generateShip.js';

// generate random number between 0 - max
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max)) || 1;
};

(() => {
  const battleGrid = document.getElementById('battle-board');

  for (let i = 1; i <= 100; i++) {
    const span = document.createElement('span');
    span.innerHTML = '&middot';
    span.id = `dot-${i}`;
    span.dataset.ship = 'empty';

    battleGrid.appendChild(span);
  }

  // generateRightShip(getRandomInt(100), 4);
  generateLeftShip(getRandomInt(100), 4);
})();
