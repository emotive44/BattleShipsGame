import generateShips from './generateShip.js';

(() => {
  const battleGrid = document.getElementById('battle-board');

  for (let i = 1; i <= 100; i++) {
    const span = document.createElement('span');
    span.innerHTML = '&middot';
    span.id = `dot-${i}`;
    span.dataset.ship = 'empty';

    battleGrid.appendChild(span);
  }

  generateShips();
})();
