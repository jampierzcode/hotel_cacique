import React from 'react'

const SectionMaps = () => {
  return (
    <section className="wrapper-maps">
      <div className="section-maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3794.3598211560006!2d-70.2503054!3d-18.0084973!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915acf7a882d45a3%3A0xbfca1dc26ab789d!2sHostal%20Karamolle!5e0!3m2!1ses-419!2spe!4v1659448776825!5m2!1ses-419!2spe"
          width="100%"
          height="600"
          style={{border: 0}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  )
}

export default SectionMaps