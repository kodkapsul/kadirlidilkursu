
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: 'Hakkımızda',
  authors: [{ name: 'Eray KESTİR' }, { name: 'Kimberly ANN', url: 'https://kadirlidilkursu.com' }],
  creator: 'Semih ÇINKIR',
  publisher: 'Semih ÇINKIR',
};

const aboutPage =() => {
    return ( 
    <>
    <section className="hero is-medium is-link" style={{backgroundImage: 'url(images/TransparentHeader.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      <div className="hero-body">
        <p className="title">Kendinizi Geliştirin.</p>
        <p className="subtitle">
          <Link href="/">Anasayfa</Link> - Hakkımızda 
        </p>
      </div>
    </section>

    <section className="section docs">
	    <div className="container">
		    <div className="columns">
			    <div className="column is-6 has-text-centered">
				    <Image src="/assets/images/London-travel.png" alt="" width={542} height={687}/>
			    </div>
          <div className="column is-6">
            <h3 className="title">Kadirli Dil Kursu</h3>
            
            <p className="decription">
            Kadirli Dil Kursu, asıl meslekleri öğretmenlik olan Türk ve Yabancı eğitmenlerden oluşan uzman eğitim ve 
            yönetim kadrosu ile gelişen teknolojiyi takip ederek sektördeki saygın ve güvenilir konumunu her yıl güçlendirirken, 
            bir yandan da profesyonel ve kurumsal yaklaşım ile kaliteli hizmet vermeyi amaç edinmiştir. <br /><br />
            </p>
            <p className="decription">
            Kadirli Dil Kursu, öğrencilere evrensel bir dil olan İngilizce'yi etkili ve hızlı bir şekilde öğrenme fırsatı sunmaktadır. 
            Sunduğumuz eğitim metotları, öğrencilere kalıcı ve sıkıcı olmayan bir öğrenme deneyimi yaşatır, 
            bu da öğrendiklerinin uzun yıllar boyunca unutulmamasını sağlar. <br /><br />
            </p>
            <p className="decription">
            Kadirli Dil Kursu, öğrencilerini sürekli olarak izlemekte ve dil becerilerinin ilerlemesini desteklemek amacıyla 
            özel olarak hazırlanmış bir sistem uygulamaktadır. 
            Bu sistem, her öğrencinin ihtiyaçlarına özgü çözüm önerileri sunarak bireysel başarıyı hedeflemektedir. 
            Öğrencilerimize sunduğumuz bu kişiselleştirilmiş yaklaşım, dil öğrenme deneyimlerini daha etkili ve tatmin edici hale getirirken, 
            onları geleceğe hazırlamak için önemli bir rol oynamaktadır.<br /><br />

            </p>
          </div>
        </div>
      </div>
    </section>
    </>
    )
}

export default aboutPage