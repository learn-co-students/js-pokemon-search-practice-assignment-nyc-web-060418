let pokemonId = 0
class Pokemon {

  constructor(name, imageFront, imageBack){
    this.id = ++pokemonId
    this.name = name
    this.imageFront = imageFront
    this.imageBack = imageBack
    this.imageIsFront = true
  }

  render() {
    if (this.imageIsFront === true) {
      return `
      <div class='pokemon-container'>
        <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${this.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
            <img data-pokemon-name="${this.name}" src="${this.imageFront}">
          </div>
        </div>
        <p style="padding:10px;" class="center-text flip-image" data-direction="front" data-pokename="${this.name}" data-action="flip-image">flip card</p>
        </div>
      </div>
        `
    } else {
      return `
      <div class='pokemon-container'>
        <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${this.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
            <img data-pokemon-name="${this.name}" src="${this.imageBack}">
          </div>
        </div>
        <p style="padding:10px;" class="center-text flip-image" data-direction="front" data-pokename="${this.name}" data-action="flip-image">flip card</p>
        </div>
      </div>
        `
    }
  }

}
