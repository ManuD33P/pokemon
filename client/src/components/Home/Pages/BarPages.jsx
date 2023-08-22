import useGetPage from "../../../hooks/Pages/useGetPage"
import useUpdatePages from "../../../hooks/Pages/useUpdatePages";



function BarPages(){
    const {pokemonLength} = useGetPage();
    const handleChangePage = useUpdatePages();
    const countPages = Math.floor(pokemonLength / 12)
   
    return (
        <>
                <aside>
            {
             pokemonLength && Array.from({length:countPages+1}).map((_,index)=> 

                 <button key={index} name={index} onClick={(e) => handleChangePage(e.target.name)}>
                  {index}
                 </button>
              )

            }
            {console.log(countPages)}
            </aside>
        </>
    )
}


export default BarPages