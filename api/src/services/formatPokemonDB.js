function formartPokemonImagen(sprites) {
  return sprites.other["official-artwork"].front_default;
}

function formatPokemonBuilder(data) {
  try {
    //https://pokeapi.co/api/v2/type/1/
    const regex = /type\/(\d+)\//
    const { id, name, sprites, height, stats, weight,types} = data;
    const image = formartPokemonImagen(sprites);
    const hp = stats.find((pokemon) => pokemon.stat.name === "hp")?.base_stat;
    const attack =
      stats.find((pokemon) => pokemon.stat.name === "attack")?.base_stat ??
      "unknown";
    const defense =
      stats.find((pokemon) => pokemon.stat.name === "defense")?.base_stat ??
      "unknown";
    const speed =
      stats.find((pokemon) => pokemon.stat.name === "speed")?.base_stat ??
      "unknown"; 
    const newTypes = types.map(({type}) => {
       const id = type.url.match(regex)[1]
        return {
          id : parseInt(id),
          name : type.name
        }
    } );

    return {
      id,
      name,
      height,
      weight,
      hp,
      image,
      attack,
      defense,
      speed,
      types:newTypes
    };
  } catch (error) {
    return error;
  }
}

module.exports = {
  formatPokemonBuilder,
};
