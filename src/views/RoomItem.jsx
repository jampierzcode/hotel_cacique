import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import Footer from "../components/Footer";
import SectionMaps from "../components/SectionMaps";
import SectionPlaces from "../components/SectionPlaces";
import TemplateRooms from "../template/TemplateRooms";
const RoomItem = () => {
  let { habitacion } = useParams();
  const room = TemplateRooms.find((element) => element.url == habitacion);
  return (
    <>
      <div class="room-container">
        <div class="room section-l">
          <div className="room__galeria">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {room.gallery.map((archivo) => (
                <SwiperSlide>
                  <div className="room__foto">
                  <img src={archivo.foto} alt="foto-habitacion" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="room__info">
            <div className="room__price-wrapper">
              <div class="room__price flx-ja-cc">{`s/. ${room.price} x noche`}</div>
            </div>
            <div class="room__services">
              <h2>Servicios:</h2>
              <div class="services flx-a-c">
                {room.services.map((service) => (
                  <div class="icon-service flx-a-c">
                    <img
                      class="icon-service__img"
                      src={service.service}
                      alt=""
                    />
                    <p>{service.nameService}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="room__reservar-wrapper">
              <Link class="room__reservar" to={`/habitaciones/${room.url}`}>
                RESERVAR AHORA
              </Link>
            </div>
          </div>
        </div>
        <div className="room__description-container section-l">
          <div className="room__description">
            <h1 className="room__title">{`Habitación ${room.title}`}</h1>
            <div className="room__title-wrapper">
              <h2 className="room__tittle2">Detalle de habitación</h2>
              <p className="room__details">
                {`La habitación ${room.title} `}cuenta con las siguientes
                caracteristicas:<br></br>
                {room.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <SectionPlaces />
      <SectionMaps />
      <Footer />
    </>
  );
};

export default RoomItem;
