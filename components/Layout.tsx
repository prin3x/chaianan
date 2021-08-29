import React, { ReactElement } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'


function Layout({children}): ReactElement {
    return (
        <>
        <Navbar/>
            {children}
        <Footer/>
        </>
    )
}

export default Layout
