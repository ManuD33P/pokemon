import { useState,useEffect } from "react";
import { useSelector } from "react-redux";

function useGetPokemons(){
    const [pokemons, setPokemons] = useState([]);
    
    const globalPokemons = useSelector(state => state.copyPokemons);
    
   useEffect(()=>{
    setPokemons(globalPokemons);
    },[globalPokemons])


  


    return pokemons

}
export default useGetPokemons