import {useDispatch} from "react-redux";
import {getTypes} from "../services/getPokemonsPage";
import { addTypes } from "../redux/action-types";

 function useAddTypes(){
    const dispatch = useDispatch();
    const executeAddTypes = async () => {
    
        try {
          const types = await getTypes();
          dispatch(addTypes(types));
          console.log('se ejecuto useaddTypes')

        } catch (error) {
          alert(error.message);
        }
      };
    
      return executeAddTypes; 
}



export default useAddTypes