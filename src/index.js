document.addEventListener("DOMContentLoaded", function(evt) {
//   // console.log(pokeData)
//
//   let pokeSearchBar = document.getElementById("pokemon-search-input")
//
//   let pokeContainer = document.getElementById("pokemon-container")
//
// //SEARCHBAR EVENT LISTENER
//   pokeSearchBar.addEventListener("keyup",
//     function (){
//       if (pokeSearchBar.value === "") {
//         return pokeContainer.innerHTML = ""
//       }
//
//       pokeContainer.innerHTML = ""
//
//       let filteredPokeArr = pokeData.pokemons.filter(function(pokemon){
//         return pokemon.name.includes(pokeSearchBar.value.toLowerCase())
//       })
//
//       filteredPokeArr.forEach(function (pokemonObj){
//             return pokeContainer.innerHTML+= `
//             <div class='pokemon-container'>
//               <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
//               <h1 class="center-text">${pokemonObj.name}</h1>
//               <div style="width:239px;margin:auto">
//                 <div style="width:96px;margin:auto">
//                   <img data-pokemon-name="${pokemonObj.name}" src="${pokemonObj.sprites.front}">
//                 </div>
//               </div>
//               <p style="padding:10px;" class="center-text flip-image" data-direction="front" data-pokename="${pokemonObj.name}" data-action="flip-image">flip card</p>
//               </div>
//             </div>
//             `
//     })
//
//   })
//
//
// // TOGGLE IMAGE
// let pokeObjByName = function(name) {
//   return pokeData.pokemons.find(pokemon => pokemon.name === name)
// }
//
//
// pokeContainer.addEventListener('click',
//   function (evt){
//
//     if (evt.target.dataset.action === 'flip-image') {
//       let pokeName = evt.target.dataset.pokename
//       let pokeObj = pokeObjByName(pokeName)
//
//       let pokemonObjHTMLElement = document.querySelector(`img[data-pokemon-name="${pokeObj.name}"]`)
//
//       if (evt.target.dataset.direction === 'front') {
//         pokemonObjHTMLElement.src = pokeObj.sprites.back
//         evt.target.dataset.direction = 'back'
//       }
//       else {
//         pokemonObjHTMLElement.src = pokeObj.sprites.front
//         evt.target.dataset.direction = 'front'
//       }
//     }
//   })

//***********************************************

//////////////////////////////////
// USING A CLASS!!!!
/////////////////////////////////

  const pokemonObjs = pokeData.pokemons.map(pokemon => new Pokemon(pokemon.name, pokemon.sprites.front, pokemon.sprites.back))

  let pokeSearchBar = document.getElementById("pokemon-search-input")

  let pokeContainer = document.getElementById("pokemon-container")

  pokeSearchBar.addEventListener("keyup", function(evt) {
    let searchMatch = pokemonObjs.filter(pokemonObj => pokemonObj.name.includes(pokeSearchBar.value))
    pokeContainer.innerHTML = ""
    if (pokeSearchBar.value === "") {
      pokeContainer.innerHTML = ""
    } else {
      return pokeContainer.innerHTML = searchMatch.map(pokemon => pokemon.render()).join("")
    }
  })

  // let searchMatch = name =>

  pokeContainer.addEventListener("click", function(evt) {

    let searchMatch = pokemonObjs.filter(pokemonObj => pokemonObj.name.includes(pokeSearchBar.value))

    if (evt.target.dataset.action === 'flip-image') {
      let pokemon = pokemonObjs.find(pokemonObj => pokemonObj.name === evt.target.dataset.pokename)
      console.log(pokemon)
      if (pokemon.imageIsFront === true) {
        pokemon.imageIsFront = false

      } else {
        pokemon.imageIsFront = true
      }
    return pokeContainer.innerHTML = searchMatch.map(pokemon => pokemon.render()).join("")
    }

  })

})
