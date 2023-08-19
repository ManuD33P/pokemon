const { Pokemon,Type } = require("../db");

async function getPokemonAllDB() {
  try {
    const pokemons = await Pokemon.findAll({
      include:[
        {
          model:Type,
          attributes:["name","id"],
          through: { attributes: [] }
        }
      ]
    }); 
    
    return pokemons.map((pokemon) => pokemon.toJSON());
  } catch (error) {
    return error
  }
  
}
async function getPokemonByIdDB(id) {
  try {

     const data =  await Pokemon.findByPk(id)
     if(data?.message) throw Error(data);
  
     return data
  } catch (error) {
    return error
  }

}

async function getPokemonByNameDB(name) {
  try {
    const pokemon = await Pokemon.findAll({
      where: {
        name: name,
      },
    });
    if(pokemon?.message) throw Error(data);
     return pokemon
  } catch (error) {
    return error
  }
  

}

module.exports = {
  getPokemonAllDB,
  getPokemonByIdDB,
  getPokemonByNameDB,
};
