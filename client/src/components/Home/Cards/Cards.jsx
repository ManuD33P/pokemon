import { useEffect,useState } from "react"
import Card from "./Card/Card"
import Loading from "../../Loading/Loading"
import axios from "axios"
import styled from "./cards.module.css"

function Cards(){
const [pokemons, setPokemons] = useState([]);

useEffect(()=>{
   axios('http://localhost:3001/pokemons')
   .then(response => response.data)
   .then(data => setPokemons(data))
   
},[])


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