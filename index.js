
const grid = document.querySelector('.grid')
const score = document.querySelector('#score')
// variable to constraint pacman movement to the limits of the board
const width = 28
let scoreCounter = 0
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

score.innerHTML = scoreCounter;

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
let currentIndex = 741
squares[currentIndex].classList.add('pacman')

// Border conditionals for constraining the movements of pacman to the board:
    // move left if index % 28 !== 0
    // move right if index % 28 < 28-1
    // move down if index + 28 < 28*28
    // move up if index - 28 >= 0

// moves pacman if border, wall, ghost-lair and empty conditions are satisfied
function move(e){
    // erase pacman from starting position
    squares[currentIndex].classList.remove('pacman')
    squares[currentIndex].classList.remove('pac-dot')
    switch (e.key){
        case 'left': 
            if(currentIndex % width !== 0                
                && !squares[currentIndex -1].classList.contains('wall') 
                && !squares[currentIndex -1].classList.contains('ghost-lair')
            ){
                currentIndex -=1
            }
            if(currentIndex % width === 0 && squares[currentIndex].classList.contains('empty')){
                currentIndex +=27
            }                  
        case 'ArrowLeft':
            if(currentIndex % width !== 0 
                && !squares[currentIndex -1].classList.contains('wall') 
                && !squares[currentIndex -1].classList.contains('ghost-lair')){
                currentIndex -=1            
            }
            if(currentIndex % width === 0 && squares[currentIndex].classList.contains('empty')){
                currentIndex +=27
            }           
        break
        case 'up':
            if(currentIndex - width >= 0 
                && !squares[currentIndex -width].classList.contains('wall') 
                && !squares[currentIndex -width].classList.contains('ghost-lair')){
                currentIndex -= width
            }
        case 'ArrowUp':
            if(currentIndex - width >= 0 
                && !squares[currentIndex -width].classList.contains('wall') 
                && !squares[currentIndex -width].classList.contains('ghost-lair')){
                currentIndex -= width
            }
        break
        case 'rigth':
            if(currentIndex % width < width-1  //this also works on the first row because 27 % 28 = 27. i.e. 27 = (28*0) + 27. i.e. since you cannot obtain an integer by dividing 27 in 28 parts, you can not perform the division, so your remainder is 27 (your divisor remains because you cannot perform the division, so it becomes the remainder).
                && !squares[currentIndex +1].classList.contains('wall') 
                && !squares[currentIndex +1].classList.contains('ghost-lair')){
                currentIndex +=1
            }
            if(currentIndex % width >= width-1 && squares[currentIndex].classList.contains('empty')){
                currentIndex -=27
            }
        case 'ArrowRight':
            if(currentIndex % width < width-1 
                && !squares[currentIndex +1].classList.contains('wall') 
                && !squares[currentIndex +1].classList.contains('ghost-lair')){
                currentIndex +=1
            }
            if(currentIndex % width >= width-1 && squares[currentIndex].classList.contains('empty')){
                currentIndex -=27
            }
        break
        case 'down':
            if(currentIndex + width < width*width 
                && !squares[currentIndex +width].classList.contains('wall') 
                && !squares[currentIndex +width].classList.contains('ghost-lair')){
                currentIndex += width
            }
        case 'ArrowDown':
            if(currentIndex + width < width*width 
                && !squares[currentIndex +width].classList.contains('wall') 
                && !squares[currentIndex +width].classList.contains('ghost-lair')){
                currentIndex += width
            }
        break
        default:
            return
    }
    // draw pacman in new position
    squares[currentIndex].classList.add('pacman')
    // eat the pac-dot in the new position
    eat()       
}

function eat(){
    if (squares[currentIndex].classList.contains('pac-dot')){
        scoreCounter ++
        squares[currentIndex].classList.remove('pac-dot')
        squares[currentIndex].classList.add('empty')
        // update score
        score.innerHTML = scoreCounter
    }
}
// Creating template (class) for Ghosts
// not all variables or properties defined for an object template (class) need to be passed as parameters
class Ghost {
    constructor(className, startIndex, speed){
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this.currentIndex = startIndex
        this.isScared = false
        this.timerId = NaN
    }
}

const ghosts =[
    new Ghost ('blinky', 348, 250),
    new Ghost('pinky', 376, 400),
    new Ghost('inky', 351, 300),
    new Ghost('clyde', 379, 500)
]

// draw ghost into the ghost-lair with their own class and a generic 'ghost' class
ghosts.forEach(ghost => {
    squares[ghost.startIndex].classList.add(ghost.className, 'ghost')
})
// move all the ghosts in the array
ghosts.forEach(ghost => moveGhost(ghost))

// move ghost
function moveGhost(ghost){
    // generate random direction from set of 4 possible directions Right, Left, Down, Up
    const directions = [+1, -1, +width, -width] 
    let randomIndex = Math.floor(Math.random()*directions.length)
    let randomDirection = directions[randomIndex]
    
    // move ghost constantly at specific speed (interval in miliseconds)
    ghost.timerId = setInterval(function(){
        // check if next square is NOT a wall NOR a ghost
        if(!squares[ghost.currentIndex + randomDirection].classList.contains('wall') 
        && !squares[ghost.currentIndex + randomDirection].classList.contains('ghost') 
        ){
        // erase ghost from original position, including the generic 'ghost' class
        squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost')
        // // update ghost index with random direction
        ghost.currentIndex += randomDirection
        // // draw ghost on new position including the generic 'ghost' class
        squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
        } else {
            // create new direction by reassigning new random index and reassigning new random direction
            randomIndex = Math.floor(Math.random()*directions.length)
            randomDirection = directions[randomIndex]
            // now that this is stored in a block variable, it will be used in the computations of the next interval of this setInterval() function
        }
    }, ghost.speed)


}

// event listener for arrow keys in the document
document.addEventListener('keydown', move)

