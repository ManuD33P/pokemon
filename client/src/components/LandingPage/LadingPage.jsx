import styled from "./ladingpage.module.css"
import { Link } from "react-router-dom"
import useAddTypes from "../../hooks/useAddTypes"
import useAddPokemons from "../../hooks/useAddPokemons";
function LadingPage(){
    const executeTypes = useAddTypes(); // agrego al estado global los types
    const executePokemons = useAddPokemons(); // agrego al estado global los pokemons

    const handleClick = () =>{
        executeTypes()
        executePokemons()
    }
        
    return (<>
            
            <main className={styled.container}>
                <section>
                    <button onClick={handleClick}><Link to='/home'>Start</Link></button>
                </section>
            </main>
    </>)
}



export default LadingPage