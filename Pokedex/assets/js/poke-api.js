
const pokeApi = {};

function convertPokeApiDetailToPokemon(pokemonsDetail){
    const pokemon = new Pokemon();
    console.log(pokemonsDetail);
    pokemon.number = pokemonsDetail.id;
    pokemon.name = pokemonsDetail.name;
    
    const types = pokemonsDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type1] = types;
    
    pokemon.types = types;
    pokemon.type = type1;
    pokemon.photo = pokemonsDetail.sprites.other.dream_world.front_default;
    
    const species = pokemonsDetail.species.name;
    pokemon.species = species;
    pokemon.specie = pokemonsDetail.species.name;
    pokemon.height = pokemonsDetail.height;
    pokemon.weight = pokemonsDetail.weight;
    pokemon.abilities = pokemonsDetail.abilities.map((typeSlot) => typeSlot.ability.name);

    console.log(`abilities: ${pokemon.abilities}`);
    return pokemon;
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon);
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    
    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => pokemonsDetails)
    .catch((error) => console.log(error));
}

Promise.all([

]).then((results) => {
    console.log(results);
});