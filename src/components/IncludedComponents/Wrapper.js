import { NavLink } from 'react-router-dom';
import CurrencySelect from './CurrencySelector';
import cartImg from '../../assets/cart.png';
import { connect } from 'react-redux';
import React from 'react';

class Wrapper extends React.Component {

  render() {
    return (
      <div>
        <div className="Header-block">
          <span className="Category-block">
            <NavLink to="/ecommerce-store/"><span className="Selected">WOMEN</span></NavLink>
            <span>MEN</span>
            <span>KIDS</span>
          </span>
          <CurrencySelect />
          <NavLink className="Redirect-button" to="/ecommerce-store/cart"><img src={cartImg} /> {this.props.quantity > 0 ? <span id="cart-count" style={{marginRight: this.props.quantity>=10 ? "11pt" : "15pt"}}>{this.props.quantity}</span> : null}</NavLink>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quantity: state.quantity
  }
}

export default connect(mapStateToProps, null)(Wrapper);