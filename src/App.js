import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Routes,  /*Switch*/} from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
   
    <div className="App">
     <Routes>
      <Route path="/" element={<><h1>Lets Get Started!</h1><Welcome></Welcome></>} />
      <Route path="/welcome" element={<Welcome/>} />
      <Route element={<Products/> } path="/product" exact  />
      <Route path="/product/:productId" element={<ProductDetails/>} />
     </Routes>
    </div>
  
  );
}

export default App;
