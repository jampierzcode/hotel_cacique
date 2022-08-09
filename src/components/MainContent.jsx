import React from 'react'
import Footer from './Footer'
import SectionGaleria from './SectionGaleria'
import SectionInicio from "./SectionInicio"
import SectionMaps from './SectionMaps'
import SectionQuienesSomos from './SectionQuienesSomos'
import SectionServicios from './SectionServicios'
const MainContent = () => {
  return (
    <main className="main">
      <SectionInicio/>
      <SectionServicios/>
      <SectionQuienesSomos/>
      <SectionGaleria/>
      <SectionMaps/>
      <Footer/>
    </main>
  )
}
export default MainContent
