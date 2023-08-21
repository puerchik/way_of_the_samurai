import React from "react";
import s from "./NavSidebar.module.css"
import { NavLink } from "react-router-dom";

type NavSidebarPropsType = {

}

export const NavSidebar: React.FC<NavSidebarPropsType> = (
    {

    }
) => {
    return (
        <div className={`backgroundTheme ${s.navSidebar}`}>
            <nav>
                <ul className={s.navSidebarList}>
                    <li className={s.item}>
                        <NavLink activeClassName={s.active} to="/main">Profile</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink activeClassName={s.active} to="/dialogs">Messages</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink activeClassName={s.active} to="/news">News</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink activeClassName={s.active} to="/music">Music</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink activeClassName={s.active} to="/settings">Settings</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}