import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "./Loading";
import Gallery from "./Gallery";

class Home extends Component {
  state = {
    isLoading: true
  };
  componentDidMount() {
    var getDataFromLocalStorage = JSON.parse(localStorage.getItem("dataInfo"));
    if (!getDataFromLocalStorage) {
      fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then(res => res.json())
        .then(data => {
          const ModifiedData = data.slice(0, 10);
          localStorage.setItem("dataInfo", JSON.stringify(ModifiedData));
          this.props.dispatch({ type: "GET_DATA", payload: ModifiedData });
          this.setState({ isLoading: false });
        });
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
