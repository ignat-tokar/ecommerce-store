import React from 'react';
import { connect } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

class MainPage extends React.Component {

  constructor(props){
    super(props);
    this.buttonHandler = this.buttonHandler.bind(this);
  }

  buttonHandler (e) {
    this.props.products.map(item => {
      if(item.id === 1) console.log(item);
      return item;
    })
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

export default connect(mapStateToProps, null)(MainPage);