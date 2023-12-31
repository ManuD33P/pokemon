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
     const data =  await Pokemon.findByPk(id,{
      include:[
        {
          model:Type,
          attributes:["name","id"],
          through: { attributes: [] }
        }
      ]
     })
     console.log(data)
     if(!data) 
     throw Error('pokemon not found')  
    else  return data
  
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
      include:[
        {
          model:Type,
          attributes:["name","id"],
          through: { attributes: [] }
        }
      ]
    });
     if(pokemon.length){ 
       return pokemon

     } 
    else throw Error('pokemon not found')
  } catch (error) {
    return error
  }
  

}

module.exports = {
  getPokemonAllDB,
  getPokemonByIdDB,
  getPokemonByNameDB,
};
