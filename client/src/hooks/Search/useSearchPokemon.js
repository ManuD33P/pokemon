import { useEffect, useState } from "react"
import {getPokemonName } from "../../redux/action-types";
import axios from "axios"
import { POKEMON_BY_NAME } from "../../constantes/apiUrl";
import { useDispatch } from "react-redux";
function useSearchPokemon(){
  const [search,setSearch] = useState(null);
  const dispatch = useDispatch()

  const handleOnChange = (e) => {
    e.preventDefault()
    const value = e.target.value;
    if(value){
      setSearch(value)
    } else setSearch(null)
  }
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    e.target.reset();    
  }
  
  
  useEffect(()=>{
    const handleFilterDispatch = async()=>{
      if(search){
        dispatch(getPokemonName(search))
      } else {
        dispatch(getPokemonName(null))
      }
    }
    handleFilterDispatch()

  },[search,dispatch])

  return {
    handleOnChange,
    handleOnSubmit
  }
}

export default useSearchPokemon