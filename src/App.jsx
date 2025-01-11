import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Catania from './components/Catania'
import Ruby from './components/Ruby'
import Ametis from './components/Ametis'
import Ruko from './components/Ruko'
import Fasilitas from './components/Fasilitas'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer'
import ImageSlider from './components/ImageSlider'
import Location from './components/Location'

function App() {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer />
      <Header />
      <About />
      <div className='flex justify-center bg-slate-200'>
        <ImageSlider />
      </div>
      <Catania />
      <Ruby />
      <Ametis />
      <Ruko />
      <div className='flex justify-center '>
        <Fasilitas />
      </div>
      <Location/>
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
