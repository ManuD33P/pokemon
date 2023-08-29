import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import useGetPage from "../../hooks/Pages/useGetPage";
import {getPokemonsPages} from "../../services/getPokemonsPage";
function useGetPokemons(){
    const [pokemons, setPokemons] = useState([]);
    
    const globalPokemons = useSelector(state => state.copyPokemons);
    const loading = useSelector(state => state.loading)
    const retry = useSelector(state => state.retry)
    const {ultimateUpdatePage} = useGetPage();


   useEffect(()=>{
   
    const PagePokemon = getPokemonsPages(globalPokemons)
    if(ultimateUpdatePage > PagePokemon.length)    
    setPokemons(PagePokemon[0]);
    else
    setPokemons(PagePokemon[ultimateUpdatePage])


    },[globalPokemons,ultimateUpdatePage])


  


    return {
        pokemons,
        loading,
        retry
    }

}
export default useGetPokemons