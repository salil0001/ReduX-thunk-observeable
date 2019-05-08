const Storage ={
    APIdata:[],
    CommentData:[],
    APIlength:0

};

const reducerA = (state=Storage, action ) =>
{
    if(action.type === "APICALL")
    {
        return{
            ...state,
            APIdata: action.value
        }
    }
    if(action.type  === "USERDELETE")
    {
        return{
            ...state,
            APIdata: state.APIdata.filter(el => el.id !== action.value )
        }
    }
    if(action.type === "CALLCOMMENTAPI")
    {
        return{
            ...state,
            CommentData: [...action.value]
        }
    }
    if(action.type === "CALLSINGLECOMMENTAPI")
    {
        return{
            ...state,
            APIdata: action.value,
            APIlength:action.value.length
        }
    }
    if(action.type === "CALLCOMMENTAPILENGTH")
    {
        return{
            ...state,
            APIlength: action.value
        }
    }
    if(action.type === "CALLCOMMENTWITHID")
    {
        return{
            ...state,
            APIdata: [action.value]
        }
    }
    if(action.type === "CALLALLCOMMENTAPI")
    {
        return{
            ...state,
            APIdata: action.value,
            APIlength:500
        }
    }


    return state;
}

export default reducerA;