import {useEffect, useState} from "react" 
import { useDispatch } from "react-redux";


function useFilters(){
const [filters,setFilters] = useState({
    type:"allTypes",
    origin:"allPokemons",
    orderAlf:null,
    orderStatAttack:1
});
const dispatch  = useDispatch();

const handleFilter = (e) => {
    const prop = e.event.target.name;
    const value = e.event.target.value;
    setFilters({...filters, [prop]:value});
}   

useEffect(() =>{

},[filters])

return handleFilter
}


export default useFilters