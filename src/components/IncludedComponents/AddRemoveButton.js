import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addItemToCart, removeItemFromCart } from '../store';

class AddRemoveButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inCart: this.props.inCart
    }
    this.addButtonHandler = this.addButtonHandler.bind(this);
    this.removeButtonHandler = this.removeButtonHandler.bind(this);
  }

  addButtonHandler(e) {
    this.props.addItemToCart(Number.parseInt(e.target.id));
    this.setState({inCart: true});
  }

  removeButtonHandler(e) {
    this.props.removeItemFromCart(Number.parseInt(e.target.id));
  }

  render() {
    return (
      <div className="Add-remove-button">
        {this.state.inCart
          ? <NavLink to="/ecommerce-store/cart" className="Unactive">GO TO CART</NavLink>
          : <button id={this.props.id} onClick={this.addButtonHandler}>ADD TO CART</button>
        }
      </div>
    );
  }
}

export default connect(null, {addItemToCart, removeItemFromCart})(AddRemoveButton);