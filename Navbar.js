import React from 'react'
import { NavLink, Nav, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';


const Navbar = () => {
    return (
        <>
            <Nav>
                
                <NavLink to="./Home">
                    <a class="fas fa-hamburger" style={{display: "flex", justifyContent: "flex-start"}} alt="Home" ></a>
                </NavLink>
                
                <Bars />
                <NavMenu>
                    <NavLink to="./Home" activeStyle>
                    About Us
                    </NavLink>
                    <NavLink to="./Home" activeStyle>
                     Contact Us   
                    </NavLink>
                </NavMenu>
                <NavBtn>
                 <NavBtnLink to='./Home'>Sign In</NavBtnLink>
                 </NavBtn>
            </Nav> 
        </>
    )
}

export default Navbar;
