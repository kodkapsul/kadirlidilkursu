"use client";
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const Header = () => {
    const [isActive, setisActive] = React.useState(false)

    // Menüdeki linklere tıklandığında menüyü kapatacak fonksiyon
    const handleMenuClose = () => setisActive(false);

    return (
    <nav className="navbar is-fixed-top has-shadow is-light" role="navigation" aria-label="main navigation">
        <div className="container">
            
            <div className="navbar-brand">
                <Link className="logo" href="/">
                  <Image className="" alt="Logo" src="assets/images/logo.png" width={210} height={70} priority={true}/>
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
                    <Link className="navbar-item" href="/" onClick={handleMenuClose}>Ana sayfa</Link> 
                    <Link className="navbar-item" href="/about" onClick={handleMenuClose}>Hakkımızda</Link> 
                    <Link className="navbar-item" href="/contact" onClick={handleMenuClose}>İletişim</Link> 
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Header
