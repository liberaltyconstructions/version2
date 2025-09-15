import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Services from "./components/Services/Services"
import ProjectSlider from "./components/ProjectSlider/ProjectSlider"
import Infrastructure from "./components/ProjectSlider/Infrastructure"
import OurClients from "./components/OurClients/OurClients"
import Testimonial from "./components/Testimonials/Testimonial"

function App() {

  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Infrastructure/>
      <ProjectSlider/>
      <Testimonial/>
      <OurClients/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
