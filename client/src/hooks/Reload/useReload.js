import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAddPokemons from "../Pokemons/useAddPokemons";
import useAddTypes from "../Types/useAddTypes";
import { loadingChange, retryLoading } from "../../redux/action-types";

function useReload() {
  const loading = useSelector((state) => state.loading);
  const retry = useSelector((state) => state.retry);
  const pokemonLength = useSelector((state) => state.pokemonLength);
  const dispatch = useDispatch();
  const {executeAddPokemons} = useAddPokemons();
  const executeAddTypes = useAddTypes();

  const handleReload = () => {
    if (!loading && retry) {
      executeAddPokemons();
      executeAddTypes();
      dispatch(loadingChange(true));
    }
  };

  useEffect(() => {
    let timeoutId;
    if (loading && !retry)
      timeoutId = setTimeout(() => {
        if (!pokemonLength) dispatch(retryLoading(true));
      }, [6000]);

      return () => {
        clearTimeout(timeoutId); 
      };

    }, [loading, retry, pokemonLength, dispatch]);
  

  return handleReload;
}

export default useReload;
