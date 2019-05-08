import React, { Component } from "react";
import { connect } from "react-redux";
import * as ActionCreater from "./AlbumsAction";
import "./Albums.css";

class Albums extends Component {
  componentDidMount() {
    this.props.callPhotosApi();
  }

  render() {
    //  console.log('Albums ',this.props.APIdata);

    const ApiList = this.props.APIdata.map(data => {
      return (
        <div
          key={data.id}
          className=" col-md-3 col-sm-12 card cardAlbumsSettings "
        >
          <div className="p-2">
            Title:
            <span
              onClick={() => this.props.AlbumDeleteSingleList(data.id)}
              className="DeleteAlbumsCard"
            >
              X
            </span>
            <div className=""> {data.title} </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <div className="container">
   
          <div className="row">{ApiList}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    APIdata: state.albums.APIdata
  };
};
const mapDispatchToProps = dispatch => {
  return {
    callPhotosApi: val => dispatch(ActionCreater.callAlbumsApi(val)),
    AlbumDeleteSingleList: val =>
      dispatch(ActionCreater.AlbumDeleteSingleList(val))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);
