import React, { useState } from "react";
import MyButton from "../UI/button/my-button";
import MyInput from "../UI/input/my-input";

function PostForm({ create, remove }) {
    const [post, setPost] = useState({ title: "", description: "" });

    function addNewPost(e) {
        e.preventDefault();
        const newPost = { ...post, id: Date.now() };
        create(newPost);
        setPost({ title: "", description: "" });
    }

    return (
        <form>
            <MyInput
                value={post.title}
                type="text"
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                placeholder="Назваение поста"
            ></MyInput>
            <MyInput
                value={post.description}
                type="text"
                onChange={(e) =>
                    setPost({ ...post, description: e.target.value })
                }
                placeholder="Описание поста"
            ></MyInput>
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
}

export default PostForm;
