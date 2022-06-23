import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import CartOverlay from './components/CartOverlay';
import Category from './components/Category';
import ProductDisplayPage from './components/ProductDisplayPage';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="ecommerce-store/" element={<Category />}/>
          <Route path="ecommerce-store/cart-overlay" element={<CartOverlay />}/>
          <Route path="ecommerce-store/cart" element={<Cart />}/>
          <Route path="ecommerce-store/product-display-page" element={<ProductDisplayPage />}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
