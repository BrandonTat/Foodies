import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ option: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Find:</label>
        <input
          value = {this.state.option}
          placeholder = "Tacos, burgers, etc."
          onChange = {this.handleChange}
        />

        <button><i className="fa fa-search"></i></button>
      </form>
  );
  }
}

export default SearchBar;
