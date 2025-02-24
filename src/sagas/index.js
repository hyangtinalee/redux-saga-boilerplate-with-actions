import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

// API call using axios
const fetchPostsApi = () => {
    return axios.get("https://jsonplaceholder.typicode.com/posts");
};

// Worker saga: Fetch posts (generator function)
function* fetchPosts() {
    try {
        const response = yield call(fetchPostsApi); // Use axios call defined above
        yield put({ type: "FETCH_POSTS_SUCCESS", payload: response.data }); // Use response.data
    } catch (error) {
        yield put({ type: "FETCH_POSTS_FAILURE", payload: error.message });
    }
}

export default function* rootSaga() {
    yield takeEvery("FETCH_POSTS_REQUEST", fetchPosts);
}
