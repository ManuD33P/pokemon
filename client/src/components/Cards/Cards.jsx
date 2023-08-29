
import Card from "./Card/Card"
import Loading from "../Loading/Loading"
import styled from "./cards.module.css"
import useGetPokemons from "../../hooks/Pokemons/useGetPokemons"
import Retry from "../RetryButton/Retry";
import useReload from "../../hooks/Reload/useReload";


function Cards(){

const {pokemons,loading,retry} = useGetPokemons()
 useReload();
 
    return (
        <section className={styled.cardsContainer}>
        {
         loading ? <Loading className={styled.loading}/> : retry ? <Retry/> :  Array.isArray(pokemons) ? pokemons.length && pokemons.map((pokemon)=>{
               return (

                <Card key={pokemon.id} props={pokemon}/>
               ) 
            }) : <p>Pokemon not found</p>
        }
        
        </section>
    )
}


export default Cards