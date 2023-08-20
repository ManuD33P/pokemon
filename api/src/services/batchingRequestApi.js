const { httpRequest } = require("./httpRequest");
const  {formatPokemonBuilder} = require('./formatPokemonDB')



async function bachingRequestApi(Urls){

 const UrlGroups = []; 
 const batchSize = 20;

 for(let i=0; i < Urls.length; i += batchSize){
  UrlGroups.push(Urls.slice(i,i+batchSize).map(pokemon => pokemon.url))
 }

  

 const allFormattedPokemons = [];

 for(const group of UrlGroups){
    const groupResponse = await Promise.all(group.map(url => httpRequest(url))) 
    const groupFormattedPokemons = await Promise.all(groupResponse.map(data => formatPokemonBuilder(data)))
    allFormattedPokemons.push(...groupFormattedPokemons) 
 }

 return allFormattedPokemons
}


module.exports = bachingRequestApi