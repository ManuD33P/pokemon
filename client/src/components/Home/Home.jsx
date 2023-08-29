import Cards from "../Cards/Cards";
import styled from "./home.module.css";
import SearchBar from "../SearchBar/SearchBar";
import Filters from "../Filters/Filters";
import BarPages from "../Pages/BarPages";

function Home() {
  


  return (
    <>
      <header className={styled.head}>
        <div className={styled.filter}>
          <SearchBar /> <Filters />
        </div>
        <div className={styled.Pages}>
          <BarPages />
        </div>
      </header>

      <main className={styled.containerMain}>
        <Cards className={styled.card}/>
      </main>

      <footer className={`${styled.Pages} ${styled.footer}`}>
          <BarPages />
        </footer>
 </>  );
}

export default Home;
