"use client";
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const Header = () => {
    const [isActive, setisActive] = React.useState(false)

    return (
    <nav className="navbar is-fixed-top is-light" role="navigation" aria-label="main navigation">
        <div className="container">
            
            <div className="navbar-brand">
                <Link className="logo" href="/">
                  <Image className="" alt="Logo" src="assets/images/logo.png" width={210} height={70} priority={false}/>
            </Link>
            
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
