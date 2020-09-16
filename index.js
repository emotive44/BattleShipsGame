// create a initial grid
(() => {
  const battleGrid = document.getElementById('battle-board');

  for (let i = 1; i <= 100; i++) {
    const span = document.createElement('span');
    span.innerHTML = '.';
    span.id = `dot-${i}`;

    battleGrid.appendChild(span);
  }
})();
