import React, { Component } from "react";
import { connect } from "react-redux";

class Gallery extends Component {
  render() {
    const { dataInfo } = this.props;
    return (
      <div className="container">
        <h1 className="heading">Image Gallery App</h1>
        <div className="gallery">
          {dataInfo
            ? dataInfo.map(imageInfo => (
                <div className="gallery-item" key={imageInfo.id}>
                  <img
                    className="gallery-image"
                    src={imageInfo.url}
                    alt={"image" + imageInfo.id}
                  />
                </div>
              ))
            : "not found"}
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
