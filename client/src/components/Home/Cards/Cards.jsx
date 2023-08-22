
import Card from "./Card/Card"
import Loading from "../../Loading/Loading"
import styled from "./cards.module.css"
import useGetPokemons from "../../../hooks/Pokemons/useGetPokemons"

function Cards(){

const {pokemons,loading} = useGetPokemons()

    return (
        <section className={styled.cardsContainer}>
        {
         loading ? <Loading className={styled.loading}/> :  Array.isArray(pokemons) ? pokemons.map((pokemon)=>{
               return (

                <Card key={pokemon.id} props={pokemon}/>
               ) 
            }) : <p>Pokemon not found</p>
        }
        
        </section>
    )
}


export default Cards