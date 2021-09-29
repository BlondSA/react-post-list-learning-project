import React, { useState, useMemo } from "react";
import "../src/styles/App.css";
import PostList from "./components/post-list/post-list";
import PostForm from "./components/post-form/post-form";
import PostFilter from "./components/post-filter/post-filter";
import MyModal from "./components/UI/my-modal/my-modal";
import MyButton from "./components/UI/button/my-button";

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

    const [filter, setFilter] = useState({ sort: "", query: "" });
    const [modal, setModal] = useState(false);

    const sortedPosts = useMemo(() => {
        if (filter.sort !== "") {
            return [...posts].sort((a, b) =>
                a[filter.sort].localeCompare(b[filter.sort])
            );
        }
        return posts;
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter((post) =>
            post.title.toLowerCase().includes(filter.query.toLowerCase())
        );
    }, [filter.query, sortedPosts]);

    function createPost(newPost) {
        // setPosts(posts.concat(newPost));
        setPosts([...posts, newPost]);
        setModal(false);
    }

    function removePost(post) {
        setPosts(posts.filter((p) => p.id !== post.id));
    }

    return (
        <div className="app">
            <PostFilter filter={filter} setFilter={setFilter} />
            <PostList
                remove={removePost}
                posts={sortedAndSearchedPosts}
                title={"Список постов"}
            />
            <hr style={{ margin: "15px 0" }} />
            <MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>
        </div>
    );
}

export default App;
