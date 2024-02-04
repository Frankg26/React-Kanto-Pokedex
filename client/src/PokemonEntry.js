import React, { useEffect, useState } from 'react';

export default function PokemonEntry() {

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetchPokemon();
  }, []);

  function populatePokemon(){
	let temp = (	
		<div className="PokemonEntry" key={pokemon._id}>
			<h1>{pokemon.name} #{pokemon.dexNum}</h1>
			<h2>{pokemon.typeOne} {pokemon.typeTwo}</h2>
			<img className="PokemonImage" src={pokemon.picture} alt="" />
		</div>
	)
	return temp;
  }

  function fetchPokemon(){
	fetch('/pokemonSearch')
	  .then(res => {
			return res.json();
		})
	  .then(val => {			
			setPokemon(val);
		})
  }

  return (
    <div>
      {populatePokemon()}
      <button type="button" className="btn btn-primary" onClick={fetchPokemon}>Switch Pokemon</button>
    </div>
  ); 

}