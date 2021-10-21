import React, { useState, useEffect } from "react";
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

function Posts() {
    const [posts, setPosts] = useState([]);

    const [filter, setFilter] = useState({ sort: "", query: "" });
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit] = useState(10);
    const [page, setPage] = useState(1);

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const [fetchPosts, isPostsLoading, postError] = useFetching(
        async (limit, page) => {
            const response = await PostService.getAll(limit, page);
            setPosts(response.data);
            const totalCount = response.headers["x-total-count"];
            setTotalPages(getPageCount(totalCount, limit));
        }
    );

    useEffect(() => {
        fetchPosts(limit, page);
    }, []);

    function createPost(newPost) {
        // setPosts(posts.concat(newPost));
        setPosts([...posts, newPost]);
        setModal(false);
    }

    function removePost(post) {
        setPosts(posts.filter((p) => p.id !== post.id));
    }

    const changePage = (page) => {
        setPage(page);
        fetchPosts(limit, page);
    };

    return (
        <div className="app">
            <PostFilter filter={filter} setFilter={setFilter} />
            {postError && <h1>Произошла ошибка: {postError}</h1>}
            {isPostsLoading ? (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Loader />
                </div>
            ) : (
                <PostList
                    remove={removePost}
                    posts={sortedAndSearchedPosts}
                    title={"Список постов"}
                />
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
