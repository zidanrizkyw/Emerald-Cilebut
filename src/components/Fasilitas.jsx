import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { ChevronLeft, ChevronRight } from 'react-feather'


const Fasilitas = () => {

    const images = [
        assets.fasilitas1,
        assets.fasilitas2
    ];

    const [curr, setCurr] = useState(0)

    // Fungsi untuk slide ke gambar sebelumnya
    const prev = () => {
        setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
    };

    // Fungsi untuk slide ke gambar berikutnya
    const next = () => {
        setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));
    };


    return (
        <div className='overflow-hidden relative w-full lg:w-3/4 mb-20'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Fasilitas<span className='underline underline-offset-4 decoration-1 under font-light'>Cluster</span></h1>
            <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting Spaces, Building Legacies-Explore Our Portfolio</p>
            <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${curr * 100}%)`}}>
                {images.map((image, index) => (
                    <img src={image} key={index} className='rounded-xl'></img>
                ))}
            </div>
            <div className='absolute inset-0 flex items-center justify-between p-4'>
                <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                    <ChevronLeft size={40} />
                </button>
                <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                    <ChevronRight size={40} />
                </button>
            </div>

            <div className='absolute bottom-4 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {images.map((_, i) => (
                        <div className={`transition-all w-3 h-3 bg-green-500 rounded-full ${curr === i ? "p-2" : "bg-opacity-50"}`}/>
                    ))}

                </div>

            </div>


        </div>
    )
}

export default Fasilitas
