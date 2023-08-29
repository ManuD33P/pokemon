import {useEffect, useState} from "react";
import validation from "./validation";
import axios from "axios"
import useAddPokemons from "../Pokemons/useAddPokemons";
import {ALL_POKEMON_AND_CREATE} from "../../constantes/apiUrl"

function useForm(){
const [inputs,setInputs] = useState({});
const [errors,setErrors] = useState({
    name : null,
    attack:null,
    defense:null,
    speed:null,
    image:null,
    heigth:null,
    weitgh:null
    
});

const {executeAddPokemon} = useAddPokemons();

const handleInputChange = (e) => {
    const {name,value} = e.target
    if(name==='type') 
    if(inputs.hasOwnProperty("type")){
        setInputs({...inputs,[name]:[...inputs.type,value]})
    }
    else{
        setInputs({...inputs, [name]: [value]});
    }
    else
    setInputs({...inputs, [name]: value});

    console.log(inputs)
}

const handleCloseTypes = (e) => {
    const {value} = e.target
    const newTypes = inputs.type.filter((id)=> id !== value);
     setInputs({...inputs,type:newTypes})
}

const handleOnSubmit =  async (e) => {
    e.preventDefault();
    console.log(errors)
     if(!errors?.name){
        console.log('entro al if')
         const newPokemonCustom = {
            pokemon:{
                name:inputs.name,
                hp:Number(inputs.hp),
                image: inputs.image,
                attack:Number(inputs.attack),
                defense:Number(inputs.defense),
                speed:Number(inputs.speed),
                height:Number(inputs.heigth),
                weight:Number(inputs.weitgh)
            },
            type:{
                id: inputs.type
            }
         }
         try {     
             const ResponsePokemons  = await axios.post(ALL_POKEMON_AND_CREATE,newPokemonCustom)
             executeAddPokemon(ResponsePokemons.data)
            } catch (error) {
            alert('an unexpected error has occurred')
            console.log(error.message)
         }
     }
}

useEffect(()=>{
   if(inputs)
        setErrors(validation(inputs))
},[inputs])


return {
    handleInputChange,
    errors,
    handleOnSubmit,
    type: inputs.type,
    handleCloseTypes
}

}

export default useForm;