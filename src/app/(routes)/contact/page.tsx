import Image from 'next/image'
import React from 'react'

const contactPage = () => {
  return (
    <>
    <header className="section jobs-header">
      
        <div className="columns is-desktop is-vcentered">
          <div className="column is-half">
            <h1>İletişime Geçin</h1>
            <p className="body1">
              Kadirli Dil Kursu - İletişim
            </p>
          </div>
          <div className="column is-half">
          <Image src="/assets/images/header/header-contact.png" alt="" width={1158} height={748}/>
          </div>
        </div>
	  </header>

    <section className="section docs">
	    <div className="container">
		    <div className="columns">
			    
          <div className="column is-full">
				    <h2>Hazırlanıyor</h2>
				    <p className="body1">
					     --
            </p>
          </div>
        </div>
      </div>
    </section>
   </>
  )
}

export default contactPage
