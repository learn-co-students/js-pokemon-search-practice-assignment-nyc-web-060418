document.addEventListener("DOMContentLoaded", function() {
  const pokemonContainer = document.getElementById('pokemon-container');
  const pokemonSearch = document.getElementById('pokemon-search-input');

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

    const store = {};

    for (var i in data['pokemons']) {
      let newPoke = new Pokemon(data['pokemons'][i]);
      store[newPoke.name] = newPoke;
    }

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


    pokemonSearch.addEventListener('keyup', displayPokemon)


    function flipImage(){
      console.log(this.dataset.poke);
      let pokemonBox = document.getElementById(this.dataset.poke)
      let imgTag = pokemonBox.querySelector('img')

      if (imgTag.src == this.frontUrl) {
        imgTag.src = this.backUrl
      } else {
        imgTag.src = this.frontUrl
      }
    }
  }
)
