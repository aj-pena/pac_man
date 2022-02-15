
const grid = document.querySelector('.grid')
const score = document.querySelector('#score')
// variable to constraint pacman movement to the limits of the board
const width = 28
// 28 x 28 = 784
  // 0 - pac-dots
  // 1 - wall
  // 2 - ghost-lair
  // 3 - power-pellet
  // 4 - empty

// Code for board
const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1

]

const squares = []
console.log(grid)
function createBoard(){
    for (let i=0; i<layout.length; i++){
        // create square
        const square = document.createElement('div')
        // square.innerText = i;        
        // add square to grid
        grid.appendChild(square)
        // save square in squares array
        squares.push(square)
        // give square a class this works because arrays work as references
        // for objects. Html elements, in this case 'divs' are objects.
        if(layout[i]===0){
            squares[i].classList.add('pac-dot')
        }else if(layout[i]===1){
            squares[i].classList.add('wall')
        }else if(layout[i]===2){
            squares[i].classList.add('ghost-lair')
        }else if (layout[i]===3){
            squares[i].classList.add('power-pellet')
        }else{
            squares[i].classList.add('empty')
        }       

    }
}
 
createBoard()

// Index of pacman's position
let currentIndex = 477
squares[currentIndex].classList.add('pacman')

// Control the movements of pacman
function control(e){
    // erase pacman from starting position
    squares[currentIndex].classList.remove('pacman')

    switch (e.key){
        case 'left': 
            if(currentIndex % width !== 0 && !squares[currentIndex -1].classList.contains('wall')){
                currentIndex -=1
            }                   
        case 'ArrowLeft':
            if(currentIndex % width !== 0 && !squares[currentIndex -1].classList.contains('wall')){
                currentIndex -=1            }           
        break
        case 'up':
            if(currentIndex - width >= 0 && !squares[currentIndex -width].classList.contains('wall')){
                currentIndex -= width
            }
        case 'ArrowUp':
            if(currentIndex - width >= 0 && !squares[currentIndex -width].classList.contains('wall')){
                currentIndex -= width
            }
        break
        case 'rigth':
            if(currentIndex % width < width-1 && !squares[currentIndex +1].classList.contains('wall')){
                currentIndex +=1
            }
        case 'ArrowRight':
            if(currentIndex % width < width-1 && !squares[currentIndex +1].classList.contains('wall')){
                currentIndex +=1
            }
        break
        case 'down':
            if(currentIndex + width < width*width && !squares[currentIndex +width].classList.contains('wall')){
                currentIndex += width
            }
        case 'ArrowDown':
            if(currentIndex + width < width*width && !squares[currentIndex +width].classList.contains('wall')){
                currentIndex += width
            }
        break
        default:
            return
    }
    // draw pacman in new position
    squares[currentIndex].classList.add('pacman')
    // move left if index % 28 !== 0
    // move right if index % 28 < 28-1
    // move down if index + 28 < 28*28
    // move up if index - 28 >= 0
    
}
// event listener for arrow keys in the document
document.addEventListener('keydown', control)
