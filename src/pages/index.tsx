import About from '@/Component/About'
import Contact from '@/Component/Contact'
import Footer from '@/Component/Footer'
import Header from '@/Component/Header'
import Home from '@/Component/Home'
import Projects from '@/Component/Projects'
import Services from '@/Component/Services'
import Testimonies from '@/Component/Testimonies'
import React from 'react'


const index = () => {
  return (
    <div>
      <Header />
      <section>
        <Home />
        <About />
        <Services />
        <Projects />
        <Testimonies />
        <Contact />
      </section>
    <Footer />


    </div>
  )
}

export default index