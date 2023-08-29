import { Routes, Route, useLocation} from 'react-router-dom';
import LandingPage from './components/LandingPage/LadingPage';
import Detail from './components/Detail/Detail'
import Home from "./components/Home/Home"
import PokemonForm from "./components/Form/PokemonForm";
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  const {pathname} = useLocation();
  console.log(pathname)
  return (
    <div className="App">
      {pathname !== "/" && <Navbar/>}
    <Routes>
    <Route 
    path='/'
    element={<LandingPage/>}
    />
    <Route
    path='/home'
    element={<Home/>}
    />
     <Route
      path='/pokemon/create'
      element={<PokemonForm />}
     />

     <Route
      path='/pokemon/detail/:id'
      element={<Detail />}
      />
    </Routes>
    </div>
  );
}

export default App;
