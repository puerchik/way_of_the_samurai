import React from "react";
import s from "./Post.module.css"

type PostPropsType = {

}

export const Post: React.FC<PostPropsType> = (
    {

    }
) => {
    return (
        <div className={s.postWrapper}>
            <div className={s.avatar}></div>
            <span className={s.postText}>It's our new program! Hey!</span>
        </div>
    )
}