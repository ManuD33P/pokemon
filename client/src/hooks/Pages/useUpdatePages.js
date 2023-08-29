import { useDispatch } from "react-redux";
import { changePage } from "../../redux/action-types";
import { useEffect, useState } from "react";


function useUpdatePages(){
    const dispatch = useDispatch();
    const [currentPage,setCurrentPage] = useState(null);

    const handleChangePage = (value) => setCurrentPage(value)

    useEffect(()=>{
        if(currentPage !== null)
        dispatch(changePage(currentPage))
    },[currentPage,dispatch])


    return handleChangePage
}


export default useUpdatePages