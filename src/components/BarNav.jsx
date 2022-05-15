import React from 'react'
import {Nav, NavItem, NavLink } from 'reactstrap'

function BarNav() {
    const home = document.querySelector('nav-home')
    console.log(home)
    //home.style.backgroundColor = "red"
  /*   const noRefCheck= ( e )=>{
        e.preventDefualt()
        e.classList.toggle("active")
        e.style.background = "red"

    } */

    return (        
            <div>
                <Nav tabs  className='d-flex justify-content-center position-fixed bottom-0 col-12 bg-light'>
                    <NavItem >
                        <NavLink
                            id='nav-home'
                            className="active"
                            onClick={function noRefCheck(){}}
                        >
                           <i class="bi bi-house"></i>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            id="nav-user"
                            className=""
                            onClick={function noRefCheck() {}}
                        >
                            <i class="bi bi-person"></i>
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
    )
}

export default BarNav