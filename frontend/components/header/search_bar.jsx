import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: "Test"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.change = this.change.bind(this);
  }

  change(e) {
    e.preventDefault();
    this.setState({ option: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.option);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <select onChange={this.change} value={this.state.option}>
          <option value="A">Apple</option>
          <option value="B">Banana</option>
          <option value="C">Cranberry</option>
        </select>
        <button>button</button>
      </form>
  );
  }
}

export default SearchBar;
