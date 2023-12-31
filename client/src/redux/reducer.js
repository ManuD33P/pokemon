import {ADD_POKEMON,ADD_POKEMONS,ADD_TYPES,RETRY_LOADING_POKEMON, GET_POKEMON_NAME,FILTER_POKEMONS,CHANGE_PAGE, LOADING_CHANGE} from "./action-types";

const initialState = {
   pokemons : [],
   copyPokemons:[],
   pokemonLength:0,
   types:[],
   loading:true,
   retry:false,
   page:0
}
// pokemons = Arreglo de objetos. (id,name,types,attack,defense,image,speed,heigth,weigth)
// types = Arreglo de objetos (id,name);

export default function reducer(state = initialState, {type,payload}){
  switch(type){
    case ADD_POKEMONS:
       let retry = false;

     if(!payload?.length) retry = true;  
      return{
      ...state,
      pokemons: payload,
      copyPokemons:payload,
      pokemonLength:payload.length,
      loading:false,
      retry:retry
      }
    case ADD_POKEMON:
      const newPokemons = [...state.pokemons,payload];
     return {
      ...state,
      pokemons:newPokemons
     }
    case ADD_TYPES:{
      return{
        ...state,
        types: payload
      }
    }
    case RETRY_LOADING_POKEMON:{
      return {...state ,retry:payload,loading:false};
    }

    case LOADING_CHANGE:{
      return {...state, retry:false,loading:true}
    }

    case GET_POKEMON_NAME:{
      let pokemon;
      if(!payload.data?.message){
        return {
          ...state,
          copyPokemons:[...payload.data]
        }
      }
      else if(!payload.search) pokemon = state.pokemons

      else
        pokemon = state.pokemons.filter(pokemon => pokemon.name.includes(payload.search.trim()))
      return {
        ...state,
        copyPokemons:pokemon,
        pokemonLength:pokemon.length
      }
    }

    case FILTER_POKEMONS:{
      let pokemons = [...state.pokemons];
      const {type,origin,orderAlf,orderStatAttack} = payload
       if(pokemons){
         if(type === "all") 
          pokemons = [...state.pokemons]; 
         else 
          pokemons = state.pokemons.filter((pokemon)=> pokemon.types.some(({id}) => id === parseInt(type)))
         if(origin === "1")
          pokemons = pokemons.filter((pokemon) => !pokemon.hasOwnProperty("custom"))
         else if(origin === "2")
         pokemons=  pokemons.filter((pokemon)=> pokemon.hasOwnProperty("custom"))
         if(orderAlf === "1")
         pokemons.sort((a,b) => a.name.localeCompare(b.name))
         else if(orderAlf === "2")
          pokemons.sort((a,b) => b.name.localeCompare(a.name))
         if(orderStatAttack === "1")
         pokemons.sort((a,b)=> a.attack-b.attack);
        else if(orderStatAttack ==="2")
         pokemons.sort((a,b) => b.attack-a.attack);
       }
       
      return {
        ...state,
        copyPokemons : pokemons,
        pokemonLength:pokemons.length

      }
    }
    case CHANGE_PAGE:{
      return{
        ...state,
        page:parseInt(payload)
      }
    }
    default:
        return {
            ...state
        }
  }
}