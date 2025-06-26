import { Metadata } from 'next';
import Image from 'next/image'
import React from 'react'

export const metadata: Metadata = {
  title: 'İletişim',
};

const contactPage = () => {
  return (
    <>
    
    <header className="section contact-header">
      <div className="container">
        <div className="columns is-desktop is-vcentered">
            <div className="column is-half">
                <h1>İletişime Geçin.</h1>
                <p className="body1">Kadirli Dil Kursu - İletişim </p>
            </div>
            <div className="column is-half">
              <Image src="/assets/images/header/header-contact.png" alt="" width={1158} height={748} priority={true}/>
            </div>
        </div>
      </div>
    </header>

    <section className="section docs">
	    <div className="container">
		    <div className="columns">
			    <div className="column is-full">

            <h3>Talep Gönderin</h3>
          <div className="form">
            <div className="field">
              <label className="label" htmlFor="isim" >Normal input</label>
              <div className="control has-icons-left has-icons-right">
                <input className="input" id="isim" type="email" placeholder="Extra small" />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope fa-xs"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check fa-xs"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <div className="control has-icons-left has-icons-right">
                <input className="input" id="soyisim" type="email" placeholder="Normal" />
                <span className="icon is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-right">
                  <i className="fas fa-check"></i>
                </span>
              </div>
            </div>


          </div>
          </div>
        </div>
      </div>
      
    </section>

   </>
  )
}

export default contactPage
