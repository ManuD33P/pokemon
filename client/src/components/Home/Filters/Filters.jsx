import styled from "./filter.module.css"
import useGetTypes from "../../../hooks/useGetTypes"
function Filters(){

const types = useGetTypes()
    return (
        <>
            <div className={styled.containerFilter}>
            <select className={styled.containerSelect} value={0} name="pokemon types">
                <option value={0} >All types</option>
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

            <select className={styled.containerSelect} value="allPokemon" name="pokemon">
                    <option value="allPokemon" >All Pokemons</option>
                    <option value="originalPokemon">Original Pokemons</option>
                    <option value="customPokemon">Custom Pokemons</option>
            </select>

            <select className={styled.containerSelect} value="1" name="Order Name">
                    <option value="1" >A-Z</option>
                    <option value="2">Z-A</option>
            </select>

            <select className={styled.containerSelect} value="1" name="Order Attack">
                <option value="1" >Highest Attack</option>
                <option value="2">Lowest Attack</option>
            </select>

            </div>
        
        </>
    )
}


export default Filters