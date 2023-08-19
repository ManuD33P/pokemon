
import Card from "./Card/Card"
import Loading from "../../Loading/Loading"
import styled from "./cards.module.css"
import useGetPokemons from "../../../hooks/useGetPokemons"


function Cards(){

const pokemons = useGetPokemons()

    return (
        <section className={styled.cardsContainer}>
        {
           pokemons.length ? pokemons.map((pokemon)=>{
               return (

                <Card key={pokemon.id} props={pokemon}/>
               ) 
            }) : <Loading className={styled.loading}/>
        }
        
        </section>
    )
}


export default Cards