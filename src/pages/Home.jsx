import React from 'react'
import Header from '../components/header/Header'
import Iframe from '../components/iframe/Iframe'
import NavTap from '../components/navTap'
import Numbers from '../components/numbers/Numbers'
import Overview from '../components/overview/Overview'
import SPEAKERS from '../components/SPEAKERS/SPEAKERS'
import RE from '../components/contactUS/index'
import Accordions from '../components/accordion/Accordion'
import Sponser from '../components/sponser/Sponser'
import Footer from '../components/footer/Footer'

function Home() {
  return (
    <>
        <Header/>
        <Overview/>
        <Numbers/>
        <Iframe/>
        <SPEAKERS/>
        <NavTap/>
        <RE/>
        <Accordions/>
        <Sponser/>
        <Footer/>
    </>
  )
}

export default Home