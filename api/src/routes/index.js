const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getAllPokemon,getPokemon,createPokemon,typesPokemon} = require('../controllers/pokemon-controllers')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/pokemons',getAllPokemon)
router.get('/pokemons/name',getPokemon)
router.get('/pokemons/:id',getPokemon)
router.post('/pokemons',createPokemon)
router.get('/types',typesPokemon)


module.exports = router;
