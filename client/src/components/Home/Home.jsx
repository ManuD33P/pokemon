import Cards from "./Cards/Cards"
import Navbar from "./Navbar/Navbar"
import styled from "./home.module.css"
import SearchBar from "./SearchBar/SearchBar"
import Filters from "./Filters/Filters"
function Home (){


    return (
        <>
        <header className={styled.head}>
        <Navbar className={styled.nav}/>
        <div className={styled.filter}>
        <SearchBar /> <Filters />
        </div>
        </header>

        <main className={styled.containerMain}>
        
        <Cards className={styled.card}/>
        </main>
        </>
        
    )
}


export default Home