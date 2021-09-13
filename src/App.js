import React, { useState } from "react";
import Counter from "./components/counter/counter";
import "../src/styles/App.css";
import PostList from "./components/post-list/post-list";
import PostForm from "./components/post-form/post-form";

function App() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: "JavaScript",
            description: "Этот язык мы изучаем",
        },
        {
            id: 2,
            title: "Python",
            description: "Этот язык мы изучаем Python",
        },
        {
            id: 3,
            title: "Java",
            description: "Этот язык мы изучаем J",
        },
        {
            id: 4,
            title: "C++",
            description: "Этот язык мы изучаем C++",
        },
    ]);

    function createPost(newPost) {
        setPosts([...posts, newPost]);
    }

    function removePost(post) {
        setPosts(posts.filter((p) => p.id !== post.id));
    }

    return (
        <div className="app">
            <Counter />
            <PostForm create={createPost} />
            <PostList
                remove={removePost}
                posts={posts}
                title={"Список постов"}
            />
        </div>
    );
}

export default App;
