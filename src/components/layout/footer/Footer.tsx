import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faContactBook, faPhone, faSquareEnvelope, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

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
              <li><Link href="mailto:iletisim@kadirlidilkursu.com" ><FontAwesomeIcon icon={faSquareEnvelope} className="fa-fw" /> iletisim@kadirlidilkursu.com</Link>
              </li>
              <li><a href="tel:0 (535) 025 09 50" > <FontAwesomeIcon icon={faPhone} className="fa-fw" /> 0 (535) 025 09 50 </a>
              </li>
              <li>
                <h6><a href="https://www.instagram.com/kadirlidilkursu/" target="_blank">
                <FontAwesomeIcon icon={faThumbsUp} className="fa-fw" /> Instagram</a></h6>
              </li>
              
              <li><a href="https://www.facebook.com/eraykestir" target="_blank">
                <FontAwesomeIcon icon={faThumbsUp} className="fa-fw" />Facebook</a>
              </li>
            </ul>
          </div>

          <div className="column">
            <strong>Destek</strong>
            <ul>
              <li><a href="https://destek.kadirlidilkursu.com/">Yardım</a></li>
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
