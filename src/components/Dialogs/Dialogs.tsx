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
    return (
        <div className={`backgroundTheme mainWidth ${s.dialogsWrapper}`}>
            <ul className={s.dialogsNamesWrapper}>
                <DialogItem name="Andrey" id={1} />
                <DialogItem name="Dmitry" id={2} />
                <DialogItem name="Sasha" id={3} />
                <DialogItem name="Sveta" id={4} />
                <DialogItem name="Viktor" id={5} />
                <DialogItem name="Valera" id={6} />
            </ul>
            <div className={s.dialogsTextWrapper}>
                <DialogBox name="Dmitry" message="Hello, how are you?"/>
                <DialogBox name="Me" message="Hi, I'm fine. How are you?"/>
            </div>
        </div>
    )
}
