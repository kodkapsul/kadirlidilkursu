import React from "react";
import Image from 'next/image'
import Link from "next/link";
import { Metadata } from "next";
//import HeroImage from 'herofoto.jpg'
import Training from "../../../components/icons/training"
import Book from "../../../components/icons/book"
import Fileclock from "../../../components/icons/fileclock"

export const metadata: Metadata = {
  title: 'Ana Sayfa',
};

const Home = () => {
  return (
<>
  <section className="hero is-medium is-link" style={{ backgroundImage: 'url(images/heroMavi.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
    <div className="hero-body">
      <p className="title">Kadirli Dil Kursu</p>
      <p className="subtitle"> Kimberly ANN </p>
    </div>
  </section>

  <section className="why-signal section">
  <div className="container">
    <div className="columns is-centered">
      <div className="column has-text-centered">
        <h2>Neden Kadirli Dil Kursu?</h2>
        <p className="body1"> 
          Öğrencilerimizin başarısı bizim en büyük motivasyon kaynağımızdır. 
          Hedeflerinize ulaşmanız için size her adımda destek oluyoruz.
          Düzenli geri bildirimler, deneme sınavları ve performans değerlendirmeleri ile 
          gelişiminizi sürekli takip ediyoruz...
        </p>
        </div>
      </div>
    </div>
    </section>

    <section className="section features">
      <div className="container">
        <div className="columns is-centered">
          
          <div className="column is-one-third has-text-centered">
            <div className="box">
              
              <figure className="circle is-flex has-image-centered has-background-warning-50">
                <Book stroke='white'/>
              </figure>
              
             {/* <img src="assets/images/features/Media.png"/> */}
              <h3>Modern ve Donanımlı Eğitim Ortamı</h3>
              <p className="body2">
                Kadirli Dil Kursu olarak, öğrencilerimizin konforu ve verimliliği için modern ve donanımlı sınıflar sunuyoruz.
                Teknolojiyle desteklenen ders materyalleri ve interaktif öğrenme araçları ile dil öğrenme sürecinizi destekliyoruz.
              </p>
            </div>
          </div>


          <div className="column  has-text-centered">
            <div className="box">
             {/* <img src="assets/images/features/Media.png"/> */}
              <figure className="circle is-flex has-image-centered has-background-primary-35">
                <Training stroke="white"/>
              </figure>
              <h3>Başarı Odaklı Yaklaşım</h3>
              <p className="body2">
                Öğrencilerimizin başarısı, bizim en büyük motivasyon kaynağımızdır. Hedeflerinize ulaşmanız için size her adımda destek oluyoruz. Düzenli geri bildirimler, deneme sınavları ve performans değerlendirmeleri ile gelişiminizi sürekli takip ediyoruz.
              </p>
            </div>
          </div>


          <div className="column has-text-centered">
            <div className="box">
             {/* <img src="assets/images/features/Media.png"/> */}
             <figure className="circle is-flex has-image-centered has-background-link-75">
                <Fileclock stroke="white"/>
              </figure>
              <h3>Esnek Ders Programları</h3>
              <p className="body2">
                Yoğun iş veya okul hayatınıza uygun esnek ders programları sunarak, dil öğrenmeyi hayatınızın bir parçası haline getiriyoruz. Hafta içi ve hafta sonu seçenekleri ile zamanınızı en verimli şekilde değerlendirmenizi sağlıyoruz.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>


    <section className="section information">
      <div className="container">
        <div className="columns is-desktop">
          <div className="column">
            
            <Image className="card-img" src="images/onlineLanguage.jpg" alt="" width={300} height={300}/>
            
          </div>
          <div className="column is-one-third">
            <h2>Kadirli Dil Kursu.</h2>
            <p className="body1">
                Kadirli Dil Kursu ile geleceğinize yatırım yapın....
            </p>
            </div>
          </div>
        </div>
    </section>
    <section className="section information">
      <div className="container">
        <div className="columns is-desktop">
          <div className="column is-hidden-desktop">
            
            <Image src="images/GeneralEnglish.jpg" alt="" width={300} height={300}/>
          </div>
          <div className="column is-one-third">
            <h2>Hakkımızda</h2>
            <p className="body1">
                Kadirli Dil Kursu asıl meslekleri öğretmenlik olan Türk ve Yabancı eğitmenlerden oluşan uzman eğitim ve yönetim kadrosu ile gelişen teknolojiyi takip ederek sektördeki saygın ve güvenilir konumunu her yıl güçlendirirken, bir yandan da profesyonel ve kurumsal yaklaşım ile kaliteli hizmet vermeyi amaç edinmiştir.
                <br/><br/>
                <Link className="button button2" href="about"> Devamı </Link>
            </p>
          </div>
          <div className="column is-hidden-touch has-text-right">
              <Image src="images/GeneralEnglish.jpg" alt="" width={300} height={300}/>
          </div>
        </div>
      </div>
    </section>



</>  
  )
}

/*
<div className="column mobile-screenshots">
							<Image className="screenshot1" src="herofoto.jpg" alt="" width={500} height={300}/>
              <Image className="screenshot2" src="herofoto.jpg" alt="" width={500} height={300}/>
						</div>
            */
//style = "background: url('/img/pic.png') no-repeat right; background-size: contain;"

export default Home