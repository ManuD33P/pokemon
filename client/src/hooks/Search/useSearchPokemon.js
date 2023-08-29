import { useEffect, useState } from "react"
import {getPokemonName } from "../../redux/action-types";
import { useDispatch } from "react-redux";
function useSearchPokemon(){
  const [search,setSearch] = useState(null);
  const dispatch = useDispatch()

  const handleOnChange =  (e) => {
    e.preventDefault()

    const value =  e.target.value;
    console.log('este es el valor de value',value)
    if(value){
       setSearch(value)
      return
    }
     setSearch(null)
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