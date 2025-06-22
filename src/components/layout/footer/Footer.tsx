import React from 'react'

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
          
          <div className="column">
            <strong>Sosyal</strong>
            <ul>
              <li><a href="https://www.instagram.com/signal_app/" target="_blank">Instagram</a></li>
              <li><a href="https://x.com/signalapp" target="_blank">X</a></li>
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
