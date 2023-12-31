import { useState,useEffect } from "react";
import { useSelector } from "react-redux";

function useGetTypes(){
    const [types, setTypes] = useState([]);
    const globalTypes = useSelector(state => state.types);
   useEffect(()=>{
        setTypes(globalTypes);
    },[globalTypes])



    return types
}


export default useGetTypes