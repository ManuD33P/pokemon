import axios from 'axios'
import {ALL_POKEMON_AND_CREATE,POKEMON_TYPES} from '../constantes/apiUrl';

export function* getPokemonsPages(pokemons,group){
    try {
        for(let i = 0; i < pokemons.length;i += group){
            if((i + group) < pokemons.length-1)
            yield pokemons.slice(i,i+group);
            else
            yield pokemons.slice(i);
        }
    } catch (error) {
        return error
    }
}

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
