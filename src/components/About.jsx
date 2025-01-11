import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
    return (
        <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-32 w-full overflow-hidden' id='About'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 '>Emerald <span className='underline underline-offset-4 decoration-1 under font-light'>Cilebut</span></h1>
            <p className=' max-w-80 text-center mb-8'>Passion Tentang Properti, Berdedikasi pada Visi Anda</p>
            <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20 '>
                {/* YouTube Embed */}
                <div className="w-full sm:w-1/2 max-w-lg aspect-video space-y-14">
                    <iframe
                        className="w-full h-full rounded-lg shadow-lg"
                        src="https://www.youtube.com/embed/EXmx8aMNa7Q?start=13" // Ganti VIDEO_ID dengan ID video YouTube Anda
                        title="Emerald Cilebut Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <iframe
                        className="hidden md:block w-full h-full rounded-lg shadow-lg"
                        src="https://www.youtube.com/embed/cHfi8k5fX6k" // Ganti VIDEO_ID dengan ID video YouTube Anda
                        title="Emerald Cilebut Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                    <p className='mb-5 max-w-lg '>Emerald Cilebut, proyek perumahan yang dikembangkan oleh Emerald Land Development di Bogor, menawarkan konsep hunian yang cerdas dan sederhana. Dengan fasilitas eksklusif dan sistem keamanan tingkat tinggi, perumahan ini memenuhi kebutuhan gaya hidup modern tanpa mengorbankan kenyamanan.

                        Terletak di lingkungan hijau dengan pemandangan yang menawan, perumahan cluster Emerald Cilebut menonjolkan desain minimalis yang menarik. Dengan penggunaan sistem utilitas bawah tanah, keindahan lingkungan terjaga tanpa gangguan visual dari tiang dan kabel listrik.

                        Lokasinya yang strategis di Bogor, sebagai kota penyangga Jakarta, memberikan akses mudah melalui commuter line dan jaringan tol. Hanya berjarak 1 kilometer dari Stasiun Cilebut, perumahan ini juga dikelilingi oleh beragam fasilitas umum seperti taman rekreasi Marcopolo Water Adventure (4 kilometer) dan sekolah Al Azhar Islamic School (5 kilometer). Ini menjadikan Emerald Cilebut sebagai pilihan ideal bagi mereka yang menginginkan gaya hidup urban yang nyaman dan terjangkau.</p>
                    <button className='bg-green-600 text-white px-8 py-2 rounded'>Learn more</button>
                </div>
            </div>

        </div>
    )
}

export default About
