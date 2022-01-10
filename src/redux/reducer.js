import { combineReducers } from "redux";
import filterReducer from "../components/Filters/reducer";
import todoListReducer from "../components/TodoList/reducer";

// const rootReducer = (state ={}, action)=>{
//     return {
//         todoList: todoListReducer(state.todoList, action),
//         filters: filterReducer(state.filters, action)
//     };
// };

const rootReducer = combineReducers ({
    todoList: todoListReducer,
    filters: filterReducer
});
export default rootReducer;