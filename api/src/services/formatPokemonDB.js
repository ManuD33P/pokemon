function formartPokemonImagen(sprites) {
  return sprites.other["official-artwork"].front_default;
}

function formatPokemonBuilder(data) {
  try {
    const { id, name, sprites, height, stats, weight,types } = data;
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
    const newTypes = types.map(({type}) => type.name);

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
      newTypes
    };
  } catch (error) {
    return error;
  }
}

module.exports = {
  formatPokemonBuilder,
};
