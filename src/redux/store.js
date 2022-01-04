import { createStore } from "redux";
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const composedEnhandcers = composeWithDevTools()
const store = createStore(rootReducer,composedEnhandcers);

export default store;