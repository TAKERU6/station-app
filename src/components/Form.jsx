import React, { Component } from "react";
import { connect } from "react-redux";
import getUrls from "../actions/getUrls";

class Form extends Component {
  state = { word: "" };

  handleChange = (event) => this.setState({ word: event.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const isValid = this.state.word === "";
    if (isValid) return alert("駅名を入力して下さい");
    const word = this.state.word;
    onSubmit(word);
    this.setState({ word: "" });
  };

  render() {
    const { button } = this.props;
    return (
      <form onSubmit={(e) => this.onSubmit(e)}>
        <input
          type="text"
          value={this.state.word}
          onChange={this.handleChange}
        />
        <input type="submit" value={button} />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({ button: state.button });

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (word) => dispatch(getUrls(word)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
