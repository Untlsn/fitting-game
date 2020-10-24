import { Cart } from './cart';
import { winScreen } from './game-board';
export
class CartWrapper {
  cartsList = new Array<Cart>()
  cartsToShow = 2

  constructor() { 
    this.__constructor() 
  }
  async __constructor() {
    this.cartsList.size = 24
    const randTypes = types.sort(() => Math.random() - 0.5)
    document.querySelectorAll('.game-board__cell').forEach((cell, index) => {
      const cart = new Cart(cell, randTypes[index])
      this.setOnClick(cart)
      this.cartsList.push(cart)
    })
  }
  async setOnClick(cart: Cart) {
    const eventOnClick = () => {
      if(cart.showed == undefined) return
      if(this.cartsToShow == 0) {
        console.log('no no no')
        return
      }
      const bool = cart.toggleClass()
      if(this.cartsToShow == 2)
        this.cartsToShow += bool ? -1 : +1
      else {
        if(bool) {
          this.cartsToShow--
          const [cart1, cart2] = this.cartsList.filter(cart => cart.showed)
          setTimeout(() => {
            if(cart1.revers == cart2.revers) 
              this.throwAwayCarts(eventOnClick, cart1, cart2)
            else {
              cart1.toggleClass(false)
              cart2.toggleClass(false)
            }
            this.cartsToShow = 2
          }, 1000)
        }
        else
          this.cartsToShow++
      }
    }
    cart.e.addEventListener('click', eventOnClick)
  }

  async throwAwayCarts(event: any, ... carts: Cart[] ) {
    for(const cart of carts) {
      cart.e.removeEventListener('click', event, true)
      cart.throwAway()
      this.cartsList.size--
    }
    console.log(this.cartsList.size)
    if(this.cartsList.size == 0) {
      winScreen.show()
    }
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