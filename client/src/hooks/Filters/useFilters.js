import {useState, useEffect} from "react" 
import { useDispatch } from "react-redux";
import { filterPokemons } from "../../redux/action-types"

function useFilters(){

const dispatch = useDispatch();



const [filters,setFilters] = useState({
    type:"all",
    origin:"all",
    orderAlf:null,
    orderStatAttack:null
});
//orderAlf  1- [a-z] 2- [z-a]
//orderStatAttack  1-Menor a Mayor 2- Mayor a menor
//origin 1- original api, 2- custom DB
//type all , *- id en el estado global types.

useEffect(()=>{
    dispatch(filterPokemons(filters))
},[filters,dispatch])
const handleFilter = (e) => {
     const prop = e.target.name;
     const value = e.target.value;
    setFilters({...filters, [prop]:value});
}   


return handleFilter

}


export default useFilters