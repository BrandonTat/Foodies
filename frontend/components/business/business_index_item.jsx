import React from 'react';

class BusinessIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, price, address } = this.props.business;
    return (
      <ul>
        <li>{name}</li>
      </ul>
    );
  }
}

export default BusinessIndexItem;