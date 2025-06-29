import { Metadata } from 'next';
import Image from 'next/image'
import React from 'react'

export const metadata: Metadata = {
  title: 'İletişim',
  authors: [{ name: 'Eray KESTİR' }, { name: 'Kimberly ANN', url: 'https://kadirlidilkursu.com' }],
  creator: 'Semih ÇINKIR',
  publisher: 'Semih ÇINKIR',
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
		    <div className="columns is-justify-content-center">
			    <div className="column is-6-tablet is-6-desktop is-5-widescreen is-4-fullh">

            <h3>Talep Gönderin</h3>
          <form method="POST" action="https://herotofu.com/start" className="box p-5">
        <label className="is-block mb-4">
          <span className="is-block mb-2">İsim Soyisim</span>
          <input
            name="name"
            type="text"
            className="input"
            placeholder="İsminizi giriniz"
          />
        </label>

        <label className="is-block mb-4">
          <span className="is-block mb-2">Eposta adresi</span>
          <input
            required
            name="email"
            type="email"
            className="input"
            placeholder="örn: xxxx@example.com"
          />
        </label>

        <label className="is-block mb-4">
          <span className="is-block mb-2">Açıklama</span>
          <textarea
            name="message"
            className="textarea"
            rows={4}
            placeholder="Mesaj içeriği..."
          ></textarea>
        </label>

        <div className="mb-4">
          <button type="submit" className="button is-link px-4">Gönder</button>
        </div>

        <div>
          <div className="is-size-7 has-text-right">
            -
            <a
              href="https://herotofu.com/start"
              className="has-text-dark"
              target="_blank"
              >-
            </a>
          </div>
        </div>
      </form>
          </div>
        </div>
      </div>
      
    </section>

   </>
  )
}

export default contactPage
