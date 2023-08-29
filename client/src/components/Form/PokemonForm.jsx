import styled from "./pokemonform.module.css";
import useGetTypes from "../../hooks/Types/useGetTypes";
import useForm from "../../hooks/FormPokemon/useForm";

function PokemonForm() {

   const types = useGetTypes()
   const {errors = {
    name: null,
    hp:null,
    attack:null,
    defense:null,
    speed:null,
    heigth:null,
    weitgh:null,
    image:null
   },handleInputChange,handleOnSubmit,handleCloseTypes,type} = useForm();

    return (
    <main className={styled.containerPage}>
        <header className={styled.containerTitle}>
            <h1> Create your Pokemon</h1>
        </header>
        
        <form onSubmit={(e)=> handleOnSubmit(e)} className={styled.containerForm}>
            <div className={styled.erros}>
            <input onChange={(e)=> handleInputChange(e)} type="text" name="name" placeholder="Pokemon Name" required/>
            {errors.name  && Array.isArray(errors.name) && errors.name.map(error => (<p>{error}</p>))}
            </div>
            <div className={styled.erros}>
            <input onChange={(e)=> handleInputChange(e)} type="number" name="hp" placeholder="Pokemon HP" />
            {errors.hp && Array.isArray(errors.hp) && errors.hp.map(error => (<p>{error}</p>))}

            </div>
            <div className={styled.erros} >
            <input onChange={(e)=> handleInputChange(e)} type="number" name="attack" placeholder="Pokemon Attack" />
            {errors.attack && Array.isArray(errors.attack) && errors.attack.map(error => (<p>{error}</p>))}

            </div>
            <div className={styled.erros} >
            <input onChange={(e)=> handleInputChange(e)} type="number" name="defense" placeholder="Pokemon Defense" />
            {errors.defense  && Array.isArray(errors.defense) && errors.defense.map(error => (<p>{error}</p>))}
            </div>
            <div className={styled.erros}>
            <input onChange={(e)=> handleInputChange(e)} type="number" name="speed" placeholder="Pokemon Speed" />
            {errors.speed  && Array.isArray(errors.speed) && errors.speed.map(error => (<p>{error}</p>))}
            </div>
            <div className={styled.erros} >
            <input onChange={(e)=> handleInputChange(e)} type="number" name="heigth" placeholder="Pokemon Heigth" />
            {errors.heigth  &&Array.isArray(errors.heigth) &&  errors.heigth.map(error => (<p>{error}</p>))}

            </div>
            <div className={styled.erros} >
            
            <input onChange={(e)=> handleInputChange(e)} type="number" name="weitgh" placeholder="Pokemon Weitgh" />
            {errors.weitgh  &&Array.isArray(errors.weitgh) &&  errors.weitgh.map(error => (<p>{error}</p>))}

            </div> 
            <div className={styled.erros} >

            <input onChange={(e)=> handleInputChange(e)} type="url" name="image" placeholder="Pokemon Image" />
            {errors.image  && Array.isArray(errors.image) && errors.image.map(error => (<p>{error}</p>))}
            </div>
            <div className={styled.erros}>
            <select  onChange={(e)=> handleInputChange(e)} className={styled.containerSelect} name="type">
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
            <div className={styled.containerSelectTypes}>
            { type && Array.isArray(type) && type.map((id) => {
                return (
                    <button key={types[id-1].name} value={id} onClick={(e)=> handleCloseTypes(e)} className={styled.types}>
                        {types[id-1].name}
                    </button>    )                
                })}
            </div>
            {errors.type  && Array.isArray(errors.type) && errors.type.map(error => (<p>{error}</p>))}
            </div>
            <div>
            <button type="submit">Create Pokemon</button>
            <button type="reset">Reset form</button>
            </div>
        </form>
    </main>
  );
}

export default PokemonForm;
