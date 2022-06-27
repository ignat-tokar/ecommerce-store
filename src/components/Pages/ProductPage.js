import React from 'react';
import { connect } from 'react-redux';
import AddRemoveButton from '../IncludedComponents/AddRemoveButton';
import Wrapper from '../IncludedComponents/Wrapper';

class ProductPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.itemInfo.title,
    }
  }

  render() {
    return (
      <Wrapper>
        <div className="Product-info" key={this.props.itemInfo.id}>
          <div className="Preview-block">
            <div style={{float: "left"}}>
            {this.props.itemInfo.allPhotos.map((photo, index) => {
              return (
                <div key={index}>
                  <img style={{
                    width: "100px",
                  }} className="Little-img" src={photo} />
                </div>
              );
            })}
            </div>
            <img style={{
              width: "400px",
              paddingLeft: "100px"
            }} src={this.props.itemInfo.photoUrl} />
          </div>
          <div className="Info-block">
            <h1>{this.props.itemInfo.title}</h1>
            <h2>{this.props.itemInfo.subTitle}</h2>
            <h3>SIZE:</h3>{this.props.itemInfo.sizes.map(size => <span>{size} </span>)}
            <h3>COLOR:</h3>{this.props.itemInfo.colors.map(color => <span>{color} </span>)}            
            <h3>PRICE:</h3>{this.props.itemInfo.price}
            <AddRemoveButton id={this.props.itemInfo.id} inCart={this.props.itemInfo.inCart} />
          </div>
        </div>
      </Wrapper>
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