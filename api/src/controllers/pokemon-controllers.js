const { httpRequest } = require("../services/httpRequest");
const {
  URL_API_NAME_AND_ID,
  URL_API_TYPE,
} = require("../constantes/index");
const { setPokemon, setPokemonType } = require("../services/setPokemonDB");
const {
  getPokemonByIdDB,
  getPokemonAllDB,
  getPokemonByNameDB,
} = require("../services/getPokemonDB");
const { formatPokemonBuilder } = require("../services/formatPokemonDB");
const builderTypes = require("../services/BuilderTypes");
const getPokemonApi = require("../services/getPokemonApi");


/* funciones de rutas que controlan todo lo referido a los pokemons, y sus tipos,
   en esta se utilizan algunos servicios que ayudan al formateado de los obj para el front,
   como tambien busquedad, y solicitudes a la api y base de datos. Estas pueden ser
   revisadas desde la carpeta  services ==> api/src/services
*/
async function getPokemon(req, res) {
  try {
    let params;
    let data  
    if (req.params.hasOwnProperty("id")){
      params = req.params.id
      data = await httpRequest(`${URL_API_NAME_AND_ID}${params}`);
      if(data?.message){
        data = await getPokemonByIdDB(params);
        return res.status(200).json(data)
      } 
    } 
      
    if (req.query.hasOwnProperty("name")){
      params = req.query.name;
      data = await httpRequest(`${URL_API_NAME_AND_ID}${params}`);
      if(data?.message) {
        data = await getPokemonByNameDB(params)
        return res.status(200).json(data)
      }
    } 
  
    if(data?.message) throw Error({"message": "Pokemon not found"});
    const pokemon = formatPokemonBuilder(data);
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(404).json(error.message);
  }
}

async function getAllPokemon(req, res) {
  try {
    const data = await getPokemonApi();
    const pokemons = await Promise.all(
      data.map(async (pokemon) => {
        const data = await httpRequest(pokemon.url);
        console.log(data)
        const newData = await formatPokemonBuilder(data);
        return newData;
      })
    );

    const pokemonsDB = await getPokemonAllDB();
    const allPokemons = [...pokemons, ...pokemonsDB];

    res.status(200).json(allPokemons);
  } catch (error) {
    res.status(404).json(error.message);
  }
}

async function createPokemon(req, res) {
  try {
    const { pokemon,type } = req.body;
    const response = await setPokemon(pokemon,type.id);
    if(response?.message) throw Error(response.message);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json(error.message);
  }
}

async function typesPokemon(req, res) {
  try {
    const data = await httpRequest(URL_API_TYPE);
    if (data?.message) throw Error(data.message);
    const newData = builderTypes(data.results);
    const newTypes = await setPokemonType(newData);
    res.status(200).json(newTypes);
  } catch (error) {
    res.status(404).json(error.message);
  }
}

module.exports = {
  getAllPokemon,
  getPokemon,
  typesPokemon,
  createPokemon,
};
