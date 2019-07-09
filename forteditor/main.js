'use strict';

let userClick = false;

function createTerrain(nbrX, nbrY) {
  let terrain = '';
  for(let x = 0; x < nbrX; x++) {
    terrain += '<tr>';
    for(let y = 0; y < nbrY; y++) {
      terrain += `<td id="t${y}-${x}"></td>`;
    }
    terrain += '</tr>';
  }
  document.querySelector('#terrain').innerHTML = terrain;

  initEvents();
}

function initEvents() {
  const items = document.querySelectorAll('td');
  items.forEach(function(item) {
    item.addEventListener('mousedown', function(event) {
      this.classList.add('blue');
    });
    item.addEventListener('mouseover', function(event) {
      if(!userClick) return;
      this.classList.add('blue');
    })
  });
}

document.addEventListener('mousedown', () => userClick = true);
document.addEventListener('mouseup', () => userClick = false);

createTerrain(100, 200);