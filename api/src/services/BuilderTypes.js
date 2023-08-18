function builderTypes(types) {
  const newTypes = types.map((type) => {
    return {
      name: type.name,
    };
  });
  return newTypes;
}

module.exports = builderTypes;
