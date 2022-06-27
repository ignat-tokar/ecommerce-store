import { render } from "@testing-library/react";
import React from "react";
import { connect } from "react-redux";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import { NavLink } from "react-router-dom";
import AddRemoveButton from "./AddRemoveButton";

class ProductOverviewMain extends React.Component {

  render(){
    return (
      <div className="Product-overview-main" key={this.props.product.id}>
        <NavLink to={`/ecommerce-store/product-page?id=${this.props.product.id}`}>
          <img src={this.props.product.photoUrl} />
          <span className="Title">{this.props.product.title}</span>
          <span className="Price">
            <img 
              style={{
                width: "20px",
                height: "20px"
              }} 
              src={this.props.currencyImg} 
            />
            {this.props.product.price}
          </span>
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currency: state.currency,
    currencyImg: state.currencyImg
  }
}

export default connect(mapStateToProps, null)(ProductOverviewMain);