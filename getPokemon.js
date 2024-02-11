const Pokemon = require('./models/pokemon');

async function getPokemon() {
 const dexNum = Math.floor(Math.random() * 151) + 1;
 const imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + dexNum + ".png";
 const summaryUrl = "https://pokeapi.co/api/v2/pokemon/" + dexNum;

 const response = await fetch(summaryUrl);
 const summary = await response.json();

 let name = capitalizeFirstLetter(summary.name);
 let typeOne = capitalizeFirstLetter(summary.types[0].type.name);
 let typeTwo = ""
 if (summary.types.length > 1) {
     typeTwo = capitalizeFirstLetter(summary.types[1].type.name);
 }

 //Create Mongoose Pokemon Schema
 const pokemon = new Pokemon({
     dexNum: dexNum,
     name: name,
     typeOne: typeOne,
     typeTwo: typeTwo,
     picture: imageUrl
 })

 return pokemon;
}

function capitalizeFirstLetter(string) {
 return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports.getPokemon = getPokemon;