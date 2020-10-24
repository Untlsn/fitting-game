export
class InvertedCount {
  count = 0

  async move(leverPromice: Promise<boolean>) {
    const lever = await leverPromice
    return new Promise(res => {
      if(lever) {
        this.count++
        res()
      }  
      else
        this.count--
    })
  }
}