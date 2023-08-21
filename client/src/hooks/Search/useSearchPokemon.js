import { useState } from "react"
// import {getPokemonName } from "../../redux/action-types";

function useSearchPokemon(){
  const [search,setSearch] = useState();


  const handleOnChange = (e) => {
    e.preventDefault()
    const value = e.target.value;
    if(value){
      setSearch(value)
    } else setSearch(null)
  }
  
  const handleOnSubmit = (e) => {
    e.target.reset();    
  }



  return {
    handleOnChange,
    handleOnSubmit
  }
}

export default useSearchPokemon