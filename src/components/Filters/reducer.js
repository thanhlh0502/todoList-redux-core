
const initState ={
    search:"",
    status:"All",
    priorities:[]
};

const filterReducer = (state = initState, action)=>{
    switch(action.type) {
        case 'filters/searchText':
            return {
                ...state,
                search: action.payload
            };
        case 'filters/status':
            return {
                ...state,
                status: action.payload
            };
        case 'filters/priorities':
            return {
                ...state,
                priorities:action.payload
            };
        default:
            return state;

    }
};
export default filterReducer;