import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import AddRemoveButton from './AddRemoveButton';

class Cart extends React.Component {

  render() {
    return (
      <>
        <h1>Cart</h1>
        <NavLink className="Redirect-button" to="/ecommerce-store/">Back</NavLink>
        {this.props.products.map(product => {
          return (
            <div key={product.id}>
              <NavLink to={`/ecommerce-store/product-page?id=${product.id}`}><h1>{product.title}</h1></NavLink>
              <NavLink to={`/ecommerce-store/product-page?id=${product.id}`}><img style={{width: "300px"}} src={product.photoUrl} /></NavLink>
              <h2>Price: {product.price}$</h2>
              <AddRemoveButton id={product.id} inCart={product.inCart} />
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
    products: state.products.filter(item => item.inCart === true)
  }
}

export default connect(mapStateToProps, null)(Cart);