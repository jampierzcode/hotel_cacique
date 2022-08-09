import React from 'react'
import habDoble from "../assets/habitaciones/doble.jpg"
const SectionInicio = () => {
  return (
    <section className="section-inicio" id="inicio">
        <div className="swiper portada-swiper">
            <div className="swiper-wrapper">
            <div className="swiper-slide slide-portada">
                <img src={habDoble} alt=""/>
                <div className="overlay-slide">

                </div>
                <div className="content-slide">

                <h1>Hostal Karamolle</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            </div>
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
    </section>
  )
}

export default SectionInicio
