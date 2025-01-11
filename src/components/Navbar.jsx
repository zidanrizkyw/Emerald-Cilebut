import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { assets } from '../assets/assets'

const Navbar = () => {
  const [showMobileMenu, setshowMobileMenu] = useState(false)

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showMobileMenu])
  return (
    <div className='absolute top-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <div className='flex items-center space-x-2'>
          <img src={assets.logo_emerald} alt='' className='w-10 h-auto' />
          <h2 className='text-2xl font-bold'> <span className='text-green-700'>Emerald</span> <span className='text-yellow-700'>Cilebut</span></h2>
        </div>
        <ul className='hidden md:flex gap-7 text-green-700 '>
          <a href='#Header' className='cursor-pointer hover:text-gray-400'>Home</a>
          <a href='#About' className='cursor-pointer hover:text-gray-400'>About</a>
          <a href='#Cluster' className='cursor-pointer hover:text-gray-400'>Cluster</a>
          <a href='#Testimonials' className='cursor-pointer hover:text-gray-400'>Testimonials</a>
        </ul>
        <a
          href="https://wa.me/085600945038"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex space-x-2 bg-green-700 px-8 py-2 rounded-full text-white"
        >
          <Icon icon="flowbite:whatsapp-solid" width="24" height="24" />
          <p>Whatsapp</p>
        </a>

        {/* <button className='hidden md:block bg-green-700 px-8 py-2 rounded-full text-white text-sm'> Whatsapp</button> */}
        <img onClick={() => setshowMobileMenu(true)} src={assets.menu_icon} alt='' className='md:hidden w-7 cursor-pointer'></img>
      </div>

      {/*--------------Mobile Menu----------- */}
      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
          <img onClick={() => setshowMobileMenu(false)} src={assets.cross_icon} className='w-6' alt=''></img>
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
          <a onClick={() => setshowMobileMenu(false)} href='#Header' className='px-4 py-2 rounded-full inline-block'>Home</a>
          <a onClick={() => setshowMobileMenu(false)} href='#About' className='px-4 py-2 rounded-full inline-block'>About</a>
          <a onClick={() => setshowMobileMenu(false)} href='#Cluster' className='px-4 py-2 rounded-full inline-block'>Cluster</a>
          <a onClick={() => setshowMobileMenu(false)} href='#Testimonials' className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
          <a
          href="https://wa.me/085600945038"
          target="_blank"
          rel="noopener noreferrer"
          className="flex space-x-2 bg-green-700 px-8 py-2 rounded-full text-white"
        >
          <Icon icon="flowbite:whatsapp-solid" width="24" height="24" />
          <p>Whatsapp</p>
        </a>
        </ul>
      </div>

    </div>
  )
}

export default Navbar
