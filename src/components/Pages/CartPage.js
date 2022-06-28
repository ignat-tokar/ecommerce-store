import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import AddRemoveButton from '../IncludedComponents/AddRemoveButton';
import Wrapper from '../IncludedComponents/Wrapper';

class Cart extends React.Component {

  render() {
    return (
      <Wrapper>
        <h1>Cart</h1>
        {this.props.products.map(product => {
          return (
            <div key={product.id}>
              <NavLink to={`/ecommerce-store/product-page?id=${product.id}`}><h1>{product.title}</h1>
              <img style={{width: "300px"}} src={product.photoUrl} /></NavLink>
              <h2>Price: {product.price}$</h2>
              <AddRemoveButton id={product.id} inCart={true} />
            </div>
          );
        })}        
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.cartProducts
  }
}

export default connect(mapStateToProps, null)(Cart);