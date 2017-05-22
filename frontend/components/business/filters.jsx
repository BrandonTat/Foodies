import React from 'react';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = { prices: [] };

    this.handlePrice = this.handlePrice.bind(this);
    this.togglePrice = this.togglePrice.bind(this);
  }

  handlePrice(e) {
    e.preventDefault();
    console.log(e.target.value);
  }

  togglePrice(price) {
    if (this.state.prices[price]) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div id="priceFilter">
        <label>
          $<input
            onChange={this.handlePrice}
            value={1}
            type="checkbox"
            checked={this.togglePrice(1)}
          />
        </label>
        <label>
          $$<input
            onChange={this.handlePrice}
            value={2}
            type="checkbox"
            checked={this.togglePrice(2)}
          />
        </label>
        <label>
          $$$<input
            onChange={this.handlePrice}
            value={3}
            type="checkbox"
            checked={this.togglePrice(3)}
          />
        </label>
        <label>
          $$$$<input
            onChange={this.handlePrice}
            value={4}
            type="checkbox"
            checked={this.togglePrice(4)}
          />
        </label>

      </div>
    );
  }
}

export default Filters;


// $<input
//   onClick={this.handlePrice} value={1} type="checkbox"
// />
// $$<input
//   onClick={this.handlePrice} value={2} type="checkbox"
// />
// $$$<input
//   onClick={this.handlePrice} value={3} type="checkbox"
// />
// $$$$<input
//   onClick={this.handlePrice} value={4} type="checkbox"
// />
