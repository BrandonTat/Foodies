import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(e) {
    this.setState({ option: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleSearch(e) {
    e.preventDefault();
    this.props.history.push('/businesses');
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

      <button onClick={this.handleSearch}><i className="fa fa-search"></i></button>
      </form>
  );
  }
}

export default SearchBar;
