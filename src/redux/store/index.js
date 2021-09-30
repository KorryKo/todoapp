import {createStore} from "redux";
import reducers from "../reducers";
import "regenerator-runtime/runtime";

const store = createStore(reducers)

export default store;