class Pokemon {
  constructor(name, frontImage, backImage) {
    this.name = name
    this.frontImage = frontImage
    this.backImage = backImage
    this.isFacingFront = true
  }

  render() {
    if (this.isFacingFront === true) {
      return `<div class="pokemon-container">
          <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
          <h1 class="center-text">${this.name}</h1>
          <div style="width:239px;margin:auto">
            <div style="width:96px;margin:auto">
              <img src="${this.frontImage}">
            </div>
          </div>
          <p style="padding:10px;" class="center-text flip-image" data-pokename="${this.name}" data-action="flip-image">flip card</p>
          </div>
        </div>`
    } else {
        return `<div class="pokemon-container">
            <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
            <h1 class="center-text">${this.name}</h1>
            <div style="width:239px;margin:auto">
              <div style="width:96px;margin:auto">
                <img src="${this.backImage}">
              </div>
            </div>
            <p style="padding:10px;" class="center-text flip-image" data-pokename="${this.name}" data-action="flip-image">flip card</p>
            </div>
          </div>`
      }
    }
}
