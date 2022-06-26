import React from 'react';
import { connect } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { addItemToCart, removeItemFromCart } from './store';

class MainPage extends React.Component {

  constructor(props){
    super(props);
    this.addButtonHandler = this.addButtonHandler.bind(this);
    this.removeButtonHandler = this.removeButtonHandler.bind(this);
  }
  
  componentDidUpdate() {
    console.log(this.props.products);
  }

  addButtonHandler (e) {
    console.log('added');
    this.props.addItemToCart(Number.parseInt(e.target.id));
  }

  removeButtonHandler (e) {
    console.log('remove');
    this.props.removeItemFromCart(Number.parseInt(e.target.id));
  }

  render() {
    return (
      <>
        <h1>Category</h1>
        <NavLink to="/ecommerce-store/cart">Cart page</NavLink>
        {this.props.products && this.props.products.map(product => {
          return (
            <div key={product.id}>
              <h1>{product.title}</h1>
              <img style={{width: "300px"}} src={product.photoUrl} />
              <h2>Price: {product.price}$</h2>
              {product.inCart
                ? <button id={product.id} onClick={this.removeButtonHandler}>Remove from Cart</button>
                : <button id={product.id} onClick={this.addButtonHandler}>Add to Cart</button>
              }
              
              <NavLink to={`/ecommerce-store/product-page?id=${product.id}`}>Detail Info</NavLink>
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