import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "./Loading";
import Gallery from "./Gallery";
import { fetchData } from "../action";

class Home extends Component {
  state = {
    isLoading: true
  };
  componentDidMount() {
    var getDataFromLocalStorage = JSON.parse(localStorage.getItem("dataInfo"));
    if (!getDataFromLocalStorage) {
      this.props
        .dispatch(fetchData())
        .then(res => this.setState({ isLoading: false }));
    } else {
      this.props.dispatch({
        type: "GET_DATA",
        payload: getDataFromLocalStorage
      });
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div className="isWrapper">{isLoading ? <Loading /> : <Gallery />}</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    dataInfo: state.getData.dataInfo
  };
}
export default connect(mapStateToProps)(Home);
