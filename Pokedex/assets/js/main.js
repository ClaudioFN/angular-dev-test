
const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
let allPokemons = [];

const maxRecords = 248;
const limit = 5;
let offset = 0;


function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit)
    .then((pokemons = []) => { 
        const newHtml = pokemons.map((pokemon) => `
        <a href="#" id="detailPage" onClick='pokemonDetail(${pokemon.number});'>
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}"
                    alt="${pokemon.name}">
                </div>
            </li>
        </a>`
        ).join('');
        pokemonList.innerHTML += newHtml;
        pokemons.map((pokemon) => allPokemons.push(pokemon));
        console.log("allPokemons: " + allPokemons.length);
      //const listItems = []
      //for( let i = 0; i < pokemons.length; i++) {
      //    const pokemon = pokemons[i];
      //    listItems.push(convertPokemonToLi(pokemon));
      //}
      //pokemonList.innerHTML = listItems;
  });
}

loadPokemonItens(offset, limit);
const loadDetailPage = document.getElementById('detailPage');

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    const qtdRecord = offset + limit;

    if (qtdRecord >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit);
        
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
        loadPokemonItens(offset, limit);
    }
    
});

/*loadDetailPage.addEventListener('click', () => {
    console.log('loadDetailPage');
    window.location.href = "../detail.html";
    
});*/


function pokemonDetail(selectedPokemon) {
    
    
    let poke = new Pokemon();
    poke = allPokemons[selectedPokemon-1];
    console.log("detail:"+poke.species);

    localStorage.setItem("name", poke.name);
    localStorage.setItem("number", poke.number);
    localStorage.setItem("type", poke.type);
    localStorage.setItem("photo", poke.photo);
    localStorage.setItem("species", poke.species);
    localStorage.setItem("height", poke.height);
    localStorage.setItem("weight", poke.weight);
    localStorage.setItem("abilities", poke.abilities);
    localStorage.setItem("weakness", poke.weakness);
    localStorage.setItem("gender", poke.gender);

    window.location.href = "../detail.html";


}