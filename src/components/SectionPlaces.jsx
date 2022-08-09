import React from 'react'
import placeCuarto from "../assets/habitaciones/place-cuarto.webp"
import placeRestaurant from "../assets/habitaciones/place-restaurant.jpg"
import placeBar from "../assets/habitaciones/place-bar.jpg"
const SectionPlaces = () => {
  return (
    <section class="wrapper-places">
        <div class="place flx-a-c">
        <div class="place__info flx-ja-cc">
            <h2>Hostal Karamolle</h2>
            <h3>Habitaciones</h3>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Architecto aspernatur, similique modi repellendus consequatur,
            nemo veniam fugiat quidem eos commodi nam voluptates, quo deserunt
            laborum hic maxime. Vitae, voluptatum aperiam.
            </p>
            <a href="#">RESERVAR</a>
        </div>
        <div class="place__img">
            <img src={placeCuarto} alt="" />
        </div>
        </div>
        <div class="place flx-a-c">
        <div class="place__info flx-ja-cc">
            <h2>Hostal Karamolle</h2>
            <h3>Restaurante</h3>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Architecto aspernatur, similique modi repellendus consequatur,
            nemo veniam fugiat quidem eos commodi nam voluptates, quo deserunt
            laborum hic maxime. Vitae, voluptatum aperiam.
            </p>
            <a href="#">RESERVAR</a>
        </div>
        <div class="place__img">
            <img src={placeRestaurant} alt="" />
        </div>
        </div>
        <div class="place flx-a-c">
        <div class="place__info flx-ja-cc">
            <h2>Hostal Karamolle</h2>
            <h3>Bar</h3>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Architecto aspernatur, similique modi repellendus consequatur,
            nemo veniam fugiat quidem eos commodi nam voluptates, quo deserunt
            laborum hic maxime. Vitae, voluptatum aperiam.
            </p>
            <a href="#">RESERVAR</a>
        </div>
        <div class="place__img">
            <img src={placeBar} alt="" />
        </div>
        </div>
    </section>
  )
}

export default SectionPlaces