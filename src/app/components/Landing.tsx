'use client'

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "../styles/index.module.scss";

const Landing: React.FC = () => {
  const progressContent = useRef<HTMLSpanElement | null>(null);

  const onAutoplayTimeLeft = (s: unknown, time: number) => {
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <>
      <section className={styles.hero}>
        <h1>Plan Funerario de Previsión Familiar</h1>
        <p>Brindamos tranquilidad y respaldo a tu familia</p>
      </section>

      <section className={styles.benefits}>
        <h2>Cobertura y Beneficios</h2>
        <ul>
          {["Mamá", "Papá", "Esposa", "Hijos", "Solo servicio funerario", "Cofre o ataúd", "Velación 24 horas", "Servicio de cafetería", "Diligencia de ley"].map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </section>
      <Swiper
  spaceBetween={30}
  centeredSlides
  autoplay={{ delay: 2500, disableOnInteraction: false }}
  modules={[Autoplay]}
  onAutoplayTimeLeft={onAutoplayTimeLeft}
  className="mySwiper"
>
  {[...Array(5)].map((_, index) => (
    <SwiperSlide key={index}>
      <Image 
        className={styles.slider}
        src={`/slide-${index + 1}.jpg`} 
        alt={`Slide ${index + 1}`} 
        width={800} 
        height={400} 
        priority
      />
    </SwiperSlide>
  ))}
</Swiper>


      <section className={styles.pricing}>
        <h2>Costo del Plan</h2>
        <p className={styles.price}>$25 al mes</p>
        <p>Contrato anual con renovación automática</p>
      </section>

      <section className={styles.paymentMethods}>
        <h2>Medios de Pago</h2>
        <p>Puedes pagar con:</p>
        <ul>
          <li>
            Zelle - Número de contacto: <span className={styles.bold}>3216828970</span> (Edgar)
          </li>
          <li>Tarjeta de Débito</li>
        </ul>
      </section>

      <section className={styles.downloadForm}>
        <h2>Descarga el Formulario</h2>
        <p>Descarga el formulario en PDF para completar tu solicitud.</p>
        <a href="/formulario.pdf" download className={styles.button}>
          Descargar Formulario
        </a>
      </section>

      <section className={styles.contact}>
        <h2>Contáctanos</h2>
        <p>Para más información, comunícate con nosotros.</p>
        <button className={styles.button}>Enviar Mensaje</button>
      </section>
    </>
  );
};

export default Landing;
