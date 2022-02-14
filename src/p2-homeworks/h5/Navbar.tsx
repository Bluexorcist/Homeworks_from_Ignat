import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css"

type ClassActiveType = ((props: { isActive: boolean }) => string)


function Navbar() {
    const [open, setOpen] = useState(false)
    const classActive: ClassActiveType = ({isActive}) => isActive ? s.active : s.item
    return (
        <div className={s.container}>
            <button className={s.arrow} onClick={() => setOpen(!open)}>⬇</button>
            <div className={open ? s.nav : s.closed}>

                <NavLink className={open ? classActive : s.closed} to='/pre-junior'>
                    Pre-Junior
                </NavLink>
                <NavLink className={open ? classActive : s.closed} to='/junior'>
                    Junior
                </NavLink>
                <NavLink className={open ? classActive : s.closed} to='/junior-plus'>
                    Junior-Plus
                </NavLink>

            </div>
        </div>
    )
}

export default Navbar
