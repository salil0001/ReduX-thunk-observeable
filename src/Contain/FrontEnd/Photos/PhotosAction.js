const axios = require("axios");

export const callPhotosApi = val => {
  
    return dispatch => {
      axios
        .get(`https://jsonplaceholder.typicode.com/photos/`)
        .then(res => {
          //   console.log(res.data);
          dispatch({ type: "CALLPHOTOSAPI", value: res.data });
        })
        .catch(error => {
          console.log(error);
        });
    };
  
};
