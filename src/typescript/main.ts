import 'regenerator-runtime/runtime'
import { fillBoard, winScreen, clearBoard } from './game-board';
import { CartWrapper } from './carts-wrapper';



const bootstrap = async() => {
  clearBoard()
  winScreen.hide()
  fillBoard()
  new CartWrapper()
}

document.querySelector('.reload-button')?.addEventListener('click', bootstrap)
bootstrap()