import React from 'react'
import Header from "./components/header/Header"
import NavComponent from "./components/nav/Nav"  
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Services from "./components/services/Services"
import Portfolio from "./components/portfolio/Portfolio"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import TechStats from './components/TechStats/TechStats'


const App = () => {
  return (
    <>
        <Header />
        <NavComponent />  
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <TechStats />
        <Testimonials />
        <Contact />
        <Footer />
    
    </>
  )
}

export default App
