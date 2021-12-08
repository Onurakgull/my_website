import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({toggle}) => {
    return (
        <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-momo " role="navigation">     
            <Link className="pl-8 text-xl" to='/'>
            <div className="w-20 h-10 rounded-xl flex justify-center items-center bg-yellow-500 hover:bg-yellow-200 transition-colors">
                <h1 className="ml-6">CV</h1>
            </div> 
            </Link>
            <a className="flex top-4 left-8 absolute" href="https://www.linkedin.com/in/onur-akg%C3%BCl25/" target="_blank" rel="noreferrer">
            <svg className="w-8 h-8" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="1" id="_1"><path d="M255.13,385.54a15,15,0,0,1-11.14-5L103.67,224.93a15,15,0,0,1,11.14-25H171V63a15,15,0,0,1,15-15H324.3a15,15,0,0,1,15,15V199.89h56.16a15,15,0,0,1,11.14,25L266.27,380.58A15,15,0,0,1,255.13,385.54ZM148.53,229.89l106.6,118.25L361.74,229.89H324.3a15,15,0,0,1-15-15V78H201V214.89a15,15,0,0,1-15,15Z"/><path d="M390.84,450H119.43a65.37,65.37,0,0,1-65.3-65.29V346.54a15,15,0,0,1,30,0v38.17A35.34,35.34,0,0,0,119.43,420H390.84a35.33,35.33,0,0,0,35.29-35.29V346.54a15,15,0,0,1,30,0v38.17A65.37,65.37,0,0,1,390.84,450Z"/></g></svg>
            </a>
            
            <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
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
