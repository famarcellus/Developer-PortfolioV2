import React from "react"
import Navbar from "../components/sections/Navbar"
import Info from "../components/sections/Info"
import AboutMe from "../components/sections/AboutMe"
import Projects from "../components/sections/Projects"
import Contact from "../components/sections/Contact"
import Footer from "../components/sections/Footer"

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
