import styled from "./filter.module.css"
import useFilters from "../../hooks/Filters/useFilters"
import useGetTypes from "../../hooks/Types/useGetTypes";

function Filters(){
 const types = useGetTypes();
 const handleFilter = useFilters();

    return (
        <>
            <div className={styled.containerFilter}>
            <select onChange={handleFilter} className={styled.containerSelect} name="type">
                <option value="all">All types</option>
                 {
                   types.length && types.map((type)=>{
                    return (
                        <option key={type.id} value={type.id}>
                            {type.name}
                        </option>
                    )
                   })
                 }
            </select>

            <select onChange={handleFilter} className={styled.containerSelect} name="origin">
                    <option value="all">All Pokemons</option>
                    <option value="1">Original Pokemons</option>
                    <option value="2">Custom Pokemons</option>
            </select>

            <select onChange={handleFilter} className={styled.containerSelect} name="orderAlf">
                    <option value="1">A-Z</option>
                    <option value="2">Z-A</option>
            </select>

            <select onChange={handleFilter} className={styled.containerSelect} name="orderStatAttack">
                <option value="1">Highest Attack</option>
                <option value="2">Lowest Attack</option>
            </select>

            </div>
        
        </>
    )
}


export default Filters