import React from "react";
import MyButton from "../UI/button/my-button";

function PostItem(props) {
    const { post, number, remove } = props;
    const { title, description } = post;

    return (
        <div className="post">
            <div className="post__content">
                <strong>
                    {number}. {title}
                </strong>
                <div>{description}</div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => remove(post)}>Удалить</MyButton>
            </div>
        </div>
    );
}

export default PostItem;
