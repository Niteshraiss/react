import { useEffect, useState } from 'react'
import './PokemonList.css'
import axios from 'axios'

export const PokemonList = () => {
    const POKEDEX_URL="https://pokeapi.co/api/v2/pokemon";

    async function downloadPokemons() {
        const response=await axios.get(POKEDEX_URL)
        const pokemonResults = response.data.results;
        const pokemonPromise=pokemonResults.map((pokemon)=>{
           return axios.get(pokemon.url)
        })
        const pokemonListData=await axios.all(pokemonPromise);
        console.log(pokemonListData);
        
    }
    useEffect(()=>{
        downloadPokemons()
    },[])
  return (
    <div>

    </div>
  )
}
