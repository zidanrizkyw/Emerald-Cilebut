import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'

const Ruby = () => {

    const images = [
        assets.ruby1, // Ganti dengan path gambar sebenarnya
        assets.ruby2, // Ganti dengan path gambar sebenarnya
        assets.ruby3, // Ganti dengan path gambar sebenarnya
        assets.ruby4, // Ganti dengan path gambar sebenarnya
        assets.ruby5, // Ganti dengan path gambar sebenarnya
        assets.ruby6, // Ganti dengan path gambar sebenarnya
        assets.ruby7, // Ganti dengan path gambar sebenarnya
        assets.ruby8, // Ganti dengan path gambar sebenarnya

    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, SetCardsToShow] = useState(1);

    useEffect(() => {
        const updateCardsToShow = () => {
            if (window.innerWidth >= 1024) {
                SetCardsToShow(projectsData.length)
            } else {
                SetCardsToShow(1)
            };
        };
        updateCardsToShow();

        window.addEventListener('resize', updateCardsToShow);
        return () => window.removeEventListener('resize', updateCardsToShow);

    }, [])

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
    }
    const prevProject = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1)
    }

    return (
        <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Ruby<span className='underline underline-offset-4 decoration-1 under font-light'>Type</span></h1>
            <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting Spaces, Building Legacies-Explore Our Portfolio</p>

            <div className='flex justify-center items-center w-full mb-10'>
                <img src={assets.ruby9} className='' />
            </div>
            {/* slider buttons */}

            <div className='flex justify-end items-center mb-8'>
                <button onClick={prevProject} className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Project'>
                    <img src={assets.left_arrow} alt='Previous'></img>
                </button>
                <button onClick={nextProject} className='p-3 bg-gray-200 rounded mr-2' aria-label='Next Project'>
                    <img src={assets.right_arrow} alt='Next'></img>
                </button>
            </div>

            {/* project slider container */}
            <div className='overflow-hidden'>
                <div className='flex gap-8 transition-transform duration-500 ease-in-out'
                    style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}
                >
                    {images.map((image, index) => (
                        <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                            <img src={image} className='w-full h-full mb-14'></img>
                            {/* <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                                <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                                    <h2 className='text-xl font-semibold text-gray-800'>{project.title}</h2>
                                    <p className='text-gray-500 text-sm'>{project.price} <span className='px-1'>|</span> {project.location}</p>
                                </div>

                            </div> */}
                        </div>
                    ))}
                </div>
                {/* YouTube Shorts */}
                <div className="flex flex-col lg:flex-row justify-center gap-6 mt-14">
                    <div className="aspect-video w-full lg:w-1/2">
                        <iframe
                            className="w-full h-full rounded-lg shadow-lg"
                            src="https://www.youtube.com/embed/VkwMsSG7sg4"
                            title="YouTube Short 1"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Ruby
