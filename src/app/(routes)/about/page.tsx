
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: 'Hakkımızda',
};

const aboutPage =() => {
    return ( 
    <>
    <header className="section documentation">
    <div className="container">
    <div className="columns is-desktop is-vcentered">
        <div className="column is-half">
            <h1>Kendinizi Geliştirin.</h1>
            <p className="body1">
                    Kadirli Dil Kursu - Hakkımızda </p>
        </div>
        <div className="column is-half">
            <Image src="/assets/images/header/header-about.png" alt="" width={1136} height={726}/>
        </div>
    </div>
    </div>
    </header>

    <section className="section docs">
	    <div className="container">
		    <div className="columns">
			    <div className="column is-6 has-text-right">
				    <Image src="/assets/images/London-travel.png" alt="" width={542} height={687}/>
			    </div>
          <div className="column is-6">
            <h3>Kadirli Dil Kursu</h3>
            <br />
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