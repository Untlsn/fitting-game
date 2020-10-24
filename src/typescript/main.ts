import 'regenerator-runtime/runtime'
import { fillBoard, winScreen } from './game-board';
import { CartWrapper } from './carts-wrapper';



const bootstrap = async() => {
  winScreen.hide()
  fillBoard()
  const cartWrapper = new CartWrapper()
}


bootstrap()