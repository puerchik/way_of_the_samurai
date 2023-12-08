import s from "./../Dialogs/Dialogs.module.css"

type DialogBoxPropsType = {
    name: string
    message: string
}

export const DialogBox: React.FC<DialogBoxPropsType> = ({ name, message }) => {
    return (
        <div className={s.dialogBox}>
            <span className={s.dialogBoxName}>{name}</span>
            <p className={s.dialogBoxText}>{message}</p>
        </div>
    )
}
