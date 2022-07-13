import React from 'react';
import { connect } from 'react-redux';
import AddRemoveButton from '../IncludedComponents/AddRemoveButton';
import Wrapper from '../IncludedComponents/Wrapper';

class ProductPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.itemInfo.title,
      isAdaptive: window.screen.width <= 480
    }
  }

  render() {
    return (
      <Wrapper>
        <div className="Product-info" key={this.props.itemInfo.id}>
          {this.state.isAdaptive
            ? <div className="Preview-block">
              <img
                className="Preview-block-main-img"
                src={this.props.itemInfo.photoUrl} />
              <div className="Little-img-wrapper">
                {this.props.itemInfo.allPhotos.map((photo, index) => {
                  return (
                    <div className="Little-img-block" key={index}>
                      <img className="Little-img" src={photo} />
                    </div>
                  );
                })}
              </div>
            </div>
            : <div className="Preview-block">
              <div className="Little-img-wrapper">
                {this.props.itemInfo.allPhotos.map((photo, index) => {
                  return (
                    <div className="Little-img-block" key={index}>
                      <img className="Little-img" src={photo} />
                    </div>
                  );
                })}
              </div>
              <img
                className="Preview-block-main-img"
                src={this.props.itemInfo.photoUrl} />
            </div>
          }

          <div className="Info-block">
            <span id="title">{this.props.itemInfo.title}</span>
            <span id="sub-title">{this.props.itemInfo.subTitle}</span>
            <div><span id="info">SIZE:</span>{this.props.itemInfo.sizes.map(size => <div id="size">{size}</div>)}</div>
            <div><span id="info">COLOR:</span>{this.props.itemInfo.colors.map(color => <div id="color" style={{ backgroundColor: color }}></div>)}</div>
            <div><span id="info">PRICE:</span>
              <div id="price">
                <img
                  style={{
                    width: "20px",
                    height: "20px"
                  }}
                  src={this.props.currencyImg}
                />
                {this.props.itemInfo.price}
              </div></div>
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
    itemInfo: state.products.filter(item => item.id === itemId)[0],
    currencyImg: state.currencyImg
  }
}

export default connect(mapStateToProps)(ProductPage);