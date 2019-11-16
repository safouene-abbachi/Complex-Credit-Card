import React, { Component } from "react";

class CreditCard extends Component {
  state = {
    name: "xxxxxx xxx",
    number: "0000 0000 0000 0000",
    expiry: "xx xx"
  };

  //Name of Card Owner

  nameChange = n => {
    this.setState({
      name: n.target.value.toUpperCase()
    });
  };

  //Card Number
  numberChange = c => {
    c.target.value = c.target.value
      .replace(/[^\dA-Z]/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
    this.setState({
      number: c.target.value
    });
  };

  //Expiration
  expiryChange = e => {
    let array = e.target.value.slice("/");
    if (
      e.target.value >= 3 &&
      e.target.value.replace(/(0?[1-9]|1[012])/) &&
      array[0] + array[1] < 13
    ) {
      this.setState({
        expiry: e.target.value.slice(0, 2) + "/" + e.target.value.slice(2, 4)
      });
    }
  };

  render() {
    return (
      <div className="hole-card">
        <div className="user-info">
          <label>
            NAME
            <input
              type="text"
              onChange={this.nameChange}
              placeholder="enter name"
            />
          </label>
          <label>
            NUMBER
            <input
              type="text"
              maxLength="19"
              onChange={this.numberChange}
              placeholder="enter number"
            />
          </label>

          <label>
            EXPIRATION DATE{" "}
            <input
              type="text"
              maxLength="4"
              onChange={this.expiryChange}
              pattern="\d\d/\d\d"
              placeholder="enter date"
            />
          </label>
        </div>
        <div className="blue-card">
          <div className="bank-name">
            <h1 className="credit__bank">My Bank</h1>
          </div>

          <div className="card-number">
            <p className="credit-card-number">{this.state.number}</p>
          </div>
          <div className="person-name">
            <label>
              Card Holder
              <p className="credit-name">{this.state.name}</p>
            </label>
          </div>
          <div className="expiration">
            <label>
              Expires <p className="credit-date">{this.state.expiry}</p>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default CreditCard;
