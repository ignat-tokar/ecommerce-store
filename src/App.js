import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CartPage from './components/CartPage';
import MainPage from './components/MainPage';
import ProductPage from './components/ProductPage';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="ecommerce-store/" element={<MainPage />}/>
          <Route path="ecommerce-store/cart" element={<CartPage />}/>
          <Route path="ecommerce-store/product-page" element={<ProductPage />}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
