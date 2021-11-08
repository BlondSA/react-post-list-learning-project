import React, { useState, useEffect, useRef } from "react";
import "../styles/App.css";
import PostList from "../components/post-list/post-list";
import PostForm from "../components/post-form/post-form";
import PostFilter from "../components/post-filter/post-filter";
import MyModal from "../components/UI/my-modal/my-modal";
import MyButton from "../components/UI/button/my-button";
import { usePosts } from "../hooks/use-posts";
import PostService from "../API/post-service";
import Loader from "../components/UI/loader/loader";
import useFetching from "../hooks/use-fetching";
import { getPageCount } from "../utils/pages";
import Pagination from "../components/UI/pagination/pagination";
import Login from "./login";
import { useObserver } from "../hooks/use-observer";
import MySelect from "../components/UI/my-select/my-select";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);

    const [filter, setFilter] = useState({ sort: "", query: "" });
    const [modal, setModal] = useState(false);
    const [userModal, setUserModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const lastElement = useRef();

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const [fetchPosts, isPostsLoading, postError] = useFetching(
        async (limit, page) => {
            const response = await PostService.getAll(limit, page);
            setPosts([...posts, ...response.data]);
            const totalCount = response.headers["x-total-count"];
            setTotalPages(getPageCount(totalCount, limit));
        }
    );

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1);
    });

    useEffect(() => {
        fetchPosts(limit, page);
    }, [page, limit]);

    function createPost(newPost) {
        // setPosts(posts.concat(newPost));
        setPosts([...posts, newPost]);
        setModal(false);
    }

    function removePost(post) {
        setPosts(posts.filter((p) => p.id !== post.id));
    }

    function createUser(newUser) {
        // setUsers(users.concat(newUser));
        setUsers([...users, newUser]);
        setUserModal(false);
    }

    const changePage = (page) => {
        setPage(page);
        fetchPosts(limit, page);
    };

    return (
        <div className="app">
            <MyButton onClick={() => setUserModal(true)}>
                Создать пользователя
            </MyButton>
            <MyModal visible={userModal} setVisible={setUserModal}>
                <Login createUser={createUser} />
            </MyModal>
            <PostFilter filter={filter} setFilter={setFilter} />
            <MySelect
                value={limit}
                defaultValue={"Кол-во элементов на странице"}
                onChange={(value) => setLimit(value)}
                options={[
                    { value: 5, name: "5" },
                    { value: 10, name: "10" },
                    { value: 25, name: "25" },
                    { value: -1, name: "Показать всё" },
                ]}
            />
            {postError && <h1>Произошла ошибка: {postError}</h1>}
            <PostList
                remove={removePost}
                posts={sortedAndSearchedPosts}
                title={"Список постов"}
            />
            <div
                ref={lastElement}
                style={{ height: "20px", backgroundColor: "red" }}
            ></div>
            {isPostsLoading && (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Loader />
                </div>
            )}
            <hr style={{ margin: "15px 0" }} />
            <MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>
            <Pagination
                changePage={changePage}
                page={page}
                totalPages={totalPages}
            />
        </div>
    );
}

export default Posts;
