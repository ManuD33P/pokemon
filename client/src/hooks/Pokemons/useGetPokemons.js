import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import useGetPage from "../../hooks/Pages/useGetPage";
import {getPokemonsPages} from "../../services/getPokemonsPage";
function useGetPokemons(){
    const [pokemons, setPokemons] = useState([]);
    
    const globalPokemons = useSelector(state => state.copyPokemons);
    const loading = useSelector(state => state.loading)
    const {page} = useGetPage();


   useEffect(()=>{
   
    const PagePokemon = getPokemonsPages(globalPokemons)
    if(page > PagePokemon.length)    
    setPokemons(PagePokemon[0]);
    else
    setPokemons(PagePokemon[page])


    },[globalPokemons,page])


  


    return {
        pokemons,
        loading
    }

}
export default useGetPokemons