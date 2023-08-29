import axios from "axios";
// import { POKEMON_BY_NAME } from "../constantes/apiUrl";

export const ADD_POKEMONS = "ADD_POKEMONS";
export const ADD_POKEMON = "ADD_POKEMON";
export const ADD_TYPES = "ADD_TYPES";
export const GET_POKEMON_NAME = "GET_POKEMON_NAME";
export const CHANGE_SEARCH = "CHANGE_SEARCH";
export const FILTER_POKEMONS = "FILTER_POKEMONS";
export const CHANGE_PAGE  = "CHANGE_PAGE";
export const RETRY_LOADING_POKEMON = "RETRY_LOADING_POKEMON";
export const LOADING_CHANGE ="LOADING_CHANGE";


export function loadingChange(boolean){
  return {
    type: LOADING_CHANGE,
    payload:boolean
  }
}

export function retryLoading(boolean){
  return {
    type: RETRY_LOADING_POKEMON,
    payload: boolean
  }
}

export function addPokemons(pokemons) {
  return {
    type: ADD_POKEMONS,
    payload: pokemons,
  };
}

export function addTypes(types) {
  return {
    type: ADD_TYPES,
    payload: types,
  };
}

export  function getPokemonName(search) {
    let response 
    return async (dispatch) =>{
        try {
            if(search)
             response  = await axios('http://localhost:3001/pokemons/name?name='+search)
             return dispatch({
                type : GET_POKEMON_NAME ,
                payload:{
                    search,
                    data : response.data
                }

             })
        } catch (error) {
          console.log(search)
            return dispatch({
                type : GET_POKEMON_NAME,
                payload:{data:error, search}
            })
        }

    }
    
}



export function filterPokemons(filter) {
  return {
    type: FILTER_POKEMONS,
    payload: filter,
  };
}


export function changePage(page){
  return {
    type:CHANGE_PAGE,
    payload:page
  }
}

export function addPokemon(pokemon){
return {
  type:ADD_POKEMON,
  payload:pokemon
}
}