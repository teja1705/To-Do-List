import { createStore } from "redux";
import taskReducer from "./task.reducer";
import logger from "redux-logger";
import { applyMiddleware } from "redux";

const middleware = [logger]
const store = createStore(taskReducer, applyMiddleware(...middleware));

export default store;