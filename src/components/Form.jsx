import React, { Component } from "react";
import { connect } from "react-redux";
import getUrls from "../actions/getUrls";

class Form extends Component {
  state = { code: "" };

  handleChange = (event) => this.setState({ code: event.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const code = this.state.code;
    onSubmit(code);
    this.setState({ code: "" });
  };

  render() {
    return (
      <form onSubmit={(e) => this.onSubmit(e)}>
        <input
          type="number"
          value={this.state.code}
          onChange={this.handleChange}
        />
        <input type="submit" value="search" />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (code) => dispatch(getUrls(code)),
  };
};

export default connect(null, mapDispatchToProps)(Form);
