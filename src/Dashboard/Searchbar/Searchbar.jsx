import { PureComponent } from "react";
import "./Searchbar.css";

export default class Searchbar extends PureComponent {
  handleText = (event) => {
    this.props.handleChange(event);
  };
  render() {
    return (
      <div className="search-input">
        <div>
          <input
            className="input-text"
            placeholder="Search for an emoji..."
            onChange={this.handleText}
          />
        </div>
      </div>
    );
  }
}
