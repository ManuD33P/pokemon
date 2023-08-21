export const ADD_POKEMONS = "ADD_POKEMON";
export const ADD_TYPES = "ADD_TYPES";
export const GET_POKEMON_NAME ="GET_POKEMON_NAME";
export const CHANGE_SEARCH="CHANGE_SEARCH";
export const FILTER_POKEMONS="FILTER_POKEMONS";

export function addPokemons(pokemons){
    return {
        type: ADD_POKEMONS,
        payload:pokemons 
    }
}


export function addTypes(types){
    return {
        type:ADD_TYPES,
        payload:types
    }
}



export function getPokemonName(name){

    return {
        type:GET_POKEMON_NAME,
        payload:name
    }
}

export function changeSearch(boolean){
    return {
        type: CHANGE_SEARCH,
        payload: boolean
    }
}


export function filterPokemons(filter){
    return {
        type: FILTER_POKEMONS,
        payload: filter
    }
}