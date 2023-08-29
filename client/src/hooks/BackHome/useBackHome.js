import { useNavigate } from "react-router-dom";


function useBackHome(){
 const navigate = useNavigate();


 const handleClick = () =>{
     navigate("/home");
 }


 return handleClick
}



export default useBackHome