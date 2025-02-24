import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostsRequest } from "../actions"; // Import the action creator

export default function Posts() {
    const dispatch = useDispatch();
    const { posts, loading, error } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(fetchPostsRequest());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Posts</h1>
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
