const localPokemon = [];

document.addEventListener("DOMContentLoaded", function() {
  const pokemon = allPokemon["pokemons"]
  let pokemonId = 0
  class Pokemon {
    constructor(name, frontSprite, backSprite){
      this.name = name;
      this.frontSprite = frontSprite;
      this.backSprite = backSprite;
      this.id = ++pokemonId
      localPokemon.push(this);
    }
  };
  for (el of pokemon){
    new Pokemon (el.name, el.sprites.front, el.sprites.back)
  };
})

function getSearchTerm(){
  return document.querySelector('#pokemon-search-input')
};

function searchUpdate(){
  let searchTerm = getSearchTerm().value;
  const filteredPokemon = localPokemon.filter(pokemon => pokemon.name.includes(searchTerm))
  const pokemonContainer = document.querySelector('#pokemon-container');
  while (pokemonContainer.firstChild) {
    pokemonContainer.removeChild(pokemonContainer.firstChild);
  }
  if (searchTerm !== ''){
    for (let poke of filteredPokemon){
      pokemonContainer.appendChild(divMaker(poke))
    };
  }
};

function divMaker(pokemon){
  let container = document.createElement('div')
  container.id = `${pokemon.id}-container`
  container.className = "pokemon-container"
  let frame = document.createElement('div')
  frame.className = "pokemon-frame"
  frame.style = "width:230px;margin:10px;background:#fecd2f;color:#2d72fc"
  frame.innerHTML += `<h1 class='center-text'>${pokemon.name}</h1>
  <div style="width:239px;margin:auto">
            <div style="width:96px;margin:auto">
              <img src= ${pokemon.frontSprite}>
            </div>
          </div>`
  let p = document.createElement('p')
  p.style = "padding:10px;"
  p.className = "center-text flip-image"
  p.innerText = 'Flip Card'
  p.addEventListener('click', flipCard)
  frame.appendChild(p)
  container.appendChild(frame)
  return container
};

function flipCard(event) {
  let containerId = Number(event.path[2].id.split('-')[0])
  let pokemon = localPokemon.find( (p) => {return p.id === containerId})
  if (event.path[1].children[1].children[0].children[0].src === pokemon.backSprite){
    event.path[1].children[1].children[0].children[0].src = pokemon.frontSprite
  } else {
    event.path[1].children[1].children[0].children[0].src = pokemon.backSprite
  }
}
