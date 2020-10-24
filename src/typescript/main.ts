import 'regenerator-runtime/runtime'
import { fillBoard } from './game-board';
import { CartWrapper } from './carts-wrapper';



const bootstrap = async() => {
  fillBoard()
  const cartWrapper = new CartWrapper()
}


bootstrap()