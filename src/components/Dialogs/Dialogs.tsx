import React from "react";
import s from "./Dialogs.module.css"
import { DialogItem } from "../DialogItem/DialogItem";
import { DialogBox } from "../DialogBox/DialogBox";

type DialogsPropsType = {

}

export const Dialogs: React.FC<DialogsPropsType> = (
    {

    }
) => {

    const users = [
        { id: 1, name: "Andrey" },
        { id: 2, name: "Dmitry" },
        { id: 3, name: "Sasha" },
        { id: 4, name: "Sveta" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Valera" }
    ]

    const dialogs = [
        { name: "Dmitry", message: "Hello, how are you?" },
        { name: "Me", message: "Hi, I'm fine. How are you?" }
    ]


    return (
        <div className={`backgroundTheme mainWidth ${s.dialogsWrapper}`}>
            <ul className={s.dialogsNamesWrapper}>
                {users.map(u => <DialogItem name={u.name} id={u.id} />)}
            </ul>
            <div className={s.dialogsTextWrapper}>
                {dialogs.map(d => <DialogBox name={d.name} message={d.message} />)}
            </div>
        </div>
    )
}
