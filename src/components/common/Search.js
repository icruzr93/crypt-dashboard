import React from "react";
import "./Search.css";
import { handleResponse } from "../../helpers";
import { API_URL } from "../../config";
import Loading from "../common/Loading";

class Search extends React.Component {
  state = {
    loading: false
  };

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    this.setState({ [inputName]: inputValue });

    if (!inputValue) return "";

    this.setState({ loading: true });

    fetch(`${API_URL}/autocomplete?searchQuery=${inputValue}`)
      .then(handleResponse)
      .then(result => {
        this.setState({ loading: false });
        console.log(result);
      });
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="Search">
        <span className="Search-icon" />
        <input
          className="Search-input"
          type="text"
          placeholder="Currency Name"
          name="query"
          onChange={this.handleChange}
        />

        {loading && (
          <div className="Search-loading">
            <Loading width={"12px"} height={"12px"} />
          </div>
        )}
      </div>
    );
  }
}

export default Search;
