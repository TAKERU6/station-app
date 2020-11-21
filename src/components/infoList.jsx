import React, { Component } from "react";
import { connect } from "react-redux";

class InfoList extends Component {
  render() {
    const { infoUrls, errorText } = this.props;
    const resultName = !!infoUrls.length
      ? this.props.infoUrls.map((item) => (
          <li key={item.code} className="list">
            <span className="nameS">駅名</span>: {item.Name}（{item.Yomi}）
            <span className="nameT">交通機関</span>: {item.Type}
          </li>
        ))
      : "駅名を入力して下さい";
    return (
      <>
        <div className="errorText">{errorText}</div>
        <div>{resultName}</div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  infoUrls: state.infoUrls,
  errorText: state.errorText,
});

export default connect(mapStateToProps, null)(InfoList);
