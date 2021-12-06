import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-momo " role="navigation">
            <Link className="pl-8 text-xl" to='/'>
            <h1 className="w-8 rounded-full grid justify-center bg-yellow-500 hover:bg-yellow-200">
                 CV
            </h1> 
            </Link>
            <div className="px-4 cursor-pointer md:hidden">
            <svg fill="none" height="24" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
            </div>
            <div className="pr-4 md:block hidden">
            <Link className="pl-4" to='/'>Ana Sayfa</Link>
            <Link className="pl-4" to='/Menu'>Menu</Link>
            <Link className="pl-4" to='/About'>Hakkında</Link>
            <Link className="pl-4" to='/Contact'>İletişim</Link>
            </div>
        </nav>
    )
}

export default Navbar
