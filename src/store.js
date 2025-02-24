import { createStore, combineReducers, applyMiddleware } from "redux"; // 1. Ensure the store is set up to include the saga middleware.
import createSagaMiddleware from "redux-saga"; // 1. Ensure the store is set up to include the saga middleware.
import counterReducer from "./reducers/counterReducer";
import toggleReducer from "./reducers/toggleReducer";
import postsReducer from "./reducers/postsReducer"; // 1. Add postsReducer
import rootSaga from "./sagas"; // 1. Import sagas

const sagaMiddleware = createSagaMiddleware(); // 1. Ensure the store is set up to include the saga middleware.

// Create the Redux store
const rootReducer = combineReducers({
    counter: counterReducer,
    toggle: toggleReducer,
    posts: postsReducer, // 1. Add posts reducer
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware)); // 1. Ensure the store is set up to include the saga middleware.

sagaMiddleware.run(rootSaga); // 1. Ensure the store is set up to include the saga middleware.

export default store;
