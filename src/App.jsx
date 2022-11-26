// import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import NavBar from './components/Menu/Menu';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Pages/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Pages/Cart/Cart';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  console.log("app")
  
  return (
    <BrowserRouter className="container">

    <NavBar/>
    <Routes>
      <Route path="/" element={ <ItemListContainer/> } />
      <Route path="/detail/:productId" element={ <ItemDetailContainer/> } />  
      <Route path="/cart" element={ <Cart/> } />

      <Route path="*" element={ <Navigate to={"/"}/> } />
    </Routes>

    </BrowserRouter>
  ); 
}

export default App;