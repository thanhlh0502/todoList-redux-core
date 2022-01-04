
const initState ={
    fillter:{
        search:"",
        status:"all",
        priorities:[]
    },
    todoList:[
        {id: 1, name:"Learn Yoga", priority: "High", completed:false},
        {id: 2, name:"Learn React", priority: "Medium", completed:true},
        {id: 3, name:"Learn .Net Core", priority: "Low", completed:false}
    ]

};

const rootReducer = (state = initState, action)=>{
    switch(action.type) {
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            };
        default:
            return state;

    }
};
export default rootReducer;