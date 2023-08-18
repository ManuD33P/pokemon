import {ADD_POKEMONS,ADD_TYPES} from "./action-types";

const initialState = {
   pokemons : [],
   types:[]
}
// pokemons = Arreglo de objetos. (id,name,types,attack,defense,image,speed,heigth,weigth)
// types = Arreglo de objetos (id,name);

export default function reducer(state = initialState, {type,payload}){
  switch(type){
    case ADD_POKEMONS:
      return{
      ...state,
      pokemons: payload
      }
    
    case ADD_TYPES:{
      return{
        ...state,
        types: payload
      }
    }

    default:
        return {
            ...state
        }
  }
}