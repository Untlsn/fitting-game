export
const fillBoard = async() => {
  const board = document.querySelector('.game-board')!
  for(let i = 0; i<24; i++)
    board.innerHTML += `<div class="game-board__cell game-board__cell#${i}">`
}
export
const winScreen = {
  hide: () => {
    document.querySelector('.win-screen')?.classList.add('hide')
  },
  show: () => {
    document.querySelector('.win-screen')?.classList.remove('hide')
  }
}