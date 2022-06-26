import React from 'react';
import { connect } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import AddRemoveButton from './AddRemoveButton';
import { addItemToCart, removeItemFromCart } from './store';

class MainPage extends React.Component {

  render() {
    return (
      <>
        <h1>Category</h1>
        <NavLink className="Redirect-button" to="/ecommerce-store/cart">Cart page</NavLink>
        {this.props.products && this.props.products.map(product => {
          return (
            <div key={product.id}>
              <NavLink to={`/ecommerce-store/product-page?id=${product.id}`}><h1>{product.title}</h1></NavLink>
              <NavLink to={`/ecommerce-store/product-page?id=${product.id}`}><img style={{width: "300px"}} src={product.photoUrl} /></NavLink>
              <h2>Price: {product.price}$</h2>
              <AddRemoveButton id={product.id} inCart={product.inCart} />
            </div>
          );
        })}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, {addItemToCart, removeItemFromCart})(MainPage);