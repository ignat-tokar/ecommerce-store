import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import AddRemoveButton from './AddRemoveButton';

class ProductPage extends React.Component {

  render() {
    return (
      <>
        <NavLink className="Redirect-button" to="/ecommerce-store/">Back</NavLink>
        <div key={this.props.itemInfo.id}>
          <h1>{this.props.itemInfo.title}</h1>
          <img style={{ width: "300px" }} src={this.props.itemInfo.photoUrl} />
          {this.props.itemInfo.allPhotos.map(photo => {
                return (
                  <img style={{width: "50px"}} src={photo} />
                );
              })}
          <h2>Price: {this.props.itemInfo.price}$</h2>
          <h3>Sizes: {this.props.itemInfo.sizes.map(size => <span>{size} </span>)}</h3>
          <h3>Colors: {this.props.itemInfo.colors.map(color => <span>{color} </span>)}</h3>
          <AddRemoveButton id={this.props.itemInfo.id} inCart={this.props.itemInfo.inCart} />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const itemId = Number.parseInt(document.location.href.split('id=')[1]);
  return {
    itemInfo: state.products.filter(item => item.id === itemId)[0]
  }
}

export default connect(mapStateToProps)(ProductPage);