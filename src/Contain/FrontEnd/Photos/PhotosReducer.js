const Storage = {
  APIdata: [],
  CommentData: [],
  APIlength: 0
};

const reducerB = (state = Storage, action) => {
  if (action.type === "CALLPHOTOSAPI") {
    return {
      ...state,
      APIdata: action.value
    };
  }
  
  return state
};

export default reducerB
