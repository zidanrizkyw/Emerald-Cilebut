import React from 'react'
import { assets } from '../assets/assets'
import { Icon } from '@iconify/react/dist/iconify.js'

const Footer = () => {
    return (
        <div className='flex flex-col lg:flex-row lg:justify-between bg-slate-400 p-10 lg:space-x-10 space-y-10'>
            <div className='flex flex-col justify-center items-center w-full lg:w-1/3 '>
                <div className='flex justify-center items-center space-x-2'>
                    <img src={assets.logo_emerald} alt='' className='w-10 h-auto' />
                    <h2 className='text-2xl font-bold'> <span className='text-green-700'>Emerald</span> <span className='text-yellow-700'>Cilebut</span></h2>
                </div>
                <div className='flex justify-center pt-5 space-x-5'>
                    <a href='https://www.instagram.com/emerald.cilebut.epic?igsh=dzN2aTIxNTM3Zjdz' target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:instagram" width="24" height="24" />
                    </a>
                    <a href='https://www.tiktok.com/@emeraldcilebut_mala?is_from_webapp=1&sender_device=pc' target="_blank" rel="noopener noreferrer">
                        <Icon icon="ic:baseline-tiktok" width="24" height="24" />
                    </a>
                    <a href='https://www.facebook.com/emeraldcilebutofficial/?locale=id_ID' target="_blank" rel="noopener noreferrer">
                        <Icon icon="ic:baseline-facebook" width="24" height="24" />
                    </a>


                </div>

            </div>

            <div className='flex justify-center items-center text-center w-full lg:w-1/3 '>
                <p className="">
                    Jl. Melati Raya, Cilebut Barat, Sukaraja, Kabupaten Bogor, Jawa
                    Barat 16710
                </p>
            </div>

            <div className='flex justify-center text-center w-full lg:w-1/3 '>
                <p className="">
                    Emerald Cilebut, destinasi rumah pertama bagi karakter milenial di
                    Cilebut. Desain modern, fasilitas inovatif, dan suasana yang
                    menginspirasi, menciptakan tempat ideal untuk memulai perjalanan
                    hunian. Temukan kenyamanan dan gaya hidup yang dinamis di rumah
                    impian Anda.
                </p>
            </div>

        </div>



    )
}

export default Footer
