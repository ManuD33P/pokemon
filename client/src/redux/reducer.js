import {ADD_POKEMONS,ADD_TYPES, GET_POKEMON_NAME} from "./action-types";

const initialState = {
   pokemons : [],
   copyPokemons:[],
   types:[],
   search:false,
   loading:true,
}
// pokemons = Arreglo de objetos. (id,name,types,attack,defense,image,speed,heigth,weigth)
// types = Arreglo de objetos (id,name);

export default function reducer(state = initialState, {type,payload}){
  switch(type){
    case ADD_POKEMONS:
      return{
      ...state,
      pokemons: payload,
      copyPokemons:payload,
      loading:false,
      }
    
    case ADD_TYPES:{
      return{
        ...state,
        types: payload
      }
    }
    case GET_POKEMON_NAME:{
      let pokemon;
      console.log(payload)
      if(payload)
        pokemon = state.pokemons.filter(pokemon => pokemon.name.includes(payload.trim()))
      else
        pokemon = state.pokemons
      return {
        ...state,
        copyPokemons:pokemon
      }
    }

    default:
        return {
            ...state
        }
  }
}