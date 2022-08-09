import {Link } from "react-router-dom";

const RoomSlide = ({ title, img, services, url }) => {
  return (
    <div class="swiper-slide-v">
      <Link to={`/habitaciones/${url}`}>
        <div class="habitaciones-titulo">
            <img src={img} alt="" class="img-fluid" />
            <h1>{title}</h1>
        </div>
      </Link>
      <div class="habitacion-description">
        <h2 class="habitacion-description__title">Servicios:</h2>
        <div class="services flx-a-c">
        {
            services.map(service=>(
                <div class="icon-service flx-a-c">
                <img
                  class="icon-service__img"
                  src={service.service}
                  alt=""
                />
                <p>{service.nameService}</p>
              </div>
            ))
        }
        </div>
      </div>
      <div class="habitacion-reservar flx-ja-cc">
        <Link class="a-wsp" to={`/habitaciones/${url}`}>
          Ver Habitación
        </Link>
      </div>
    </div>
  );
};

export default RoomSlide;
