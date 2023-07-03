import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './LoginForm';
import Navbar from './Nav';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Products from './ProductsPage';
import ProductDetails from './ProductDetails';
import HomePage from './Home';
import SuccessMessage from './LoginForm/success';



function App() {
  return (

    <BrowserRouter>
     
     <div>
      <Navbar/>
   
    <Routes>
    <Route path="/home" element={<HomePage />} />
         <Route exact path="/Success" component={SuccessMessage} />
          <Route path="/productsPage" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
         
          
    </Routes>
    </div>
  </BrowserRouter>
);
}
  

export default App;
