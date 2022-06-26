import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class ProductPage extends React.Component {

  constructor(props) {
    super(props);
    const itemId = Number.parseInt(document.location.href.split('id=')[1]);
    this.state = {
      itemInfo: this.props.products.filter(item => item.id === itemId)[0]
    }
  }

  render() {
    return (
      <>
        <NavLink to="/ecommerce-store/">Back</NavLink>
        <div key={this.state.itemInfo.id}>
          <h1>{this.state.itemInfo.title}</h1>
          <img style={{ width: "300px" }} src={this.state.itemInfo.photoUrl} />
          {this.state.itemInfo.allPhotos.map(photo => {
                return (
                  <img style={{width: "50px"}} src={photo} />
                );
              })}
          <h2>Price: {this.state.itemInfo.price}$</h2>
          <h3>Sizes: {this.state.itemInfo.sizes.map(size => <span>{size} </span>)}</h3>
          <h3>Colors: {this.state.itemInfo.colors.map(color => <span>{color} </span>)}</h3>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(ProductPage);