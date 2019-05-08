import React, { Component } from "react";
import { connect } from "react-redux";
import * as ActionCreater from "./Action";
import { Grid, Pagination } from "semantic-ui-react";
import "./Comments.css";
import "semantic-ui-css/semantic.min.css";

class Comments extends Component {
  state = {
    user: "",
    activePage: 1,
    len: 1,
    APIButtons: [],
    boundaryRange: 1,
    siblingRange: 1,
    showEllipsis: true,
    showFirstAndLastNav: true,
    showPreviousAndNextNav: true,
    empty:"",
    HidePage:false
  };

  componentDidMount() {
    this.props.callCommentApi(this.state.user);
    // this.props.callAllComments();
    this.props.buttonLength();
   // this.PageShowHide();
  }
  PageShowHide=()=>
  {
    if(this.props.APIlength === 0)
    {
      this.setState({
        HidePage:true
      })
    }
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      activePage:1
    },()=>this.props.callCommentApi(this.state.user))
   // console.log('HandleChange',this.state.user);
  }

    
  handleSubmit = e => {
    e.preventDefault();
    this.props.callCommentApi(this.state.user);
    this.setState({
      user:""
    })
  
  };

  handleButtonOnclick = val => {
    //   console.log('Button val ',val+1);
    this.setState(
      {
        user: val + 1
      },
      () => this.props.callCommentApi(this.state.user)
    );
  };
  handleCheckboxChange = (e, { checked, name }) =>
    this.setState({ [name]: checked });

  handleInputChange = (e, { name, value }) => this.setState({ [name]: value });

  handlePaginationChange = (e, { activePage }) => {
    this.setState({ activePage }, () => this.props.callCommentApiWithId(activePage));
    //console.log("Active Page",activePage );
  };

  render() {
    const {
      boundaryRange,
      siblingRange,
      showEllipsis,
      showFirstAndLastNav,
      showPreviousAndNextNav,
      activePage
    } = this.state;
    //console.log(this.props.APIdata);
    const data = this.props.APIdata;
    //console.log("API Data is ", data);
    
    const dataList = data.length ? (
      data.map(list => {
        
        return (
          <div key={list.id} className="card">
            <div className="card-body">
              Name:
              <div> {list.name}</div>
              Email:
              <div>{list.email}</div>
              Body:
              <div>{list.body}</div>
            </div>
          </div>
        );
      })
    ) : (
      <div>No Records Found</div>
    );

    const commentData = this.props.CommentData;

    const CommentList = commentData.map(list => {
      return (
        <div key={list.id}>
          <div>{list.id}</div>
          <div>{list.name}</div>
          <div>{list.email}</div>
          <div>{list.body}</div>
        </div>
      );
    });

    // const ButtonssLen = this.props.CommentData.length;
    // var APIButtons = [];
    // for (var i = 0; i < this.props.APIlength; i++) {
    //   APIButtons.push({ i });
    // }

    // const APIButtonList = APIButtons.map(x => {
    //   return (
    //     <button key={x.i} onClick={() => this.handleButtonOnclick(x.i)}>
    //       {x.i + 1}
    //     </button>
    //   );
    // });
    // console.log(this.props.APIlength);
    return (
      <div>
        <div className="Search-tab">
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <input
              className="form-control col-md-4 offset-md-3"
              type="text"
              name="user"
              placeholder="Search Email"
              aria-label="Search"
              required
              onChange={this.handleChange}
              value={this.state.user}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
             </form>
          
        </div>
        <div className="col-md-8 offset-md-2 ApiCallDesign">{dataList}</div>

        <div className="Pagination">{CommentList}</div>

        <div className={this.props.APIlength===0?"HidePage":"col-md-8 offset-md-4"}>
          <Grid columns={1}>
            <Grid.Column>
              <Pagination
                activePage={activePage}
                boundaryRange={boundaryRange}
                onPageChange={this.handlePaginationChange}
                size="mini"
                siblingRange={siblingRange}
                totalPages={this.props.APIlength}
                // Heads up! All items are powered by shorthands, if you want to hide one of them, just pass `null` as value
                ellipsisItem={showEllipsis ? undefined : null}
                firstItem={showFirstAndLastNav ? undefined : null}
                lastItem={showFirstAndLastNav ? undefined : null}
                prevItem={showPreviousAndNextNav ? undefined : null}
                nextItem={showPreviousAndNextNav ? undefined : null}
              />
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    APIdata: state.comments.APIdata,
    CommentData: state.comments.CommentData,
    APIlength: state.comments.APIlength
  };
};
const mapDispatchToProps = dispatch => {
  return {
    callCommentApi: val => dispatch(ActionCreater.callCommentApi(val)),
    callAllComments: () => dispatch(ActionCreater.callAllComments()),
     buttonLength: () => dispatch(ActionCreater.buttonLength()),
    callCommentApiWithId: (val) => dispatch(ActionCreater.callCommentApiWithId(val)),
    
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
