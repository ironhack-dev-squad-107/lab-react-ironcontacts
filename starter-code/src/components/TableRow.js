import React, { Component } from "react";

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // allContent is what we named it in Table.js. We passed the state of Table.js as a prop to TableRow.js
    const { name, popularity, pictureUrl } = this.props.allContent;
    return (
      <tr>
        <th>
          <img src={pictureUrl} alt="celeb" />
        </th>
        <th>{name}</th>
        <th>{popularity}</th>
        <th>
          {/* deleteOnClick comes from Table.js. We passed it down as a prop */}
          <button onClick={this.props.deleteOnClick}>Delete</button>
        </th>
      </tr>
    );
  }
}

export default TableRow;
