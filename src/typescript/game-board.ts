export
const fillBoard = async() => {
  const board = document.querySelector('.game-board')!
  for(let i = 0; i<24; i++)
    board.innerHTML += `<div class="game-board__cell game-board__cell#${i}">`
}