
const {URL_API_ALL} = require ("../constantes/index");
const {httpRequest} = require('./httpRequest')

// async function getPokemonApi(next=URL_API_ALL,count=0){
//     let pokemons = [];
//     if(count < 20){
//         count++
//         let data = await httpRequest(next)
//         const newNext = data.next
//         pokemons =  [...data.results, ...(await getPokemonApi(newNext,count))]
//     } 
//         return pokemons
// }

async function getPokemonApi(pages=10){
    let pokemons = [];
    let next = URL_API_ALL;
    try {
        for(let i =0; i < pages; i++){
             let data = await httpRequest(next);
             if(data?.message) break;
             next = data.next;
             pokemons = [...pokemons, ...data.results];
          }

          return pokemons;

    } catch (error) {
        return error
    }

}


module.exports = getPokemonApi