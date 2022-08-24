import { legacy_createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import logger from "redux-logger";
import rootReducer from "./rootReducer";

const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))

export default  store