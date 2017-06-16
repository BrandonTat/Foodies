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
      <div id="searchForm">
        <form id="searchbarForm" onSubmit={this.handlSearch}>
          <input
            id="searchbarInput"
            value = {this.state.query}
            placeholder = "Find restaurant name"
            onChange = {this.handleChange}
            />

        </form>
        <button className="searchLink" onClick={this.handleSearch}>
          <i className="fa fa-search"></i>
        </button>
      </div>
  );
  }
}

export default SearchBar;
