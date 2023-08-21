import {ADD_POKEMONS,ADD_TYPES, GET_POKEMON_NAME,FILTER_POKEMONS} from "./action-types";

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
      if(payload)
        pokemon = state.pokemons.filter(pokemon => pokemon.name.includes(payload.trim()))
      else
        pokemon = state.pokemons
      return {
        ...state,
        copyPokemons:pokemon
      }
    }

    case FILTER_POKEMONS:{
      let pokemons = [...state.pokemons];
      const {type,origin,orderAlf,orderStatAttack} = payload
      console.log(type,origin,orderAlf,orderStatAttack)
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
        copyPokemons : pokemons
      }
    }

    default:
        return {
            ...state
        }
  }
}