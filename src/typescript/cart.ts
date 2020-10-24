export
class Cart {
  private cell: Element
  revers: string

  constructor(cell: Element, revers: string) {
    this.cell = cell
    this.revers = revers
  }

  get e() {
    return this.cell
  }

  async toggleClass(lever?: boolean): Promise<boolean> {
    if(lever === true) {
      this.cell.classList.add('js-score')
      this.cell.classList.add(
        `js-show-${this.revers}`
      )
      return true
    }
    else if(lever === false) {
      this.cell.classList.remove('js-score')
      this.cell.classList.remove(
        `js-show-${this.revers}`
      )
      return false
    }
    else {
      return this.cell.classList.contains('js-score')
        ? await this.toggleClass(false)
        : await this.toggleClass(true)
    }
  }
}