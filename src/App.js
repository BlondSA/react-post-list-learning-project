import React, { useState, useMemo } from "react";
import Counter from "./components/counter/counter";
import "../src/styles/App.css";
import PostList from "./components/post-list/post-list";
import PostForm from "./components/post-form/post-form";
import MySelect from "./components/UI/my-select/my-select";
import MyInput from "./components/UI/input/my-input";

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

    const [selectedSort, setSelectedSort] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    // const sortedPosts = getSortedPosts();
    const sortedPosts = useMemo(()=> {
        console.log("Сортировка")
        if (selectedSort) {
            return [...posts].sort((a, b) =>
                a[selectedSort].localeCompare(b[selectedSort])
            );
        }
        return posts;
    }, [selectedSort, posts]);

    function createPost(newPost) {
        // setPosts(posts.concat(newPost));
        setPosts([...posts, newPost]);
    }

    function removePost(post) {
        setPosts(posts.filter((p) => p.id !== post.id));
    }

    function sortPosts(sort) {
        setSelectedSort(sort);
    }

    return (
        <div className="app">
            <Counter />
            <MyInput
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Поиск..."
            ></MyInput>
            <hr style={{ margin: "15px 0" }} />
            <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaultValue="Сортировка"
                options={[
                    { value: "title", name: "По названию" },
                    { value: "description", name: "По описанию" },
                ]}
            ></MySelect>
            {posts.length ? (
                <PostList
                    remove={removePost}
                    posts={sortedPosts}
                    title={"Список постов"}
                />
            ) : (
                <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>
            )}
            <PostForm create={createPost} />
        </div>
    );
}

export default App;
