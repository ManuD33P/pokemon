import axios from 'axios'
import {ALL_POKEMON_AND_CREATE,POKEMON_TYPES} from '../constantes/apiUrl';

export function getPokemonsPages(pokemons){ // 200  20   10 iteraciones
    let pokemonGroup = [];
    console.log(pokemons)
    if(pokemons)
    for(let i = 0; i < pokemons.length;i += 12){
        if(i+12 < pokemons.length)
        pokemonGroup.push(pokemons.slice(i,i+12))
        else
        pokemonGroup.push(pokemons.slice(i))
      }

      return pokemonGroup
}

// const pages = getPokemonsPages(pokemons,20) 
// pages.next().value


export async function getPokemons(){
    try {
        const {data} = await axios(ALL_POKEMON_AND_CREATE);
        return data 
    } catch (error) {
        return error
    }
}


export async function getTypes(){
    try{
        const {data} = await axios(POKEMON_TYPES);
        return data
    } catch(error){
        return error
    }
}


