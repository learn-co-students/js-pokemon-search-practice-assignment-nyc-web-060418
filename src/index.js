document.addEventListener("DOMContentLoaded", function() {
  const store = {};
  const pokemonContainer = document.getElementById('pokemon-container');
  const pokemonSearch = document.getElementById('pokemon-search-input');
  pokemonSearch.addEventListener('keyup', displayPokemon);

    //declare our class, Pokemon. it can render itself.
    class Pokemon {
      constructor(obj){
        this.name = obj['name']
        this.frontUrl = obj['sprites']['front']
        this.backUrl = obj['sprites']['back']
      }

      render() {
        return `<div class="pokemon-container" id="${this.name}">
        <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${this.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto">
            <img src="${this.frontUrl}">
          </div>
        </div>
        <p style="padding:10px;" class="center-text flip-image" data-poke="${this.name}" data-action="flip-image">flip card</p>
        </div>
      </div>`
      }
    }

    //initialize the store
    for (var i in data['pokemons']) {
      let newPoke = new Pokemon(data['pokemons'][i]);
      store[newPoke.name] = newPoke;
    }

    //displays each pokemon according to what's in the search bar, and adds an event listener to the flip image text
    function displayPokemon() {
      pokemonContainer.innerHTML = '';
      let searchTerm = pokemonSearch.value;
      let arr = [];

      for (var i in store) {
        if (store[i].name.includes(searchTerm)){
          arr.push(store[i]);
        }
      }

      arr.forEach(function(pokemon){
        pokemonContainer.innerHTML += pokemon.render();
      })

      const foundPokemon = pokemonContainer.getElementsByClassName('flip-image')
      let foundPokemonArr = Array.from(foundPokemon)

      foundPokemonArr.forEach(function(pokemon) {
        pokemon.addEventListener('click', flipImage.bind(pokemon))
      })
    }


    function flipImage(){
      let pokemonBox = document.getElementById(this.dataset.poke)
      let imgTag = pokemonBox.querySelector('img')
      if (imgTag.src == store[this.dataset.poke].frontUrl) {
        imgTag.src = store[this.dataset.poke].backUrl
      } else {
        imgTag.src = store[this.dataset.poke].frontUrl
      }
    }
  }
)
