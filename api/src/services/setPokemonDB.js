const { Pokemon, Type } = require("../db");

async function setPokemon(pokemon,typeId) {
  try {
    const newPokemon = await Pokemon.create(pokemon);
    const newType  = await Promise.all(typeId.map( async (id) => await Type.findByPk(id)));
    
    newType.forEach(async (type)=>{
      await newPokemon.addType(type);
    });
    
    return newPokemon;
  } catch (error) {
    return error;
  }
}

async function setPokemonAll(pokemonArray) {
  try {
    const newPokemons = await Pokemon.bulkCreate(pokemonArray);
    return newPokemons;
  } catch (error) {
    return error;
  }
}

async function setPokemonType(pokeType) {
  try {
    let typesCount = await Type.count();

    if (typesCount > 0) {
      const holdPokeTypes = await Type.findAll();
      return holdPokeTypes;
    }

    const newPokeTypes = await Type.bulkCreate(pokeType);

    return newPokeTypes;
  } catch (error) {
    return error;
  }
}

module.exports = {
  setPokemon,
  setPokemonAll,
  setPokemonType,
};
