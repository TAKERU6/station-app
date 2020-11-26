import React, { Component } from "react";
import { connect } from "react-redux";
import getUrls2 from "../actions/getUrls2";

class Form2 extends Component {
  state = { from: "", to: "" };

  handleFromChange = (event) => this.setState({ from: event.target.value });

  handleToChange = (event) => this.setState({ to: event.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const isValid = this.state.word === "";
    if (isValid) return alert("駅名を入力して下さい");
    const from = this.state.from;
    const to = this.state.to;
    onSubmit(from, to);
  };

  render() {
    const { infoUrls2 } = this.props;
    const uri =
      !!infoUrls2.length && typeof infoUrls2 === "string" ? (
        <p>
          <a href={infoUrls2}>検索結果へ</a>
        </p>
      ) : (
        "駅名を入力して下さい"
      );
    return (
      <>
        <form onSubmit={(e) => this.onSubmit(e)}>
          from
          <input
            type="text"
            value={this.state.from}
            onChange={this.handleFromChange}
          />
          to
          <input
            type="text"
            value={this.state.to}
            onChange={this.handleToChange}
          />
          <input type="submit" value="search" />
        </form>
        <div>{uri}</div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ infoUrls2: state.infoUrls2 });

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (from, to) => dispatch(getUrls2(from, to)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form2);
