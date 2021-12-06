import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className="bg-white h-screen flex flex-col justify-center items-center">
            <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
                ONUR AKGÜL
            </h1>
            <Link to="/" className="py-6 px-10 bg-yellow-500 rounded-full text-3xl mr-1 hover:bg-yellow-300 transition 
            duration-300 ease-in-out flex items-center animate-bounce">
                Daha Fazla
               <svg className="ml-2 mt-2" fill="none" height="28" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"/><polyline points="12 16 16 12 12 8"/><line x1="8" x2="16" y1="12" y2="12"/></svg>
            </Link>
        </div>
    )
}

export default Hero
