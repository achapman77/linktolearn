import React from 'react'
import Navbar from './Navbar'
import Theme from "../styles/Theme"

const NavbarWrapper = ({children}) => {
    return (
        <>
            <Theme>
                {children}
                <Navbar />
            </Theme>
        </>
    )
}

export default NavbarWrapper
