import React, { Component } from "react";
import { connect } from "react-redux";

class InfoList extends Component {
  render() {
    const { infoUrls } = this.props;
    const result = !!Object.keys(infoUrls).length
      ? this.props.infoUrls.data.ResultSet.Point.Station
      : "no data";
    return <div>{result.Name}</div>;
  }
}

const mapStateToProps = (state) => ({ infoUrls: state.infoUrls });

export default connect(mapStateToProps, null)(InfoList);
