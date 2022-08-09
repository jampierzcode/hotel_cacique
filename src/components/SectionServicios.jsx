import React from 'react'
import hotelServicios from "../assets/hotelFotos/hotel-servicios.jpeg"

const SectionServicios = () => {
  return (
    <section className="section-servicios" id="servicios">
      <div className="wrapper-servicios flx-a-c section-xl">
        <div className="servicios__info">
          <h2>SERVICIOS</h2>
        </div>
        <div className="servicios__img-1">
          <div className="servicios__img-2">
            <div className="servicios__img-3">
              <div className="servicios__img-4">
                <img src={hotelServicios} alt="hotel-service"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionServicios
