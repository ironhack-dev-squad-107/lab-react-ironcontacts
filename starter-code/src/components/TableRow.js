import React, { Component } from "react";

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { name, popularity, pictureUrl } = this.props.allContent;
    return (
      <tr>
        <th>
          <img src={pictureUrl} alt="celeb" />
        </th>
        <th>{name}</th>
        <th>{popularity}</th>
        <th>
          <button onClick={this.props.deleteOnClick}>Delete</button>
        </th>
      </tr>
    );
  }
}

export default TableRow;
