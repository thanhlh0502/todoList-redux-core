
const initState =[
    {id: 1, name:"Learn Yoga", priority: "High", completed:false},
    {id: 2, name:"Learn React", priority: "Medium", completed:true},
    {id: 3, name:"Learn .Net Core", priority: "Low", completed:false}
];

const todoListReducer = (state = initState, action)=>{
    switch(action.type) {
        case 'todoList/addTodo':
            return [
                ...state,
                action.payload
            ];
        case 'todoList/updateStatusTodo':
            return state.map(todo => todo.id === action.payload 
                ? {
                    ...todo, 
                    completed : !todo.completed
                } 
                : todo);
            
        default:
            return state;

    }
};
export default todoListReducer;