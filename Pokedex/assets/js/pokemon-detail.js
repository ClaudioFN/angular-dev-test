const newTitle = document.getElementById('newTitle');
const content = document.getElementById("content");
var completePokeName = "";
var number = "";
var type = "";
var photo = "";
var species = [];
var height = "";
var weight = "";
var abilities = [];
getLocalStorage();

function getLocalStorage() {
    //const searchParams = new URLSearchParams(window.location.search);
    var pokeName = localStorage.getItem("name");
    var pokeNameFirstLetter = pokeName.charAt(0).toLocaleUpperCase();
    var remainingPokemonLetters = pokeName.slice(1)
    completePokeName = pokeNameFirstLetter + remainingPokemonLetters;
    newTitle.innerHTML = "Pokedex - " + completePokeName;

    number = "#" + localStorage.getItem("number").padStart(3, "0");
    type = localStorage.getItem("type");
    photo = localStorage.getItem("photo");
    species = localStorage.getItem("species").split(",");
    height = localStorage.getItem("height");
    weight = localStorage.getItem("weight");
    abilities = localStorage.getItem("abilities").split(",");

    setPokeInfo();
}

function setPokeInfo() {
    content.innerHTML = `
    <div id="selectedPokemon" class="selectedPokemon ${type}">
        <span class="pokeNumber">
            ${number}
        </span> 
        <div class="pokePhoto">
            <img src="${photo}" alt="${completePokeName}">
        </div>
        <div class="pokeDetails">
                <table class="pokeTable">
                    <tr>
                        <td>Species</td>
                        <td>${species}</td>
                    </tr>
                    <tr>
                        <td>Height</td>
                        <td>${height}</td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>${weight}</td>
                    </tr>
                    <tr>
                        <td>Abilities</td>
                        <td>${abilities.map((ability) => `<span class="ability">${ability}</span>`).join(' ')}</td>
                    </tr>
                    <tr>
                        
                    </tr>
                </table>

        </div>
    </div>

    `;
}

