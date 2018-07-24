document.addEventListener("DOMContentLoaded", function(event) {
  
  const pokemonHTMLContainer = document.getElementById("pokemon-container")
  const pokemonObjArr = pokemonData.pokemons.map(pokeObj => new Pokemon(pokeObj.name, pokeObj.sprites.front,pokeObj.sprites.back))

  const searchInput = document.getElementById("pokemon-search-input")
  searchInput.addEventListener("keyup", function(event){
    if (searchInput.value){
      const filterPokemonSearch = pokemonObjArr.filter(pokeObj => pokeObj.name.includes(searchInput.value))
      const renderPokemonObj = filterPokemonSearch.map(pokeObj => pokeObj.render()).join("")
      pokemonHTMLContainer.innerHTML = renderPokemonObj
    } else {
      pokemonHTMLContainer.innerHTML = ''
    }
  })

  pokemonHTMLContainer.addEventListener("click", function(event){
    if (event.target.dataset.action === "flip-image"){
      const findPokemonObj = pokemonObjArr.find(pokeObj => pokeObj.name === event.target.dataset.pokename)
      const pokeObjImgElement = document.querySelector(`img[data-pokemon-name="${findPokemonObj.name}"]`)
      if (pokeObjImgElement.dataset.imageDirection === 'front'){
        findPokemonObj.toggleImgDirection(findPokemonObj.backImage, pokeObjImgElement ,'back')
      } else {
        findPokemonObj.toggleImgDirection(findPokemonObj.frontImage, pokeObjImgElement ,'front')
      }
    }
  })

})
