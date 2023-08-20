import { ALL_POKEMON_AND_CREATE } from "../../constantes/apiUrl";
import { addPokemons } from "../../redux/action-types";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../services/getPokemonsPage"

function useAddPokemons() {
  const dispatch = useDispatch();
  const executeAddPokemons = async () => {
    try {
      const  pokemons = await getPokemons(ALL_POKEMON_AND_CREATE);
      dispatch(addPokemons(pokemons));

    } catch (error) {
      alert(error.message);
    }
  };
  return executeAddPokemons;
}

export default useAddPokemons;
