import React, { Component } from "react";
import { connect } from "react-redux";
import * as ActionCreater from "./PhotosAction";
import "./Photos.css";

class Photos extends Component {
  componentDidMount = () => {
    this.props.callPhotosApi();
  };

  render() {
    const APIdata = this.props.APIdata.slice(0,10).map(data => {
      return (
        <div  key={data.id} className="col-md-4 p-1 ">
          <div className="card">
          <div><img src={data.thumbnailUrl} height="200px" width="200px"></img></div>
            <div className="card-title">
            
              <div>{data.title}</div>
          
              
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <div className="PhotosHeader">
          <h2>Photos</h2>
          <div className="container">
          <div className="row" >{APIdata}</div>
          </div>
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    APIdata: state.photos.APIdata
  };
};
const mapDispatchToProps = dispatch => {
  return {
    callPhotosApi: val => dispatch(ActionCreater.callPhotosApi(val))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Photos);
