import React from "react";

type NavSidebarPropsType = {

}

export const NavSidebar: React.FC<NavSidebarPropsType> = (
    {

    }
) => {
    return (
        <div className="nav-sidebar background-theme">
            <nav className="nav-sidebar__wrapper">
                <ul className="nav-sidebar__list">
                    <li>Profile</li>
                    <li>Messages</li>
                    <li>News</li>
                    <li>Music</li>
                    <li>Settings</li>
                </ul>
            </nav>
        </div>
    )
}