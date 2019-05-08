const Storage={
    APIdata:[]
}

const reducerC = (state=Storage, action ) =>
{
    if(action.type === "CALLPHOTOSAPI")
    {
        return{
            ...state,
            APIdata: action.value
        }
    }
    if(action.type === "ALBUMSDELETESINGLELIST")
    {
        return{
            ...state,
            APIdata: state.APIdata.filter(res =>{ return res.id!==action.value })
        }
    }
    
    return state;
}

export default reducerC;