import React from 'react'
import {Link} from 'react-router-dom'

const Dropdown = ({isOpen,toggle}) => {
    return (
        <div className={isOpen ? 'grid grid-rows-4 text-center items-center bg-yellow-500' :'hidden'}
        onClick={toggle}>
            <Link className="pl-4" to='/'>Ana Sayfa</Link>
            <Link className="pl-4" to='/Menu'>Menu</Link>
            <Link className="pl-4" to='/About'>Hakkında</Link>
            <Link className="pl-4" to='/Contact'>İletişim</Link>
        </div>
    )
}

export default Dropdown
