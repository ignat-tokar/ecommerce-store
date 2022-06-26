import React from "react";
import { connect } from "react-redux";
import { changeCurrency } from "./store";

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
      <select onChange={this.onSelectHandler}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="uah">UAH</option>
      </select>
    );
  }
}

export default connect(null, {changeCurrency})(CurrencySelector);