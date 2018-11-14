import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.props.fetchBusinesses(this.state);
  }

  handleChange(e) {
    this.setState({ query: e.target.value });
  }

  handleSearch(e) {
    e.preventDefault();
    this.props.fetchBusinesses(this.state);
    this.props.history.push('/businesses');
  }

  render() {
    return (
      <div className="search-bar">
        <form className="search-bar-container" onSubmit={this.handlSearch}>
          <input
            className="search-bar-input"
            value = {this.state.query}
            placeholder = "burgers, bars, drinks..."
            onChange = {this.handleChange}
          />
        </form>

        <button className="search-link" onClick={this.handleSearch}>
          <i className="fa fa-search"></i>
        </button>
      </div>
    );
  }
}

export default SearchBar;
