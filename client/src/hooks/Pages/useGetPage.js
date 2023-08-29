// import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
//useDispatch 


function useGetPage() {
  // const dispatch = useDispatch()

  // dispatch(action-type(valor))
  const ultimateUpdatePage = useSelector(state => state.page) 
  const pokemonLength = useSelector(state => state.pokemonLength)





 return  {ultimateUpdatePage,pokemonLength}

    
}


export default useGetPage