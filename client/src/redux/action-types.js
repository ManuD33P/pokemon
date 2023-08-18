export const ADD_POKEMONS = "ADD_POKEMON";
export const ADD_TYPES = "ADD_TYPES";


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
