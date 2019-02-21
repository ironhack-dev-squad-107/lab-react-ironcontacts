import React, { Component } from "react";
import contactsArr from "../contacts.json";
import TableRow from "./TableRow.js";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = { contacts: contactsArr.splice(0, 5) };
  }

  add() {
    const startState = this.state.contacts;
    startState.push(
      contactsArr[Math.floor(Math.random() * contactsArr.length)]
    );
    this.setState({ contacts: startState });
  }

  sortName() {
    const startState = this.state.contacts;

    startState.sort((a, b) => a.name.localeCompare(b.name));

    this.setState({ contacts: startState });
  }

  popularity() {
    const startState = this.state.contacts;
    startState.sort((a, b) => (b.popularity > a.popularity ? 1 : -1));

    this.setState({ contacts: startState });
  }

  delete(index) {
    const startState = this.state.contacts;
    startState.splice(index, 1);

    this.setState({ contacts: startState });
  }

  render() {
    const { contacts } = this.state;

    return (
      <div>
        <button onClick={() => this.add()}>add random celeb</button>
        <button onClick={() => this.sortName()}>sort by name</button>
        <button onClick={() => this.popularity()}>sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map(oneItem => {
              return (
                <TableRow
                  key={oneItem.name}
                  allContent={oneItem}
                  deleteOnClick={() => this.delete(oneItem)}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
