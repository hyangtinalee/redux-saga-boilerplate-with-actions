import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
    fetchPostsRequest,
    fetchPostsSuccess,
    fetchPostsFailure,
} from "../actions"; // Import action creators

// API call using axios
const fetchPostsApi = () => {
    return axios.get("https://jsonplaceholder.typicode.com/posts");
};

// Worker saga: Fetch posts (generator function)
function* fetchPosts() {
    try {
        const response = yield call(fetchPostsApi); // Use axios call defined above
        // yield put({ type: "FETCH_POSTS_SUCCESS", payload: response.data });
        yield put(fetchPostsSuccess(response.data)); // Dispatch success action
    } catch (error) {
        // yield put({ type: "FETCH_POSTS_FAILURE", payload: error.message });
        yield put(fetchPostsFailure(error.message)); // Dispatch failure action
    }
}

// Root saga: Watches for FETCH_POSTS_REQUEST action and triggers fetchPosts
export default function* rootSaga() {
    // yield takeEvery("FETCH_POSTS_REQUEST", fetchPosts);
    yield takeEvery(fetchPostsRequest().type, fetchPosts);
}
