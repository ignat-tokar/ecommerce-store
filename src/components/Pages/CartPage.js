import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import AddRemoveButton from '../IncludedComponents/AddRemoveButton';
import Wrapper from '../IncludedComponents/Wrapper';
import { minusItemCount, plusItemCount } from '../store';

class Cart extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      totalPrice: 0,
      taxPrice: 0
    };  
    this.calculateTotalPrice = this.calculateTotalPrice.bind(this);
  }

  componentDidMount() {
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    const data = Array.from(document.querySelectorAll('#price'));
    let totalPrice = 0;
    data.map(obj => {
      totalPrice = totalPrice + Number.parseFloat(obj.innerText);
    })
    let taxPrice = Math.round(totalPrice*0.41*100)/100;
    totalPrice = Math.round((totalPrice+taxPrice)*100)/100;
    this.setState({totalPrice,taxPrice});  
  }

  render() {
    return (
      <Wrapper>
        <div className="Cart-page">
          <h1>CART</h1>
          {this.props.cartProducts && this.props.cartProducts.map(product => {
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
                        {Math.round(product.price*product.count*100)/100}
                      </div>
                    </div>
                    <div><span id="info">SIZE:</span>{product.sizes.map(size => <div id="size">{size}</div>)}</div>
                    <div><span id="info">COLOR:</span>{product.colors.map(color => <div id="color" style={{ backgroundColor: color }}></div>)}</div>
                  </div>
                  <div id="right-side">
                    <div className="Span-block-cart">
                      <span id="plus" onClick={()=>{
                        this.props.plusItemCount(product.id);
                        this.calculateTotalPrice();
                      }}>+</span>
                      <span id="count" key={product.count}>{product.count}</span>
                      <span id="minus" onClick={()=>{
                        this.props.minusItemCount(product.id);
                        this.calculateTotalPrice();
                      }}>-</span>
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
              <span>{this.state.taxPrice}</span>
            </span>
            <span id="quantity">Quantity: <span>{this.props.quantity}</span></span>
            <span id="total">Total:
              <img
                style={{
                  width: "15px",
                  height: "15px",
                  paddingRight: "1pt"
                }}
                src={this.props.currencyImg}
              />
              <span>{this.state.totalPrice}</span>
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
    cartProducts: state.cartProducts,
    currencyImg: state.currencyImg,
    quantity: state.quantity
  }
}

export default connect(mapStateToProps, {plusItemCount, minusItemCount})(Cart);