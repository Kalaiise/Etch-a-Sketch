let sizeOfGrid = 8;
let container = document.querySelector('.container');
let gridButton = document.querySelector('.btn');

const grid = (gridSize) => {
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')

    for (let x = 0; x < gridSize; x++) {
        let gridRow = document.createElement('div');
        gridRow.classList.add('row');

        for (let z = 0; z < gridSize; z++ ) {
            const gridColumn = document.createElement('div');
            gridColumn.classList.add('column');
            gridColumn.addEventListener('mouseenter', () => {
                gridColumn.style.backgroundColor = 'black';
            });
            gridRow.appendChild(gridColumn);
        }
        wrapper.appendChild(gridRow);
    };
    container.appendChild(wrapper);
};

grid(sizeOfGrid);


gridButton.addEventListener('click', () => {
   let changeGrid = prompt("Enter a number *up to a max of 100*");
   if (isNaN(changeGrid) || changeGrid > 100) {
    alert("Please choose a number that is under 100.")
   }else {
    const wrapper = document.querySelector('.wrapper');
   wrapper.remove();
   grid(changeGrid);
   }
})



