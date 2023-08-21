import Cards from "./Cards/Cards";
import Navbar from "./Navbar/Navbar";
import styled from "./home.module.css";
import SearchBar from "./SearchBar/SearchBar";
import Filters from "./Filters/Filters";
import useGetTypes from "../../hooks/Types/useGetTypes";
function Home() {
  const types = useGetTypes();


  return (
    <>
      <header className={styled.head}>
        <Navbar className={styled.nav} />
        <div className={styled.filter}>
          <SearchBar /> <Filters types={types} />
        </div>
      </header>

      <main className={styled.containerMain}>
        <Cards className={styled.card}/>
      </main>
 </>  );
}

export default Home;
