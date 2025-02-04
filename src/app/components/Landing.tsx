'use client'

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "../styles/index.module.scss";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Landing: React.FC = () => {
  const progressContent = useRef<HTMLSpanElement | null>(null);

  const onAutoplayTimeLeft = (s: unknown, time: number) => {
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <>
      <motion.section
        className={styles.hero}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h1>Plan Funerario de Previsión Familiar</h1>
        <p>Brindamos tranquilidad y respaldo a tu familia</p>
      </motion.section>

      <motion.section
        className={styles.benefits}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2>Cobertura y Beneficios</h2>
        <ul>
          {["Mamá", "Papá", "Esposa", "Hijos", "Solo servicio funerario", "Cofre o ataúd", "Velación 24 horas", "Servicio de cafetería", "Diligencia de ley"].map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </motion.section>

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

      {["pricing", "paymentMethods", "downloadForm", "contact"].map((section, index) => (
        <motion.section
          key={index}
          className={styles[section]}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          {section === "pricing" && (
            <>
              <h2>Costo del Plan</h2>
              <p className={styles.price}>$25 al mes</p>
              <p>Contrato anual con renovación automática</p>
            </>
          )}
          {section === "paymentMethods" && (
            <>
              <h2>Medios de Pago</h2>
              <p>Puedes pagar con:</p>
              <ul>
                <li>Zelle - Número de contacto: <span className={styles.bold}>+1 3216828970</span> (Edgar)</li>
                <li>Tarjeta de Débito</li>
              </ul>
            </>
          )}
          {section === "downloadForm" && (
            <>
              <h2>Descarga el Formulario</h2>
              <p>Descarga el formulario en PDF para completar tu solicitud.</p>
              <a href="/formulario.pdf" download className={styles.button}>
                Descargar Formulario
              </a>
            </>
          )}
          {section === "contact" && (
            <>
              <h2>Contáctanos</h2>
              <p>Para más información, comunícate con nosotros.</p>
              <button className={styles.button}>Enviar Mensaje</button>
            </>
          )}
        </motion.section>
      ))}
    </>
  );
};

export default Landing;