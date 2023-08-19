import styled from "./ladingpage.module.css"
import { Link } from "react-router-dom"
import useAddTypes from "../../hooks/useAddTypes"
import useAddPokemons from "../../hooks/useAddPokemons";
import { useEffect } from "react";
function LadingPage(){
    const executeTypes = useAddTypes(); // agrego al estado global los types
    const executePokemons = useAddPokemons(); // agrego al estado global los pokemons
  
useEffect(()=>{
    executeTypes() 
    executePokemons()
    
},[executePokemons,executeTypes])
   
        
    return (<>
            
            <main className={styled.container}>
                <section>
                    <button ><Link to='/home'>Start</Link></button>
                </section>
            </main>
    </>)
}



export default LadingPage