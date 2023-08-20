
const {URL_API_ALL} = require ("../constantes/index");
const {httpRequest} = require('./httpRequest')

async function getPokemonApi(next=URL_API_ALL,count=0){
    let pokemons = [];
    if(count < 10){
        count++
        let data = await httpRequest(next)
        const newNext = data.next
        pokemons =  [...data.results, ...(await getPokemonApi(newNext,count))]
    } 
        return pokemons
}

//
// const dataUrlPokemon  = await getPokemonApi();
module.exports = getPokemonApi