import React, { useState, useEffect } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { Link, Outlet, useLocation } from "react-router-dom"

function BarNav() {
    let [activeHome, setActiveHome] = useState("")
    let [activeUser, setActiveUser] = useState("")
    let location = useLocation()

    useEffect(() => {
        switch (location.pathname) {
            case "/home":
                setActiveHome("active");
                setActiveUser("");

                break;
            case "/editProfile":
                setActiveUser("active");
                setActiveHome("")

                break
            default:
                break;
        }
    })

    return (
        <div>
            <Nav tabs className='d-flex justify-content-center position-fixed bottom-0 col-12 bg-light'>
                <NavItem >
                    <NavLink className={activeHome} >
                        <Link to={"/home"}>
                            <i class="bi bi-house"></i>
                            {' '}
                            Home
                        </Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={activeUser} >
                        <Link to={"/editProfile"}>
                            <i class="bi bi-person"></i>
                            {' '}
                            Perfil
                        </Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink >
                        <Link to={"/"}>
                            <i class="bi bi-arrow-bar-left"></i>
                            {' '}
                            Salir
                        </Link>
                    </NavLink>
                </NavItem>
            </Nav>
            < Outlet />
        </div>
    )
}

export default BarNav