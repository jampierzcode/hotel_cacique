import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import RoomSlide from "./RoomSlide";
import TemplateRooms from "../template/TemplateRooms";

const SectionHabitaciones = () => {

  return (
    <section class="section-habitaciones" id="habitaciones">
      <div class="wrapper-habitaciones section-xl">
        <div class="habitaciones-info">
          <h3 class="habitaciones-info__h3">
            Una excelente experiencia y confort
          </h3>
          <h2 class="habitaciones-info__title">NUESTRAS HABITACIONES</h2>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={0}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
                slidesPerView:1 ,
                spaceBetween: 0,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            1024: {
                slidesPerView:3 ,
                spaceBetween: 0,
            },
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
            {
            TemplateRooms.map(room=>(
            <SwiperSlide>
                <RoomSlide title={room.title} img={room.img} services={room.services} url={room.url}/>
            </SwiperSlide>
            ))
            }
        </Swiper>
      </div>
    </section>
  );
};

export default SectionHabitaciones;
