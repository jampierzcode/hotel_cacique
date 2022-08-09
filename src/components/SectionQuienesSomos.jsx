import React from 'react'
import hotelFoto from "../assets/hotelFotos/hotel.jpg"

const SectionQuienesSomos = () => {
  return (
    <section className="section-quienesSomos" id="quienessomos">
        <div className="wrapper-quienesSomos">
        <div className="quienes-somos__part1 flx-a-c section-l">
            <h2>¿QUIÉNES SOMOS?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, aspernatur, placeat corrupti atque distinctio voluptatem accusantium sapiente ducimus animi ea possimus laboriosam autem beatae corporis ex quas! Iste, earum neque?</p>
        </div>
        <div className="quienes-somos__part2-wrapper">
            <div className="quienes-somos__part2 flx-a-c section-l">
            <img src={hotelFoto} alt="foto_hotel"/>
            <div className="quienes-somos__description">
                <h2>Nuestros clientes son primero</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ad est, ea ex eos repellendus aspernatur, dolores quibusdam cumque animi quia iure sequi vero magnam ut quam ratione commodi dignissimos.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit alias aliquid voluptates unde cupiditate deserunt odio modi temporibus, quis earum reiciendis officiis accusamus sequi, at dolor? In nulla possimus ab!
                </p>
            </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default SectionQuienesSomos
