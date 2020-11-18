import React, { Component } from "react";
import { connect } from "react-redux";

class InfoList extends Component {
  render() {
    const { infoUrls } = this.props;
    return <div>{infoUrls}</div>;
  }
}

const mapStateToProps = (state) => ({ infoUrls: state.infoUrls });

export default connect(mapStateToProps, null)(InfoList);
