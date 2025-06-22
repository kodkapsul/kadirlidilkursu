"use client";
import Link from 'next/link'
import React from 'react'

const Header = () => {
    const [isActive, setisActive] = React.useState(false)

    return (
    <nav className="navbar signal-navbar is-fixed-top is-light" role="navigation" aria-label="main navigation">
        <div className="container">
            <div className="navbar-brand">
                <Link className="navbar-item" href="/">KDK</Link>
                
                <a 
                onClick={() => {
                    setisActive(!isActive)
                }}
                role="button" className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
                 aria-label="menu" aria-expanded="false" data-target="signalNavbar">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="signalNavbar" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                <div className="navbar-end">
                    <Link className="navbar-item" href="/">Ana sayfa</Link> 
                    <Link className="navbar-item" href="about">Hakkımızda</Link> 
                    <Link className="navbar-item" href="contact">İletişim</Link> 
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Header
