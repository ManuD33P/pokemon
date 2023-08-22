// import { useEffect, useState } from "react"
// import { useSelector } from "react-redux";



// function usePages(){
 
//  const [countGroupPokemon,setGroupPokemon] = useState(); 
//  const [pages,setPages] = useState([]);
//   const pokemonLength = useSelector(state => state.pokemonLength) 
//   console.log(countGroupPokemon)
//   console.log(pokemonLength)
//   const createPage = () => {
//      let pagesValue = [];
//     for(let i =0 ; i<countGroupPokemon;i++){
//             pagesValue.push({"id":i})
//         }
//     return pagesValue
//   }

//   useEffect(()=>{
//     setGroupPokemon((Math.ceil(pokemonLength/12)))
//   },[pokemonLength])

//   useEffect(()=>{
//     const value = createPage();
//     setPages(value)
//   },[pokemonLength])

//     return { pages , countGroupPokemon}
// }
  


// export default usePages