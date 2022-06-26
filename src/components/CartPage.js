import React from 'react';
import { NavLink } from 'react-router-dom';

class Cart extends React.Component {
  render() {
    return (
      <>
        <h1>Cart</h1>
        <NavLink to="/ecommerce-store/">Back</NavLink>
      </>
    );
  }
}

export default Cart;