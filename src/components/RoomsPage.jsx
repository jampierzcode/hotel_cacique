import React from 'react'
import Footer from './Footer'
import SectionHabitaciones from './SectionHabitaciones'
import SectionMaps from './SectionMaps'
import SectionPlaces from './SectionPlaces'

const RoomsPage  = () => {
  return (
    <main className="main">
        <SectionHabitaciones/>
        <SectionPlaces/>
        <SectionMaps/>
        <Footer/>
    </main>
  )
}

export default RoomsPage 