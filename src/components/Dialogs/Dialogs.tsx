import React from "react";
import s from "./Dialogs.module.css"
import { NavLink } from "react-router-dom";

type DialogsPropsType = {

}

export const Dialogs: React.FC<DialogsPropsType> = (
    {

    }
) => {
    return (
        <div className={`backgroundTheme mainWidth ${s.dialogsWrapper}`}>
            <ul className={s.dialogsNamesWrapper}>
                <li className={s.item}>
                    <NavLink activeClassName={s.active} to={'/dialogs/1'}>Andrey</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink activeClassName={s.active} to={'/dialogs/2'}>Dmitry</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink activeClassName={s.active} to={'/dialogs/3'}>Sasha</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink activeClassName={s.active} to={'/dialogs/4'}>Sveta</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink activeClassName={s.active} to={'/dialogs/5'}>Viktor</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink activeClassName={s.active} to={'/dialogs/6'}>Valera</NavLink>
                </li>
            </ul>
            <div className={s.dialogsTextWrapper}>
                <div className={s.dialogBox}>
                    <span className={s.dialogBoxName}>Dmitry</span>
                    <p className={s.dialogBoxText}>Hello, how are you?</p>
                </div>
                <div className={s.dialogBox}>
                    <span className={s.dialogBoxName}>Me</span>
                    <p className={s.dialogBoxText}>Hi, I'm fine. How are you?</p>
                </div>
            </div>
        </div>
    )
}