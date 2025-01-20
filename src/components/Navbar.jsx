import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { assets } from '../assets/assets'

const Navbar = () => {
  const [showMobileMenu, setshowMobileMenu] = useState(false)
  const code = `+62`

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
          href="https://api.whatsapp.com/send?phone=6285600945038&text=Halo,%20mohon%20info%20terkait%20perumahan%20Emerald%20Cilebut"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex space-x-2 bg-green-700 px-8 py-2 rounded-full text-white"
        >
          <Icon icon="flowbite:whatsapp-solid" width="24" height="24" />
          <p>Whatsapp</p>
        </a>
        {/* <a href="https://api.whatsapp.com/send?phone=622180675787&amp;text=Halo, saya mau informasi lebih lanjut tentang Hacktiv8. || Hello, I want to know more about Hacktiv8." target="_blank" rel="noopener noreferrer" class="max-md:w-[250px] flex justify-end"><div class="flex cursor-pointer items-center max-md:w-[225px] bg-[#25D366] px-4 py-2 xl:px-5 xl:py-3 rounded-[10px] space-x-2"><svg preserveAspectRatio="none" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 xl:w-10 xl:h-10 "><g clip-path="url(#wa_svg__a)"><path d="M51.257 8.72C45.617 3.1 38.117.002 30.126 0 13.659 0 .258 13.337.252 29.73A29.576 29.576 0 0 0 4.24 44.594L.002 60l15.836-4.134a29.956 29.956 0 0 0 14.275 3.62h.012c16.464 0 29.866-13.34 29.873-29.732.003-7.945-3.102-15.415-8.741-21.035ZM30.126 54.463h-.01a24.883 24.883 0 0 1-12.637-3.445l-.907-.536-9.398 2.453 2.51-9.118-.592-.935a24.566 24.566 0 0 1-3.796-13.151c.006-13.626 11.143-24.71 24.839-24.71 6.632.002 12.866 2.576 17.553 7.247 4.688 4.67 7.268 10.88 7.266 17.483-.006 13.625-11.144 24.712-24.829 24.712Z" fill="#E0E0E0"></path><path d="m1.373 58.29 4.045-14.702a28.223 28.223 0 0 1-3.806-14.184C1.619 13.76 14.407 1.033 30.119 1.033c7.626.003 14.784 2.958 20.165 8.32 5.383 5.363 8.346 12.492 8.342 20.073C58.62 45.07 45.831 57.798 30.12 57.798c0 0 .001 0 0 0h-.012a28.599 28.599 0 0 1-13.623-3.453L1.373 58.291Z" fill="url(#wa_svg__b)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22.744 17.108c-.553-1.223-1.135-1.248-1.66-1.27-.43-.018-.923-.016-1.415-.016s-1.291.184-1.967.919c-.677.735-2.583 2.512-2.583 6.126 0 3.614 2.644 7.107 3.013 7.597.369.49 5.104 8.144 12.604 11.088 6.233 2.447 7.501 1.96 8.854 1.838 1.353-.122 4.365-1.776 4.98-3.492.615-1.715.615-3.185.43-3.492-.184-.306-.676-.49-1.414-.857-.738-.368-4.365-2.145-5.041-2.39-.677-.245-1.169-.367-1.66.368-.493.735-1.906 2.389-2.336 2.879-.43.49-.861.552-1.6.184-.737-.368-3.113-1.143-5.933-3.645-2.193-1.947-3.674-4.352-4.104-5.087-.43-.735-.047-1.133.324-1.5.33-.328.738-.857 1.107-1.286.368-.429.49-.735.737-1.224.246-.491.123-.92-.062-1.287-.184-.368-1.618-4-2.274-5.453Z" fill="#fff"></path><path d="M51.012 8.625C45.437 3.07 38.022.009 30.124.005 13.847.006.601 13.19.594 29.396a29.236 29.236 0 0 0 3.941 14.692L.346 59.317 16 55.23a29.614 29.614 0 0 0 14.111 3.578h.013c16.274 0 29.523-13.186 29.53-29.39.002-7.854-3.067-15.238-8.642-20.793Zm-20.888 45.22h-.01a24.596 24.596 0 0 1-12.492-3.406l-.896-.53-9.29 2.425 2.48-9.014-.584-.924a24.284 24.284 0 0 1-3.752-13C5.585 15.927 16.595 4.97 30.133 4.97c6.556.002 12.718 2.547 17.352 7.164 4.634 4.617 7.184 10.754 7.183 17.282-.006 13.47-11.016 24.428-24.544 24.428Z" fill="#fff"></path></g><defs><linearGradient id="wa_svg__b" x1="30" y1="58.291" x2="30" y2="1.033" gradientUnits="userSpaceOnUse"><stop stop-color="#20B038"></stop><stop offset="1" stop-color="#60D66A"></stop></linearGradient><clipPath id="wa_svg__a"><path fill="#fff" d="M0 0h60v60H0z"></path></clipPath></defs></svg><p class="text-body xl:text-body-xl font-bold !text-neutral-pure-white">Chat on WhatsApp</p></div></a> */}
        {/* <a
          href="https://api.whatsapp.com/send?phone=622180675787&amp;text=Halo, saya mau informasi lebih lanjut tentang Hacktiv8. || Hello, I want to know more about Hacktiv8."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex space-x-2 bg-green-700 px-8 py-2 rounded-full text-white"
        >
          <Icon icon="flowbite:whatsapp-solid" width="24" height="24" />
          <p>Whatsapp</p>
        </a> */}





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
            href="https://api.whatsapp.com/send?phone=6285600945038&text=Halo,%20mohon%20info%20terkait%20perumahan%20Emerald%20Cilebut"
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
