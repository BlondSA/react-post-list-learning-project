import React from "react";
import MyButton from "../UI/button/my-button";
import { useHistory } from "react-router-dom";

function PostItem(props) {
    const { post, remove } = props;
    const { title, description } = post;
    const router = useHistory();

    return (
        <div className="post">
            <div className="post__content">
                <strong>
                    {post.id}. {title}
                </strong>
                <div>{description}</div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => router.push(`/posts/${post.id}`)}>
                    Открыть
                </MyButton>
                <MyButton onClick={() => remove(post)}>Удалить</MyButton>
            </div>
        </div>
    );
}

export default PostItem;
