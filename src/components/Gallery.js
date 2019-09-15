import React, { Component } from "react";
import { connect } from "react-redux";

function generateRandomNum(num) {
  let randomNum = 0;
  randomNum = Math.floor(Math.random() * num);
  return randomNum;
}

class Gallery extends Component {
  render() {
    let { dataInfo } = this.props;
    var random = generateRandomNum(dataInfo.length);
    const randomData = dataInfo.slice(random, random + 10);

    return (
      <div className="container">
        <h1 className="heading">Image Gallery App</h1>
        <div className="gallery">
          {randomData
            ? randomData.map(imageInfo => (
                <div className="gallery-item" key={imageInfo.id}>
                  <img
                    className="gallery-image"
                    src={imageInfo.url}
                    alt={"image" + imageInfo.id}
                  />
                </div>
              ))
            : "data not found"}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    dataInfo: state.getData.dataInfo
  };
}
export default connect(mapStateToProps)(Gallery);
