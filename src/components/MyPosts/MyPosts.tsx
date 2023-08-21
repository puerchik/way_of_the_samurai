import React from "react";
import { Post } from "./Post/Post";
import s from "./MyPosts.module.css"

type MyPostsPropsType = {

}

export const MyPosts: React.FC<MyPostsPropsType> = (
    {

    }
) => {
    return (
        <div className={s.myPosts}>
            <div className={s.headerPostsWrapper}>
                <h3>My posts</h3>
                <textarea></textarea>
                <button>Send</button>
            </div>
            <div className={s.postsWrapper}>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}