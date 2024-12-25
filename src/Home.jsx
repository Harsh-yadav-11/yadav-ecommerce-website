import React from 'react'
import HeroSection from './components/HeroPart'
import Services from './components/Services'
import Trusted from './components/Trusted'

export default function Home() {
  return (<>
      <HeroSection heading='Yadav Store'/>
      <Services/>
      <Trusted/>
      </>
  )
}


