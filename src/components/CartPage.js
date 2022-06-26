import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Cart extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      products: this.props.products.filter(item => item.inCart === true)
    }
  }

  render() {
    return (
      <>
        <h1>Cart</h1>
        <NavLink to="/ecommerce-store/">Back</NavLink>
        {this.state.products.map(product => {
          return (
            <div key={product.id}>
              <h1>{product.title}</h1>
              <img style={{width: "300px"}} src={product.photoUrl} />
              <h2>Price: {product.price}$</h2>
              <button id={product.id} onClick={this.buttonHandler}>Add to Cart</button>
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

export default connect(mapStateToProps, null)(Cart);