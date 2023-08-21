import React from "react";
import s from "./Header.module.css"

type HeaderPropsType = {

}

export const Header: React.FC<HeaderPropsType> = (
    {

    }
) => {
    return (
        <header className={`backgroundTheme ${s.header}`}>Way of the Samurai</header>
    )
}