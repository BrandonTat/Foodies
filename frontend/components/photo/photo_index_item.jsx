import React from 'react';

class PhotoIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <img src={this.props.photo} id="photoShow"></img>
    );
  }
}

export default PhotoIndexItem;
