const board = document.querySelector('#board');
const colors = ['red','blue','green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'gray', 'white', 'teal', 'olive', 'maroon', 'navy', 'indigo', 'turquoise'];
const SQUARES_NUMBER = 900;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        const color = getRandomColor()
        square.style.backgroundColor = color
        square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    })

    square.addEventListener('mouseleave', () => {
        square.style.backgroundColor = '#1d1d1d'
        square.style.boxShadow = `0 0 2px #000`
    })

    board.append(square);
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}