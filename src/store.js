import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import counterReducer from "./reducers/counterReducer";
import toggleReducer from "./reducers/toggleReducer";
import postsReducer from "./reducers/postsReducer";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

// Create the Redux store
const rootReducer = combineReducers({
    counter: counterReducer,
    toggle: toggleReducer,
    posts: postsReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
