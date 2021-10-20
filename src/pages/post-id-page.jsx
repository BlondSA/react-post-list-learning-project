import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetching from "../hooks/use-fetching";
import PostService from "../API/post-service";
import Loader from "../components/UI/loader/loader";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState({});

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });

    const [fetchComments, isCommentsLoading, commentsError] = useFetching(
        async (id) => {
            const response = await PostService.getByI(id);
            setComments(response.data);
        }
    );

    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);
    }, []);

    console.log(comments);

    return (
        <div>
            <h1>Вы попали на страницу поста c ID = {params.id}</h1>
            {isLoading ? (
                <Loader />
            ) : (
                <div>
                    {post.id}.{post.title}
                </div>
            )}
            <h1>Комментарии</h1>
            {isCommentsLoading ? (
                <Loader />
            ) : (
                <div>
                    {comments.map((comment) => (
                        <div>
                            <h5>{comment.email}</h5>
                            <div>{comment.body}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PostIdPage;
