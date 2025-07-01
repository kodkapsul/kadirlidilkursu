import { Metadata } from 'next';
import Image from 'next/image';
import ContactForm from './ContactForm';
import Link from 'next/link';
//import { MapProvider } from "@/providers/map-provider";
import {Map} from "@/providers/map";
import Mail from '@/components/icons/mail';
import Phone from '@/components/icons/phone';

export const metadata: Metadata = {
  title: 'İletişim',
  authors: [{ name: 'Eray KESTİR' }, { name: 'Kimberly ANN', url: 'https://kadirlidilkursu.com' }],
  creator: 'Semih ÇINKIR',
  publisher: 'Semih ÇINKIR',
};

export default function ContactPage() {
  return (
    <>
      <section className="hero is-medium is-link" style={{ backgroundImage: 'url(images/TransparentHeader.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'} }>
        <div className="hero-body">
          <p className="title">İletişime Geçin.</p>
          <p className="subtitle"> 
            <Link href="/">Anasayfa</Link> - İletişim </p>
        </div>
      </section>
{/*      
      <section className="hero is-medium" style={{backgroundColor: "#EFDFE0", backgroundImage: 'url(images/TransparentHeader.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'} }>
        
		      <div className="columns pl-5">
			      <div className="column is-6 pl-6">
              kolon 1
            </div>
            <div className="column is-6 pl-6">
              kolon 2
            </div>
          </div>
        
      </section>
*/}


      <section className="section features">
        <div className="container">
          <div className="columns is-centered">
            
            <div className="column is-one-third has-text-centered">
              <div className="box">
                <figure className="circle is-flex has-image-centered has-background-light">
                  <Mail />
                </figure>
                <p className="subtitle mt-3">Email/Adres</p>
                <p>iletişim@kadirlidilkursu.com</p>
                <p>Şehit Kansu Küçükateş Mah. 1858 Sok. No:21 </p>
                <p>Osmaniye/Kadirli</p>
              </div>
            </div>

            <div className="column is-one-third has-text-centered">
              <div className="box">
                <figure className="circle is-flex has-image-centered has-background-light">
                  <Phone />
                </figure>
                <p className="subtitle mt-3">Bize Ulaşın</p>
                <p><a href="tel:0 (535) 025 09 50" >0 (535) 025 09 50</a></p>
              </div>
            </div>

          </div>
        </div>
      </section>





      <section className="section docs">
        <div className="container">
          <div className="columns is-justify-content-center">
            <div className="column is-6-tablet is-6-desktop is-5-widescreen is-4-fullh">
              <h3 className="is-size-3">Herhangi bir sorunuz mu var?</h3>
              <p>Aklındaki sorular için dilediğiniz zaman bize ulaşabilirsiniz.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section docs">
        <div className="container">
          <div className="columns is-justify-content-center">
            <div className="column is-full is-link">
             <Map />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/*
<iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8967.869470251171!2d36.067308186980306!3d37.37515188004666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152ecf472aa63a25%3A0x632088119e807579!2sKAD%C4%B0RL%C4%B0%20YABANCI%20D%C4%B0L%20KURSU%20(%20Kimberly%20Ann)!5e0!3m2!1str!2str!4v1751375053327!5m2!1str!2str" 
          width="600"
          height="450" 
          style={{"border":0}} 
          allowFullScreen=""
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
*/