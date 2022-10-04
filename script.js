let BACKGROUND_COLOR = "#edf2f4";
let DEFAULT_SIZE = 16;

let container = document.querySelector('.container');

function createGrid(sideLength) {
  for (let i = 0; i < sideLength; i++) {
      for (let j = 0; j < sideLength; j++) {
          let grid = document.createElement('div');
          grid.classList.add('grid-item');
          container.appendChild(grid);
      }
  }

    container.style.gridTemplateColumns = `repeat(${sideLength}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${sideLength}, 1fr)`;
}


function eraseGrid() {
  let gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(gridItem => {
      gridItem.style.backgroundColor = BACKGROUND_COLOR;
  })
}

function changeGridSize(newSize) {
  container.innerHTML = '';
  createGrid(newSize);
}

function changeColor(color) {
    let gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(gridItem => {
        gridItem.addEventListener('mouseover', () => {
            gridItem.style.backgroundColor = color;
        })
    })
}

function changeColorRandom() {
    let gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(gridItem => {
        gridItem.addEventListener('mouseover', () => {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            gridItem.style.backgroundColor = `#${randomColor}`;
        })
    })
}

let clearButton = document.querySelector('#clear');
clearButton.onclick = () => changeColor(BACKGROUND_COLOR);

let randomButton = document.querySelector('#random');
randomButton.onclick = () => changeColorRandom();

let eraserButton = document.querySelector('#erase');
eraserButton.onclick = () => eraseGrid();

let picker = document.querySelector('#picker');
picker.addEventListener('change', () => {
    changeColor(picker.value);
})

let sizes = document.querySelectorAll('.size');
sizes.forEach(size => {
    size.addEventListener('click', () => {
        console.log(size.value);
        changeGridSize(size.value);
    })
})

createGrid(DEFAULT_SIZE);