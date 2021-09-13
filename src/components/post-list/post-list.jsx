import React from "react";
import PostItem from "../post-item/post-item";

const PostList = ({ posts, title, remove }) => {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>{title}</h1>
            {posts.map((post, index) => (
                <PostItem number={index + 1} remove={remove} key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostList;
