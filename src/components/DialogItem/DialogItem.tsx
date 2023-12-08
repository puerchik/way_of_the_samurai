import { NavLink } from "react-router-dom"
import s from "./../Dialogs/Dialogs.module.css"

type DialogItemPropsType = {
    name: string
    id: number
}

export const DialogItem: React.FC<DialogItemPropsType> = ({ name, id }) => {
    return (
        <li className={s.item}>
            <NavLink activeClassName={s.active} to={`/dialogs/ ${id}`}>{name}</NavLink>
        </li>
    )
}
