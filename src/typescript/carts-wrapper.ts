import { Cart } from './cart';
import { InvertedCount } from './inverted-count';
export
class CartWrapper {
  cartsList = new Array<Cart>()
  invertedCount = new InvertedCount()

  constructor() { 
    this.__constructor() 
  }
  async __constructor() {
    const randTypes = types.sort(() => Math.random() - 0.5)
    document.querySelectorAll('.game-board__cell').forEach((cell, index) => {
      const cart = new Cart(cell, randTypes[index])
      this.setOnClick(cart)
      this.cartsList.push(cart)
    })
  }
  async setOnClick(cart: Cart) {
    cart.e.addEventListener('click', () => {
      this.invertedCount.move(cart.toggleClass())
    })
  }
  
}

const types = [
  'a', 'a',
  'b', 'b',
  'c', 'c',
  'd', 'd',
  'e', 'e',
  'f', 'f',
  'g', 'g',
  'h', 'h',
  'i', 'i',
  'j', 'j',
  'k', 'k',
  'l', 'l',
]