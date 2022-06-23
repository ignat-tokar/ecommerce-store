import React from 'react';
import { connect } from 'react-redux';
import { addItemActionCreator } from '../store/main-reducer';

class MainPage extends React.Component {

  render() {
    return (
      <>
        <h1>Category</h1>
        {this.props.products && this.props.products.map(product => {
          return (
            <div key={product.id}>
              <h1>{product.title}</h1>
              <img style={{width: "300px"}} src={product.photoUrl} />
              {/* {product.allPhotos.map(photo => {
                return (
                  <img style={{width: "50px"}} src={photo} />
                );
              })} */}
              <h2>Price: {product.price}$</h2>
              <h3>Sizes: {product.sizes.map(size=><span>{size} </span>)}</h3>
              <h3>Colors: {product.colors.map(color=><span>{color} </span>)}</h3>
            </div>
          );
        })}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.mainPage.products
  }
}

export default connect(mapStateToProps, { addItemActionCreator })(MainPage);