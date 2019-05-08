import React, { Component } from "react";
import { connect } from "react-redux";
import * as ActionCreater from "../Comments/Action";
import "./User.css";

class User extends Component {
  state = {};

  componentDidMount() {
    this.props.APIcall(1);
  }

  hideShowDelete = () => {
    this.setState({
      DeleteButton: !this.state.DeleteButton
    });
  };

  render() {
    const usersList = this.props.APIdata.map(user => {
      return (
        <div key={user.id} className="outerclass">
          <div className="usermodify">
            Id: {user.id} | User: {user.name} | User Name: {user.username} |
            Email: {user.email}
            <button className="buttonspecs" onClick={() => this.props.deleteUser(user.id)}> X </button>
          </div>

          
        </div>
      );
    });

    return (
      <div>
        USER List
        {usersList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    APIdata: state.comments.APIdata
  };
};

const mapDispatchToProps = dispatch => {
  return {
    APIcall: val => dispatch(ActionCreater.APIcall(val)),
    deleteUser: (val) => dispatch(ActionCreater.deleteUser(val))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
