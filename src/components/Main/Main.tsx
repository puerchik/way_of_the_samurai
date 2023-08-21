import React from "react";
import s from "./Main.module.css"
import { MyPosts } from "../MyPosts/MyPosts";

type MainPropsType = {}

export const Main: React.FC<MainPropsType> = (
    {

    }
) => {
    return (
        <div className={`backgroundTheme mainWidth`}>
            <MyPosts />
        </div>
    )
}