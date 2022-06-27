import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../store';

class AddRemoveButton extends React.Component {

  constructor(props) {
    super(props);
    this.addButtonHandler = this.addButtonHandler.bind(this);
    this.removeButtonHandler = this.removeButtonHandler.bind(this);
  }

  addButtonHandler(e) {
    this.props.addItemToCart(Number.parseInt(e.target.id));
  }

  removeButtonHandler(e) {
    this.props.removeItemFromCart(Number.parseInt(e.target.id));
  }

  render() {
    return (
      <div className="Add-remove-button">
        {this.props.inCart
          ? <button id={this.props.id} onClick={this.removeButtonHandler}>REMOVE FROM CART</button>
          : <button id={this.props.id} onClick={this.addButtonHandler}>ADD TO CART</button>
        }
      </div>
    );
  }
}

export default connect(null, {addItemToCart, removeItemFromCart})(AddRemoveButton);