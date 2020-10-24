export
class Cart {
  private cell: Element
  revers: string
  showed?: boolean

  constructor(cell: Element, revers: string) {
    this.showed = false
    this.cell = cell
    this.revers = revers
  }

  get e() {
    return this.cell
  }

  toggleClass(lever?: boolean): boolean {
    if(lever === true) {
      this.cell.classList.add('js-score')
      this.cell.classList.add(
        `js-show-${this.revers}`
      )
      this.showed = true
    }
    else if(lever === false) {
      this.cell.classList.remove('js-score')
      this.cell.classList.remove(
        `js-show-${this.revers}`
      )
      this.showed = false
    }
    else {
      this.cell.classList.contains('js-score')
        ? this.toggleClass(false)
        : this.toggleClass(true)
    }
    return this.showed
  }

  async throwAway() {
    this.cell.classList.add('throwed-away')
    this.showed = undefined
  }
}