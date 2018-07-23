class Pokemon {
  constructor(name, image) {
    this.name = name
    this.front = image["front"]
    this.back = image["back"]
  }

  render() {
    return `
  <div class="pokemon-container">
    <div style='width:230px;margin:10px;background:#fecd2f;color:#2d72fc' class="pokemon-frame">
    <h1 class="center-text">${this.name}</h1>
    <div style="width:239px;margin:auto">
      <div style="width:96px;margin:auto">
        <img id="${this.name}_front" src="${this.front}" style= "display:block">
        <img id="${this.name}_back" src="${this.back}" style ="display:none">
      </div>
    </div>
    <p style="padding:10px;" class="center-text flip-image" data-pokename="${this.name}" data-action="flip-image">flip card</p>
    </div>
  </div>
  `
  }
}
