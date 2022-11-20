// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes } from "react-router-dom"

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Titulo from './components/Titulo/Titulo';
import ItemDetailContainer from './components/Pages/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Pages/Cart/Cart';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  console.log("app")
  
  return (
    <BrowserRouter className="container">

    <Titulo/>
    <NavBar/>
      <Routes>
        <Routes>
            <ItemListContainer/>
            <ItemDetailContainer/>
            <Cart/>  
        </Routes>        
          
      </Routes>
      

    </BrowserRouter>
  ); 
}

export default App;