import axios from "axios";
import { ALL_POKEMON_AND_CREATE } from "../constantes/apiUrl";
import { addPokemons } from "../redux/action-types";
import { useDispatch } from "react-redux";
function useAddPokemons() {
  const dispatch = useDispatch();
  const executeAddPokemons = async () => {
    try {
      const { data } = await axios(ALL_POKEMON_AND_CREATE);
      dispatch(addPokemons(data));
    } catch (error) {
      return alert(error.message);
    }
  };
  return executeAddPokemons;
}

export default useAddPokemons;
