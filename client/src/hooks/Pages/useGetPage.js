import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


function useGetPage() {
  const [page,setPage] = useState(1);
  const ultimateUpdatePage = useSelector(state => state.page)
  const pokemonLength = useSelector(state => state.pokemonLength)


 useEffect(()=>{
    setPage(ultimateUpdatePage)
 },[ultimateUpdatePage]);




 return  {page,pokemonLength}

    
}


export default useGetPage