import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import AddRemoveButton from '../IncludedComponents/AddRemoveButton';
import Wrapper from '../IncludedComponents/Wrapper';

class Cart extends React.Component {

  render() {
    return (
      <Wrapper>
        <div className="Cart-page">
          <h1>CART</h1>
          {this.props.cartProducts.map(product => {
            return (
              <div className="Cart-info-block" key={product.id}>
                <div className="Info-block">
                  <div id="left-side">
                    <span id="title">{product.title}</span>
                    <span id="sub-title">{product.subTitle}</span>
                    <div>
                      <div id="price">
                        <img
                          style={{
                            width: "17px",
                            height: "17px",
                            paddingRight: "1pt"
                          }}
                          src={this.props.currencyImg}
                        />
                        {product.price}
                      </div>
                    </div>
                    <div><span id="info">SIZE:</span>{product.sizes.map(size => <div id="size">{size}</div>)}</div>
                    <div><span id="info">COLOR:</span>{product.colors.map(color => <div id="color" style={{ backgroundColor: color }}></div>)}</div>
                  </div>
                  <div id="right-side">
                    <div className="Span-block-cart">
                      <span id="plus">+</span>
                      <span id="count">1</span>
                      <span id="minus">-</span>
                    </div>
                    <img src={product.photoUrl} />
                  </div>
                </div>
              </div>
            );
          })}
          <div className="Order-block">
            <span id="tax">Tax 21%:
              <img
                style={{
                  width: "15px",
                  height: "15px",
                  paddingRight: "1pt"
                }}
                src={this.props.currencyImg}
              />
              <span>42</span>
            </span>
            <span id="quantity">Quantity: <span>3</span></span>
            <span id="total">Total:
              <img
                style={{
                  width: "15px",
                  height: "15px",
                  paddingRight: "1pt"
                }}
                src={this.props.currencyImg}
              />
              <span>200</span>
            </span>
            <span id="order-button">ORDER</span>
          </div>
        </div>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    cartProducts: state.cartProducts,
    currencyImg: state.currencyImg
  }
}

export default connect(mapStateToProps, null)(Cart);