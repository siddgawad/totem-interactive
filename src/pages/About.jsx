import React from 'react'
import AboutUsEntry from '../components/About/AboutUsEntry'
import Navbar from '../components/Home/Navbar'
import Footer from '../components/Home/Footer'

const About = () => {
  return (
    <>
    <Navbar />
    <div className='bg-black'> 
      <AboutUsEntry />
      </div>
      <Footer />
      </>
  )
}

export default About
