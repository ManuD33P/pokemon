import useGetPage from "../../hooks/Pages/useGetPage"
import useUpdatePages from "../../hooks/Pages/useUpdatePages";
import styled from "./barpages.module.css";


function BarPages(){
    const {ultimateUpdatePage,pokemonLength} = useGetPage();
    const handleChangePage = useUpdatePages();
    const countPages = Math.ceil(pokemonLength / 12)
    const pages = Array.from({length:countPages})
    return (
        <>
                <aside className={styled.containerPages}>
            {
             pokemonLength ? pages.map((_,index)=> {
               return index === ultimateUpdatePage ?  (<button className={styled.containerButtonSelect} key={index} name={index} onClick={(e) => handleChangePage(e.target.name)}>
                {index+1}
               </button> )
                 :  (<button className={styled.containerButton} key={index} name={index} onClick={(e) => handleChangePage(e.target.name)}>
                      {index+1}
                     </button>)

            })
                   : null

            }
            
            </aside>
        </>
    )
}


export default BarPages