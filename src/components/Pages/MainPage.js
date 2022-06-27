import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../store';
import ProductOverviewMain from '../IncludedComponents/ProductOverviewMain';
import Wrapper from '../IncludedComponents/Wrapper';

class MainPage extends React.Component {

  render() {
    return (
      <Wrapper title="Main page" navLink="/ecommerce-store/cart" buttonName="Cart page">
        <div className="Main-page-overview">
          {this.props.products && this.props.products.map(product => {
            return (
              <ProductOverviewMain product={product} />
            );
          })}
        </div>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, { addItemToCart, removeItemFromCart })(MainPage);