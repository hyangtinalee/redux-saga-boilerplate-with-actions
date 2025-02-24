import React from "react";
// import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostsRequest } from "../actions"; // Import the action creator

export default function Posts() {
    const dispatch = useDispatch();
    const { posts, loading, error } = useSelector((state) => state.posts);

    // Either dispatch an action using useEffect (for dispatching upon component mount) or button click like below
    // This is a common pattern for fetching data as soon as a component loads, providing a seamless user experience without requiring manual interaction

    // useEffect(() => {
    //     dispatch(fetchPostsRequest()); // Dispatch the fetch request action
    // }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Posts</h1>
            <button
                onClick={() => {
                    dispatch(fetchPostsRequest());
                }}
            >
                Fetch Posts
            </button>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <h4>{post.userId}</h4>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
