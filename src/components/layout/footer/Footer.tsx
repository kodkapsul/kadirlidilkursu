import React from 'react'
import Link from 'next/link'

import Facebook from "../../icons/facebook";
import Instagram from "../../icons/instagram";
import Mail from "../../icons/mail"
import Phone from "../../icons/phone"
import Support from "../../icons/support"

const Footer = () => {
  return (
   
    <footer className="footer">
      <div className="container">
        <div className="columns">

          <div className="column is-two-fifths">
            <span><h4>Kadirli Dil Kursu</h4></span><br/> 
            Şehit Kansu Küçükateş Mah. 1858 Sok. No:21 
            <br/> 
            Osmaniye/Kadirli
          </div>
          
          <div className="column widget widget-contact">
            <strong>İletişim</strong>
            <ul>
              <li><Link href="mailto:iletisim@kadirlidilkursu.com" ><Mail size="1.2em"/> iletisim@kadirlidilkursu.com</Link></li>
              <li><Link href="tel:0 (535) 025 09 50" ><Phone size="1.2em"/> 0 (535) 025 09 50 </Link></li>
              <li><a href="https://www.instagram.com/kadirlidilkursu/" target="_blank" rel="nofollow"><Instagram size="1.2em"/> Instagram</a></li>
              <li><a href="https://www.facebook.com/eraykestir" target="_blank" rel="nofollow"> <Facebook size="1.2em"/> Facebook</a></li>
            </ul>
          </div>

          <div className="column widgget widget-contact">
            <strong>Destek</strong>
            <ul>
              <li><a href="/contact"> <Support size="1.2em"/> Yardım</a></li>
            </ul>
          </div>

          <div className="column is-two-fifths is-hidden-tablet">
            <span className="copyright">&copy; 2025&ndash;</span>Semih ÇINKIR<br/> 
          </div>
        </div>
      </div>
    </footer>
  
  )
}

export default Footer
