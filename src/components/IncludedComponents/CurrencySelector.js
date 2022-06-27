import React from "react";
import { connect } from "react-redux";
import { changeCurrency } from "../store";
import usdImg from "../../assets/usd.png";
import uahImg from "../../assets/uah.png";
import eurImg from "../../assets/eur.png";

class CurrencySelector extends React.Component {

  constructor(props) {
    super(props);
    this.onSelectHandler = this.onSelectHandler.bind(this);
  }

  onSelectHandler(e) {
    this.props.changeCurrency(e.target.value);
  }

  render() {
    return (
      <select className="Currency-selector" onChange={this.onSelectHandler}>
        <option value="usd">USD</option>
        <option value="eur"><img src={this.props.currencyImg}/>EUR</option>
        <option value="uah"><img src={this.props.currencyImg}/>UAH</option>
      </select>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currencyImg: state.currencyImg
  }
}

export default connect(mapStateToProps, { changeCurrency })(CurrencySelector);