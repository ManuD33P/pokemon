import { useDispatch } from "react-redux";
import {getPokemonName } from "../../redux/action-types";

function useSearchPokemon(){
  const dispatch  = useDispatch();

  const handleOnChange = (e) => {
    if(e.target.value){
      dispatch(getPokemonName(e.target.value))
    } 
  }
  
  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(getPokemonName(e.target.value))
    e.target.reset();    
  }



  return {
    handleOnChange,
    handleOnSubmit
  }
}

export default useSearchPokemon