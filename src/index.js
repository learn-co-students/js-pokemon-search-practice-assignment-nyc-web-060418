document.addEventListener("DOMContentLoaded", function(event) {

  const searchTerm = document.getElementById("pokemon-search-input")
  const ourPokemon = allPokemon.pokemons.map( pokeObj => new Pokemon(pokeObj.name, pokeObj.sprites.front, pokeObj.sprites.back))
  const pokemonArea = document.getElementById("pokemon-container")

  function displayPokemon() {
    let filterCriteria = searchTerm.value;
    let filteredArray = ourPokemon.filter( pokemonObject => pokemonObject.name.includes(filterCriteria))
    let ourNewArray = filteredArray.map( pokemonObject => pokemonObject.render() )
    pokemonArea.innerHTML = ourNewArray.join("")
  }

  searchTerm.addEventListener("keyup", function (event) {
    if(searchTerm.value === "") {
      return pokemonArea.innerHTML = ""
    } else {
      displayPokemon()
    }
  })

  addEventListener("click", function (event) {
    if(event.target.dataset.action === "flip-image"){
      let specificPokemon = ourPokemon.find( pokemonObject => pokemonObject.name === event.target.dataset.pokename)

      if(specificPokemon.isFacingFront === true) {
        specificPokemon.isFacingFront = false;
      } else {
        specificPokemon.isFacingFront = true;
      }
      displayPokemon()
    }
  })
})
