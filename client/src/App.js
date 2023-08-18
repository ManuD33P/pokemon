import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LadingPage';
import Detail from './components/Detail/Detail'
import Home from "./components/Home/Home"
import './App.css';

function App() {
  return (
    <div className="App">
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
      element={<h1>Pokemon Create</h1>}
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
