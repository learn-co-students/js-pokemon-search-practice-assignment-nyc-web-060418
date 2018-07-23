document.addEventListener("DOMContentLoaded", function() {
const all_pokemon = pokemon["pokemons"]
const searchInput = document.getElementById('pokemon-search-input')
const pokeContainer = document.getElementById('pokemon-container')
const searchForm = document.getElementById('pokemon-search-form')
searchInput.addEventListener("keyup", filter)
pokeContainer.addEventListener("click", flip)

function filter() {
  pokeContainer.innerHTML = ""
  var searchValue = searchInput.value
  var filteredList = []
  for (var i in pokemon["pokemons"]) {
    if (pokemon["pokemons"][i]["name"].match(searchValue)) {
      filteredList.push(pokemon["pokemons"][i])
    }
  }
  for (var i = 0; i < filteredList.length; i++) {
    newPokemon = new Pokemon(filteredList[i]["name"], filteredList[i]["sprites"])
    pokeContainer.innerHTML += newPokemon.render()
  }
}

function flip(event) {
    name = event.target.dataset.pokename
    const frontName = document.getElementById(`${name}_front`)
    const backName = document.getElementById(`${name}_back`)
    if (frontName.style.display == "block") {
      frontName.style.display = "none"
      backName.style.display = "block"
    } else {
      frontName.style.display = "block"
      backName.style.display = "none"
    }
  }
})
