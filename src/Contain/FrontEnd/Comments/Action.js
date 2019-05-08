const axios = require("axios");

export const callCommentApi = val => {
  if (val === "") {
    return dispatch => {
      axios
        .get(`https://jsonplaceholder.typicode.com/comments/?id=1`)
        .then(res => {
          //   console.log(res.data);
          dispatch({ type: "CALLALLCOMMENTAPI", value: res.data });
        })
        .catch(error => {
          console.log(error);
        });
    };
  } else {
    return dispatch => {
      axios
        .get(`https://jsonplaceholder.typicode.com/comments/?email=${val}`)
        .then(res => {
          //   console.log(res.data);
          dispatch({ type: "CALLSINGLECOMMENTAPI", value: res.data });
        })
        .catch(error => {
          console.log(error);
        });
    };
  }
};

export const APIcall = val => {
  return dispatch => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/`)
      .then(res => {
        //   console.log(res.data);
        dispatch({ type: "APICALL", value: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const deleteUser = val => {
  return dispatch => {
    dispatch({ type: "USERDELETE", value: val });
  };
};

export const callAllComments = () => {
  return dispatch => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/`)
      .then(res => {
        //   console.log(res.data);
        dispatch({ type: "CALLCOMMENTAPI", value: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
};
export const buttonLength = () => {
  return dispatch => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/`)
      .then(res => {
        //   console.log(res.data);
        dispatch({ type: "CALLCOMMENTAPILENGTH", value: res.data.length });
      })
      .catch(error => {
        console.log(error);
      });
  };
};
export const callCommentApiWithId = val => {
  return dispatch => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/${val}`)
      .then(res => {
        //   console.log(res.data);
        dispatch({ type: "CALLCOMMENTWITHID", value: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
};
