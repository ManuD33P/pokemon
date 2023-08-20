
import Card from "./Card/Card"
import Loading from "../../Loading/Loading"
import styled from "./cards.module.css"


function Cards({pokemons}){


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