import React from "react"
import Navbar from "../components/sections/Navbar/Navbar"
import Info from "../components/sections/Info/Info"
import AboutMe from "../components/sections/About-Me/AboutMe"
import Projects from "../components/sections/Projects/Projects"
import Contact from "../components/sections/Contact/Contact"
import Footer from "../components/sections/Footer/Footer"

export default function Home() {
  return (
    <div className="app">
    <Navbar />
    <Info />
    <AboutMe />
    <Projects />
    <Contact />
    <Footer />
    </div>
  )
}
