import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Header from "./components/Header/Header"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Services from "./components/Services/Services"
import Work from "./components/Projects/Work"
import Testimonial from "./components/Testimonials/Testimonial"

function App() {

  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Work/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
