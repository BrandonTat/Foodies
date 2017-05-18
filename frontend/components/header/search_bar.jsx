import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: "Test"
    };
  }

  change(e) {
    e.preventDefault();
    this.setState({ option: e.target.value });
  }

  render() {
    return (
      <select onChange={this.change} value={this.state.option}>
        <option value="A">Apple</option>
        <option value="B">Banana</option>
        <option value="C">Cranberry</option>
      </select>
  );
  }
}

export default SearchBar;
