import { Metadata } from 'next';
import Image from 'next/image';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'İletişim',
  authors: [{ name: 'Eray KESTİR' }, { name: 'Kimberly ANN', url: 'https://kadirlidilkursu.com' }],
  creator: 'Semih ÇINKIR',
  publisher: 'Semih ÇINKIR',
};

export default function ContactPage() {
  return (
    <>
      <header className="section contact-header">
        <div className="container">
          <div className="columns is-desktop is-vcentered">
            <div className="column is-half">
              <h1>İletişime Geçin.</h1>
              <p className="body1">Anasayfa - İletişim </p>
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
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
