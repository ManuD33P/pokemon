import styled from "./ladingpage.module.css"
import { Link } from "react-router-dom"
import useAddTypes from "../../hooks/Types/useAddTypes"
import useAddPokemons from "../../hooks/Pokemons/useAddPokemons";
import { useEffect } from "react";
function LadingPage(){
    const executeTypes = useAddTypes(); // agrego al estado global los types
    const {executeAddPokemons} = useAddPokemons(); // agrego al estado global los pokemons
  
useEffect(()=>{
    executeTypes() 
    executeAddPokemons()
    
},[executeAddPokemons,executeTypes])
   
        
    return (<>
            
            <main className={styled.container}>
                <section>
                    <button ><Link to='/home'>Start</Link></button>
                    
                </section>
            </main>
    </>)
}



export default LadingPage