import React, {Component} from "react";

class AllergenItems extends Component {
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(item) {
    return <li onClick={() => this.delete(item.key)}
               key={item.key}>{item.text}</li>
  }

  delete(key) {
    this.props.delete(key);
  }

  render() {
    var allergenEntries = this.props.entries;
    var listItems = allergenEntries.map(this.createTasks);

    return  (
      <ul className="theList">
        {listItems}
      </ul>
    );
  }
}

export default AllergenItems;
