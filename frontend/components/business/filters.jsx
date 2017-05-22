import React from 'react';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      1: false,
      2: false,
      3: false,
      4: false
    };

    this.handlePrice = this.handlePrice.bind(this);
    this.togglePrice = this.togglePrice.bind(this);
  }

  componentDidUpdate() {
    
  }

  handlePrice(e) {
    e.preventDefault();
    console.log(e.target.checked);
    console.log(this.state);
    let price = e.target.value;
    console.log(price);

    this.setState({ [price]: this.togglePrice(price)});
  }


  togglePrice(price) {
    if (this.state[price]) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    return (
      <div id="priceFilter">
        <label>
          $<input
            onClick={this.handlePrice}
            value={1}
            type="checkbox"
            checked={this.state[1]}
          />
        </label>
        <label>
          $$<input
            onClick={this.handlePrice}
            value={2}
            type="checkbox"
            checked={this.state[2]}
          />
        </label>
        <label>
          $$$<input
            onClick={this.handlePrice}
            value={3}
            type="checkbox"
            checked={this.state[3]}
          />
        </label>
        <label>
          $$$$<input
            onClick={this.handlePrice}
            value={4}
            type="checkbox"
            checked={this.state[4]}
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
