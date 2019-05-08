const axios = require("axios");

export const callAlbumsApi = val => {
  
    return dispatch => {
      axios
        .get(`https://jsonplaceholder.typicode.com/albums/`)
        .then(res => {
          //   console.log(res.data);
          dispatch({ type: "CALLPHOTOSAPI", value: res.data });
        })
        .catch(error => {
          console.log(error);
        });
    };
  
};
export const AlbumDeleteSingleList = val => {
  
    return dispatch => {
      
          dispatch({ type: "ALBUMSDELETESINGLELIST", value: val});
        }
    };
  
